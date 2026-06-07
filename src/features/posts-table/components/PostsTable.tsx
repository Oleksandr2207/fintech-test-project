import { flexRender } from '@tanstack/react-table'
import type { Table } from '@tanstack/react-table'
import type { PostWithUser } from '@/shared/types/post'
import { CreatePostButton } from '@/features/create-post/components/CreatePostButton'
import { postsTableColumns } from '../columns'
import { usePostsTable } from '../hooks/usePostsTable'
import { TableRow } from './TableRow'
import { UserFilter } from './UserFilter'

interface PostsTableProps {
  onRowClick: (post: PostWithUser) => void
}

function PostsTableContent({
  table,
  onRowClick,
}: {
  table: Table<PostWithUser>
  onRowClick: (post: PostWithUser) => void
}) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full min-w-[900px] border-collapse text-left text-sm">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border-b border-slate-200 bg-slate-50">
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="whitespace-nowrap px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500"
                  style={{ width: header.getSize() }}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.length === 0 ? (
            <tr>
              <td
                colSpan={postsTableColumns.length}
                className="px-4 py-12 text-center text-slate-500"
              >
                No posts found for the selected filter.
              </td>
            </tr>
          ) : (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} row={row} onClick={() => onRowClick(row.original)} />
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export function PostsTable({ onRowClick }: PostsTableProps) {
  const { table, selectedUserId, setSelectedUserId, users } = usePostsTable({
    onRowClick,
  })

  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <UserFilter
          users={users}
          value={selectedUserId}
          onChange={setSelectedUserId}
        />
        <CreatePostButton />
      </div>
      <PostsTableContent table={table} onRowClick={onRowClick} />
    </section>
  )
}
