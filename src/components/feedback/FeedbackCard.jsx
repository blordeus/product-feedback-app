function getCommentCount(comments = []) {
  return comments.reduce((total, comment) => {
    const replyCount = comment.replies ? comment.replies.length : 0;
    return total + 1 + replyCount;
  }, 0);
}

export default function FeedbackCard({ feedback }) {
  const commentCount = getCommentCount(feedback.comments);

  return (
    <article className="flex items-start gap-8 rounded-[10px] bg-white p-8">
      <button className="flex min-w-[40px] flex-col items-center rounded-[10px] bg-light px-3 py-2 text-[13px] font-bold text-dark">
        <span className="text-secondary">^</span>
        <span>{feedback.upvotes}</span>
      </button>

      <div className="flex-1">
        <h3 className="text-[18px] font-bold text-dark">{feedback.title}</h3>
        <p className="mt-1 text-[16px] leading-[23px] text-text">
          {feedback.description}
        </p>

        <div className="mt-3 inline-flex rounded-[10px] bg-light px-4 py-2 text-[13px] font-semibold text-secondary">
          {feedback.category}
        </div>
      </div>

      <div className="flex items-center gap-2 self-center text-[16px] font-bold text-dark">
        <span className="text-dark/25">💬</span>
        <span>{commentCount}</span>
      </div>
    </article>
  );
}