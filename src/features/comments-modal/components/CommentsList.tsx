import type { Comment } from '@/shared/types/comment'

interface CommentsListProps {
  comments: Comment[]
  isLoading: boolean
  isError: boolean
}

export function CommentsList({ comments, isLoading, isError }: CommentsListProps) {
  if (isLoading) {
    return <p className="py-8 text-center text-sm text-slate-500">Loading comments...</p>
  }

  if (isError) {
    return (
      <p className="py-8 text-center text-sm text-red-600">
        Failed to load comments. Please try again.
      </p>
    )
  }

  if (comments.length === 0) {
    return <p className="py-8 text-center text-sm text-slate-500">No comments yet.</p>
  }

  return (
    <ul className="space-y-4">
      {comments.map((comment) => (
        <li
          key={comment.id}
          className="rounded-lg border border-slate-200 bg-slate-50 p-4"
        >
          <div className="mb-2 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-semibold text-slate-900">{comment.name}</p>
            <p className="text-xs text-indigo-600">{comment.email}</p>
          </div>
          <p className="text-sm leading-relaxed text-slate-600">{comment.body}</p>
        </li>
      ))}
    </ul>
  )
}
