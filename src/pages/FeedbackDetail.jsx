import { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import CommentItem from "../components/comments/CommentItem";
import AddCommentForm from "../components/comments/AddCommentForm";
import data from "../data/data.json";

function getCommentCount(comments = []) {
  return comments.reduce((total, comment) => {
    const replyCount = comment.replies ? comment.replies.length : 0;
    return total + 1 + replyCount;
  }, 0);
}

export default function FeedbackDetail({
  productRequests,
  onAddComment,
  onAddReply,
}) {
  const { id } = useParams();
  const [activeReplyTarget, setActiveReplyTarget] = useState(null);

  const feedback = productRequests.find((item) => item.id === Number(id));

  const commentCount = useMemo(() => {
    return getCommentCount(feedback?.comments || []);
  }, [feedback]);

  function handleAddCommentSubmit(content) {
    if (!feedback) return;

    const existingComments = feedback.comments || [];
    const nextCommentId =
      existingComments.length > 0
        ? Math.max(...existingComments.map((comment, index) => comment.id ?? index + 1)) + 1
        : 1;

    const newComment = {
      id: nextCommentId,
      content,
      user: data.currentUser,
    };

    onAddComment(feedback.id, newComment);
  }

  function handleStartReply({ type, commentId, replyingTo, replyIndex }) {
    if (type === "comment") {
      setActiveReplyTarget(`comment-${commentId}`);
      return;
    }

    setActiveReplyTarget(`reply-${commentId}-${replyingTo}-${replyIndex}`);
  }

  function handleCancelReply() {
    setActiveReplyTarget(null);
  }

  function handleSubmitReply({ commentId, replyingTo, content }) {
    if (!feedback) return;

    const parentComment = (feedback.comments || []).find(
      (comment) => comment.id === commentId
    );

    const nextReply = {
      content,
      replyingTo,
      user: data.currentUser,
    };

    if (!parentComment) return;

    onAddReply(feedback.id, commentId, nextReply);
    setActiveReplyTarget(null);
  }

  if (!feedback) {
    return (
      <main className="p-6">
        <p>Feedback not found.</p>
        <Link to="/" className="text-secondary underline">
          Go back
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-[730px] px-4 py-8 sm:px-6">
      <div className="mb-6 flex items-center justify-between">
        <Link
          to="/"
          className="text-[14px] font-bold text-text hover:underline"
        >
          ← Go Back
        </Link>

        <Link
          to={`/edit/${feedback.id}`}
          className="rounded-[10px] bg-secondary px-5 py-3 text-[14px] font-bold text-white"
        >
          Edit Feedback
        </Link>
      </div>

      <div className="rounded-[10px] bg-white p-6 sm:p-7">
        <h1 className="text-[18px] font-bold text-dark">{feedback.title}</h1>

        <p className="mt-2 text-[14px] text-text sm:text-[16px]">
          {feedback.description}
        </p>

        <div className="mt-4 inline-flex rounded-[10px] bg-light px-4 py-2 text-[13px] font-semibold text-secondary">
          {feedback.category}
        </div>
      </div>

      <section className="mt-6 rounded-[10px] bg-white p-6 sm:p-8">
        <h2 className="text-[18px] font-bold text-dark">
          {commentCount} Comment{commentCount === 1 ? "" : "s"}
        </h2>

        {feedback.comments && feedback.comments.length > 0 ? (
          <div className="mt-7 space-y-6">
            {feedback.comments.map((comment, index) => (
              <CommentItem
                key={comment.id ?? `${comment.user.username}-${index}`}
                comment={comment}
                isLast={index === feedback.comments.length - 1}
                activeReplyTarget={activeReplyTarget}
                onStartReply={handleStartReply}
                onCancelReply={handleCancelReply}
                onSubmitReply={handleSubmitReply}
              />
            ))}
          </div>
        ) : (
          <p className="mt-4 text-[15px] text-text">No comments yet.</p>
        )}
      </section>

      <AddCommentForm onAddComment={handleAddCommentSubmit} />
    </main>
  );
}