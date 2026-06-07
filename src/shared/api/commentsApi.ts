import type { Comment } from '@/shared/types/comment'
import { apiClient } from './axios'

export const commentsApi = {
  getByPostId: async (postId: number): Promise<Comment[]> => {
    const { data } = await apiClient.get<Comment[]>(`/posts/${postId}/comments`)
    return data
  },
}
