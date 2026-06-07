import { useMutation } from '@tanstack/react-query'
import { postsApi } from '@/shared/api/postsApi'
import type { CreatePostPayload } from '@/shared/types/post'
import { usePostsStore } from '@/store/usePostsStore'

export function useCreatePost() {
  const addPost = usePostsStore((state) => state.addPost)

  return useMutation({
    mutationFn: (payload: CreatePostPayload) => postsApi.create(payload),
    onSuccess: (newPost) => {
      addPost(newPost)
    },
  })
}
