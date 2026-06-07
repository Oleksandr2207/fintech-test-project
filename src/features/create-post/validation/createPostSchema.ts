import * as yup from 'yup'

export const createPostSchema = yup.object({
  title: yup
    .string()
    .required('Title is required')
    .matches(/^[A-Za-z0-9 ]+$/, 'Title must contain only Latin letters and numbers')
    .min(3, 'Title must be at least 3 characters')
    .max(20, 'Title must be at most 20 characters'),
  body: yup
    .string()
    .required('Body is required')
    .min(20, 'Body must be at least 20 characters')
    .max(500, 'Body must be at most 500 characters'),
  userId: yup
    .string()
    .required('User ID is required')
    .matches(/^\d+$/, 'User ID must contain only numbers'),
})

export type CreatePostSchema = yup.InferType<typeof createPostSchema>
