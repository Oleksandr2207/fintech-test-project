import { Modal } from '@/shared/components/Modal'
import { CreatePostForm } from './CreatePostForm'

interface CreatePostModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CreatePostModal({ open, onOpenChange }: CreatePostModalProps) {
  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title="Create New Post"
      description="Fill in the form below. The post will be added to the table after submission."
    >
      <CreatePostForm onSuccess={() => onOpenChange(false)} />
    </Modal>
  )
}
