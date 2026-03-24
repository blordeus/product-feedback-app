import { useState } from "react";

const MAX_REPLY_LENGTH = 250;

export default function ReplyForm({
  replyingTo,
  onSubmitReply,
  onCancel,
}) {
  const [content, setContent] = useState("");

  const charactersLeft = MAX_REPLY_LENGTH - content.length;

  function handleChange(event) {
    const nextValue = event.target.value;

    if (nextValue.length <= MAX_REPLY_LENGTH) {
      setContent(nextValue);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedContent = content.trim();

    if (!trimmedContent) return;

    onSubmitReply(trimmedContent);
    setContent("");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 rounded-[10px] bg-bg p-4 sm:p-5">
      <label htmlFor={`reply-${replyingTo}`} className="sr-only">
        Reply to {replyingTo}
      </label>

      <textarea
        id={`reply-${replyingTo}`}
        value={content}
        onChange={handleChange}
        placeholder={`Reply to @${replyingTo}`}
        rows={4}
        className="w-full rounded-[5px] bg-white px-4 py-3 text-[15px] leading-[22px] text-dark outline-none placeholder:text-text focus:ring-2 focus:ring-secondary"
      />

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] text-text">
          {charactersLeft} Characters left
        </p>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-[10px] bg-dark px-5 py-3 text-[14px] font-bold text-white transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
          >
            Cancel
          </button>

          <button
            type="submit"
            disabled={!content.trim()}
            className="rounded-[10px] bg-primary px-5 py-3 text-[14px] font-bold text-white transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Post Reply
          </button>
        </div>
      </div>
    </form>
  );
}