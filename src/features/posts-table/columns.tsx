import { createColumnHelper } from '@tanstack/react-table'
import type { PostWithUser } from '@/shared/types/post'

const columnHelper = createColumnHelper<PostWithUser>()

export const postsTableColumns = [
  columnHelper.accessor('id', {
    header: 'Post ID',
    cell: (info) => info.getValue(),
    size: 80,
  }),
  columnHelper.accessor('title', {
    header: 'Post Title',
    cell: (info) => (
      <span className="line-clamp-2 font-medium text-slate-900">{info.getValue()}</span>
    ),
    size: 200,
  }),
  columnHelper.accessor('userId', {
    header: 'User ID',
    cell: (info) => info.getValue(),
    size: 80,
  }),
  columnHelper.accessor('userName', {
    header: 'User Name',
    cell: (info) => info.getValue(),
    size: 150,
  }),
  columnHelper.accessor('userEmail', {
    header: 'User Email',
    cell: (info) => (
      <span className="break-all text-indigo-600">{info.getValue()}</span>
    ),
    size: 180,
  }),
  columnHelper.accessor('body', {
    header: 'Post Body',
    cell: (info) => (
      <span className="line-clamp-3 text-slate-600">{info.getValue()}</span>
    ),
    size: 300,
  }),
]
