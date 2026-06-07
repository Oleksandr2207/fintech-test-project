import { Button } from '@/shared/components/Button'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null

  return (
    <div className="flex items-center justify-center gap-2 pt-4">
      <Button
        variant="secondary"
        className="px-3 py-1.5"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </Button>
      <span className="min-w-[5rem] text-center text-sm text-slate-600">
        {currentPage} / {totalPages}
      </span>
      <Button
        variant="secondary"
        className="px-3 py-1.5"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </Button>
    </div>
  )
}
