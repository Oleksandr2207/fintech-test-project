import { useState } from 'react'
import { CommentsModal } from '@/features/comments-modal/components/CommentsModal'
import { PostsTable } from '@/features/posts-table/components/PostsTable'
import { Loader } from '@/shared/components/Loader'
import { useFetchPostsData } from '@/shared/hooks/useFetchPostsData'
import type { PostWithUser } from '@/shared/types/post'

export function HomePage() {
  const { isLoading, isError } = useFetchPostsData()
  const [selectedPost, setSelectedPost] = useState<PostWithUser | null>(null)
  const [commentsOpen, setCommentsOpen] = useState(false)

  const handleRowClick = (post: PostWithUser) => {
    setSelectedPost(post)
    setCommentsOpen(true)
  }

  return (
    <div className="min-h-screen">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Posts Dashboard
          </h1>
          <p className="mt-1 text-sm text-slate-500 sm:text-base">
            Browse posts, filter by user, view comments, and create new posts.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-[1600px] px-4 py-6 sm:px-6 lg:px-8">
        {isLoading && <Loader label="Loading posts and users..." />}

        {isError && (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-6 text-center text-red-700">
            Failed to load data. Please refresh the page.
          </div>
        )}

        {!isLoading && !isError && <PostsTable onRowClick={handleRowClick} />}
      </main>

      <CommentsModal
        post={selectedPost}
        open={commentsOpen}
        onOpenChange={setCommentsOpen}
      />
    </div>
  )
}
