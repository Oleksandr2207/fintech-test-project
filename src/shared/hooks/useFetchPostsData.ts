import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { postsApi } from '@/shared/api/postsApi'
import { usersApi } from '@/shared/api/usersApi'
import { QUERY_KEYS } from '@/shared/constants/api'
import { usePostsStore } from '@/store/usePostsStore'

export function useFetchPostsData() {
  const setUsers = usePostsStore((state) => state.setUsers)
  const setPosts = usePostsStore((state) => state.setPosts)

  const usersQuery = useQuery({
    queryKey: QUERY_KEYS.users,
    queryFn: usersApi.getAll,
  })

  const postsQuery = useQuery({
    queryKey: QUERY_KEYS.posts,
    queryFn: postsApi.getAll,
  })

  useEffect(() => {
    if (usersQuery.data) {
      setUsers(usersQuery.data)
    }
  }, [usersQuery.data, setUsers])

  useEffect(() => {
    if (postsQuery.data) {
      setPosts(postsQuery.data)
    }
  }, [postsQuery.data, setPosts])

  return {
    isLoading: usersQuery.isLoading || postsQuery.isLoading,
    isError: usersQuery.isError || postsQuery.isError,
    error: usersQuery.error ?? postsQuery.error,
  }
}
