export const API_BASE_URL = 'https://jsonplaceholder.typicode.com'

export const QUERY_KEYS = {
  users: ['users'] as const,
  posts: ['posts'] as const,
  comments: (postId: number) => ['comments', postId] as const,
}
