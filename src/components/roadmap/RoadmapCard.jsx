import { Link } from "react-router-dom";

function getCommentCount(comments = []) {
  return comments.reduce((total, comment) => {
    const replyCount = comment.replies ? comment.replies.length : 0;
    return total + 1 + replyCount;
  }, 0);
}

function formatStatus(status) {
  if (status === "in-progress") return "In-Progress";
  return status.charAt(0).toUpperCase() + status.slice(1);
}

function getStatusColor(status) {
  if (status === "planned") return "bg-warning";
  if (status === "in-progress") return "bg-primary";
  return "bg-accent";
}

export default function RoadmapCard({ feedback }) {
  const commentCount = getCommentCount(feedback.comments);

  return (
    <article className="rounded-[10px] bg-white p-6">
      <div className="flex items-center gap-4 text-[13px] text-text sm:text-[16px]">
        <span className={`h-2 w-2 rounded-full ${getStatusColor(feedback.status)}`} />
        <span>{formatStatus(feedback.status)}</span>
      </div>

      <div className="mt-4">
        <Link
          to={`/feedback/${feedback.id}`}
          className="text-[13px] font-bold text-dark hover:text-secondary sm:text-[18px]"
        >
          {feedback.title}
        </Link>

        <p className="mt-2 text-[13px] leading-[19px] text-text sm:text-[16px] sm:leading-[23px]">
          {feedback.description}
        </p>

        <div className="mt-4 inline-flex rounded-[10px] bg-light px-4 py-2 text-[13px] font-semibold text-secondary">
          {feedback.category}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <button
          type="button"
          className="flex items-center gap-2 rounded-[10px] bg-light px-4 py-2 text-[13px] font-bold text-dark"
        >
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