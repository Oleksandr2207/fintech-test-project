import { useCallback, useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { commentsApi } from '@/shared/api/commentsApi'
import { QUERY_KEYS } from '@/shared/constants/api'
import { COMMENTS_PAGE_SIZE } from '../constants'

export function useComments(postId: number | null) {
  const [page, setPage] = useState(1)

  const query = useQuery({
    queryKey: postId ? QUERY_KEYS.comments(postId) : ['comments', 'idle'],
    queryFn: () => commentsApi.getByPostId(postId!),
    enabled: postId !== null,
  })

  const paginatedComments = useMemo(() => {
    if (!query.data) return []
    const start = (page - 1) * COMMENTS_PAGE_SIZE
    return query.data.slice(start, start + COMMENTS_PAGE_SIZE)
  }, [query.data, page])

  const totalPages = query.data
    ? Math.ceil(query.data.length / COMMENTS_PAGE_SIZE)
    : 0

  const resetPage = useCallback(() => setPage(1), [])

  return {
    comments: paginatedComments,
    isLoading: query.isLoading,
    isError: query.isError,
    page,
    setPage,
    totalPages,
    resetPage,
    totalCount: query.data?.length ?? 0,
  }
}
