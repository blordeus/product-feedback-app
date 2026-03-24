import { resolveAvatar } from "../../utils/avatarMap";

export default function ReplyItem({ reply }) {
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
            className="text-[13px] font-semibold text-secondary hover:underline"
          >
            Reply
          </button>
        </div>

        <p className="mt-4 text-[13px] leading-[19px] text-text sm:text-[15px] sm:leading-[22px]">
          <span className="font-bold text-primary">@{reply.replyingTo} </span>
          {reply.content}
        </p>
      </div>
    </article>
  );
}