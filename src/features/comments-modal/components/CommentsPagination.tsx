import { Pagination } from '@/shared/components/Pagination'

interface CommentsPaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function CommentsPagination({
  currentPage,
  totalPages,
  onPageChange,
}: CommentsPaginationProps) {
  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={onPageChange}
    />
  )
}
