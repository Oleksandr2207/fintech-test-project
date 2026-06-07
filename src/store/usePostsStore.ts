import { create } from 'zustand'
import type { Post } from '@/shared/types/post'
import type { User } from '@/shared/types/user'

interface PostsState {
  users: User[]
  posts: Post[]
  setUsers: (users: User[]) => void
  setPosts: (posts: Post[]) => void
  addPost: (post: Post) => void
}

export const usePostsStore = create<PostsState>((set) => ({
  users: [],
  posts: [],
  setUsers: (users) => set({ users }),
  setPosts: (posts) => set({ posts }),
  addPost: (post) =>
    set((state) => ({
      posts: [post, ...state.posts],
    })),
}))
