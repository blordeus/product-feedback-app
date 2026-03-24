import { resolveAvatar } from "../../utils/avatarMap";
import ReplyForm from "./ReplyForm";

function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

export default function ReplyItem({
  reply,
  isReplying,
  onStartReply,
  onCancelReply,
  onSubmitReply,
}) {
  return (
    <article className="flex gap-4">
      <img
        src={resolveAvatar(reply.user.image)}
        alt={reply.user.name}
        className="h-10 w-10 rounded-full"
      />

      <div className="flex-1">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-[13px] font-bold text-dark sm:text-[14px]">
              {reply.user.name}
            </h3>
            <p className="text-[13px] text-text sm:text-[14px]">
              @{reply.user.username}
            </p>
          </div>

          <button
            type="button"
            onClick={onStartReply}
            className="text-[13px] font-semibold text-secondary hover:underline focus:outline-none focus:underline"
          >
            Reply
          </button>
        </div>

        <p className="mt-4 text-[13px] leading-[19px] text-text sm:text-[15px] sm:leading-[22px]">
          <span className="font-bold text-primary">@{reply.replyingTo} </span>
          {reply.content}
        </p>

        {isReplying && (
          <ReplyForm
            replyingTo={reply.user.username}
            onCancel={onCancelReply}
            onSubmitReply={onSubmitReply}
          />
        )}
      </div>
    </article>
  );
}