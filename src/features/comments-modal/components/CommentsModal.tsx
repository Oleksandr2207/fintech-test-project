import { useEffect } from "react";
import { Modal } from "@/shared/components/Modal";
import type { PostWithUser } from "@/shared/types/post";
import { useComments } from "../hooks/useComments";
import { CommentsList } from "./CommentsList";
import { CommentsPagination } from "./CommentsPagination";

interface CommentsModalProps {
  post: PostWithUser | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CommentsModal({
  post,
  open,
  onOpenChange,
}: CommentsModalProps) {
  const {
    comments,
    isLoading,
    isError,
    page,
    setPage,
    totalPages,
    resetPage,
    totalCount,
  } = useComments(post?.id ?? null);

  useEffect(() => {
    if (open) {
      resetPage();
    }
  }, [open, post?.id, resetPage]);

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title={post ? `Comments for "${post.title}"` : "Comments"}
      description={
        post
          ? `Post #${post.id} · ${totalCount} comment${totalCount === 1 ? "" : "s"}`
          : undefined
      }
    >
      <CommentsList
        comments={comments}
        isLoading={isLoading}
        isError={isError}
      />
      <CommentsPagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </Modal>
  );
}
