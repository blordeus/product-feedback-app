import { Link } from "react-router-dom";

function getCommentCount(comments = []) {
  return comments.reduce((total, comment) => {
    const replyCount = comment.replies ? comment.replies.length : 0;
    return total + 1 + replyCount;
  }, 0);
}

export default function FeedbackCard({ feedback }) {
  const commentCount = getCommentCount(feedback.comments);

  return (
    <article className="rounded-[10px] bg-white p-6 sm:p-7">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-8">
        <div className="flex-1">
          <h3 className="text-[13px] font-bold text-dark sm:text-[18px]">
            <Link
              to={`/feedback/${feedback.id}`}
              className="hover:text-secondary"
            >
              {feedback.title}
            </Link>
          </h3>

          <p className="mt-2 text-[13px] leading-[19px] text-text sm:text-[16px] sm:leading-[23px]">
            {feedback.description}
          </p>

          <div className="mt-3 inline-flex rounded-[10px] bg-light px-4 py-2 text-[13px] font-semibold text-secondary">
            {feedback.category}
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between sm:mt-5">
        <button className="flex items-center gap-2 rounded-[10px] bg-light px-4 py-2 text-[13px] font-bold text-dark">
          <span className="text-secondary">^</span>
          <span>{feedback.upvotes}</span>
        </button>

        <div className="flex items-center gap-2 text-[13px] font-bold text-dark sm:text-[16px]">
          <span className="text-dark/25">💬</span>
          <span>{commentCount}</span>
        </div>
      </div>
    </article>
  );
}
