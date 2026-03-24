import ReplyItem from "./ReplyItem";
import { resolveAvatar } from "../../utils/avatarMap";

export default function CommentItem({ comment, isLast }) {
  const hasReplies = comment.replies && comment.replies.length > 0;

  return (
    <article
      className={`${!isLast ? "border-b border-[#8C92B3]/25 pb-6" : ""}`}
    >
      <div className="flex gap-4">
        <img
          src={resolveAvatar(comment.user.image)}
          alt={comment.user.name}
          className="h-10 w-10 rounded-full"
        />

        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-[13px] font-bold text-dark sm:text-[14px]">
                {comment.user.name}
              </h3>
              <p className="text-[13px] text-text sm:text-[14px]">
                @{comment.user.username}
              </p>
            </div>

            <button
              type="button"
              className="text-[13px] font-semibold text-secondary hover:underline"
            >
              Reply
            </button>
          </div>

          <p className="mt-4 text-[13px] leading-[19px] text-text sm:text-[15px] sm:leading-[22px]">
            {comment.content}
          </p>

          {hasReplies && (
            <div className="mt-6 border-l border-[#8C92B3]/25 pl-6 sm:pl-8">
              <div className="space-y-6">
                {comment.replies.map((reply) => (
                  <ReplyItem key={reply.content + reply.user.username} reply={reply} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}