import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '@/shared/components/Button'
import { usePostsStore } from '@/store/usePostsStore'
import { useCreatePost } from '../hooks/useCreatePost'
import type { CreatePostFormValues } from '../types'
import { createPostSchema } from '../validation/createPostSchema'

interface CreatePostFormProps {
  onSuccess: () => void
}

export function CreatePostForm({ onSuccess }: CreatePostFormProps) {
  const users = usePostsStore((state) => state.users)
  const { mutate, isPending, isError, error } = useCreatePost()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreatePostFormValues>({
    resolver: yupResolver(createPostSchema),
    defaultValues: {
      title: '',
      body: '',
      userId: '',
    },
  })

  const onSubmit = (values: CreatePostFormValues) => {
    mutate(
      {
        title: values.title.trim(),
        body: values.body.trim(),
        userId: Number(values.userId),
      },
      {
        onSuccess: () => {
          reset()
          onSuccess()
        },
      },
    )
  }

  const inputClassName =
    'w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 shadow-sm transition-colors focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20'

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-1.5">
        <label htmlFor="title" className="text-sm font-medium text-slate-700">
          Title
        </label>
        <input
          id="title"
          type="text"
          className={inputClassName}
          placeholder="Enter post title"
          {...register('title')}
        />
        {errors.title && (
          <p className="text-xs text-red-600">{errors.title.message}</p>
        )}
      </div>

      <div className="space-y-1.5">
        <label htmlFor="body" className="text-sm font-medium text-slate-700">
          Body
        </label>
        <textarea
          id="body"
          rows={5}
          className={`${inputClassName} resize-y`}
          placeholder="Enter post body"
          {...register('body')}
        />
        {errors.body && <p className="text-xs text-red-600">{errors.body.message}</p>}
      </div>

      <div className="space-y-1.5">
        <label htmlFor="userId" className="text-sm font-medium text-slate-700">
          User
        </label>
        <select id="userId" className={inputClassName} {...register('userId')}>
          <option value="">Select a user</option>
          {users.map((user) => (
            <option key={user.id} value={String(user.id)}>
              {user.name} (ID: {user.id})
            </option>
          ))}
        </select>
        {errors.userId && (
          <p className="text-xs text-red-600">{errors.userId.message}</p>
        )}
      </div>

      {isError && (
        <p className="rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
          Failed to create post. {error instanceof Error ? error.message : 'Try again.'}
        </p>
      )}

      <div className="flex flex-col-reverse gap-2 pt-2 sm:flex-row sm:justify-end">
        <Button type="submit" disabled={isPending} className="w-full sm:w-auto">
          {isPending ? 'Creating...' : 'Create Post'}
        </Button>
      </div>
    </form>
  )
}
