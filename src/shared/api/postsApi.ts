import type { CreatePostPayload, Post } from '@/shared/types/post'
import { apiClient } from './axios'

export const postsApi = {
  getAll: async (): Promise<Post[]> => {
    const { data } = await apiClient.get<Post[]>('/posts')
    return data
  },

  create: async (payload: CreatePostPayload): Promise<Post> => {
    const { data } = await apiClient.post<Post>('/posts', payload)
    return data
  },
}
