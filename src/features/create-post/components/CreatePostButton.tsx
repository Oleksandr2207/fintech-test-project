import { useState } from 'react'
import { Button } from '@/shared/components/Button'
import { CreatePostModal } from './CreatePostModal'

export function CreatePostButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)} className="w-full sm:w-auto">
        Create Post
      </Button>
      <CreatePostModal open={open} onOpenChange={setOpen} />
    </>
  )
}
