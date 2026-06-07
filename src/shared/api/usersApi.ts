import type { User } from '@/shared/types/user'
import { apiClient } from './axios'

export const usersApi = {
  getAll: async (): Promise<User[]> => {
    const { data } = await apiClient.get<User[]>('/users')
    return data
  },
}
