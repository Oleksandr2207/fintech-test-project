import type { Row } from '@tanstack/react-table'
import { flexRender } from '@tanstack/react-table'
import type { PostWithUser } from '@/shared/types/post'

interface TableRowProps {
  row: Row<PostWithUser>
  onClick: () => void
}

export function TableRow({ row, onClick }: TableRowProps) {
  return (
    <tr
      className="cursor-pointer border-b border-slate-100 transition-colors last:border-b-0 hover:bg-indigo-50/60"
      onClick={onClick}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onClick()
        }
      }}
    >
      {row.getVisibleCells().map((cell) => (
        <td key={cell.id} className="px-4 py-3 align-top">
          {flexRender(cell.column.columnDef.cell, cell.getContext())}
        </td>
      ))}
    </tr>
  )
}
