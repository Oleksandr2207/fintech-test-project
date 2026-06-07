import { useMemo, useState } from 'react'
import { getCoreRowModel, useReactTable } from '@tanstack/react-table'
import type { PostWithUser } from '@/shared/types/post'
import { usePostsStore } from '@/store/usePostsStore'
import { postsTableColumns } from '../columns'

interface UsePostsTableOptions {
  onRowClick: (post: PostWithUser) => void
}

export function usePostsTable({ onRowClick }: UsePostsTableOptions) {
  const posts = usePostsStore((state) => state.posts)
  const users = usePostsStore((state) => state.users)
  const [selectedUserId, setSelectedUserId] = useState('')

  const tableData = useMemo<PostWithUser[]>(() => {
    const userMap = new Map(users.map((user) => [user.id, user]))

    return posts
      .filter((post) =>
        selectedUserId ? post.userId === Number(selectedUserId) : true,
      )
      .map((post) => {
        const user = userMap.get(post.userId)
        return {
          ...post,
          userName: user?.name ?? 'Unknown',
          userEmail: user?.email ?? '—',
        }
      })
  }, [posts, users, selectedUserId])

  const table = useReactTable({
    data: tableData,
    columns: postsTableColumns,
    getCoreRowModel: getCoreRowModel(),
  })

  return {
    table,
    selectedUserId,
    setSelectedUserId,
    users,
    onRowClick,
  }
}
