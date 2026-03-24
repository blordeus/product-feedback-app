import { useState } from "react";

const MAX_COMMENT_LENGTH = 250;

export default function AddCommentForm({ onAddComment }) {
  const [content, setContent] = useState("");

  const charactersLeft = MAX_COMMENT_LENGTH - content.length;

  function handleChange(event) {
    const nextValue = event.target.value;

    if (nextValue.length <= MAX_COMMENT_LENGTH) {
      setContent(nextValue);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedContent = content.trim();

    if (!trimmedContent) return;

    onAddComment(trimmedContent);
    setContent("");
  }

  return (
    <section className="mt-6 rounded-[10px] bg-white p-6 sm:p-8">
      <h2 className="text-[18px] font-bold tracking-[-0.25px] text-dark">
        Add Comment
      </h2>

      <form onSubmit={handleSubmit} className="mt-6">
        <label htmlFor="comment" className="sr-only">
          Add your comment
        </label>

        <textarea
          id="comment"
          name="comment"
          value={content}
          onChange={handleChange}
          placeholder="Type your comment here"
          rows={5}
          className="w-full rounded-[5px] bg-bg px-6 py-4 text-[15px] leading-[22px] text-dark outline-none placeholder:text-text focus:ring-2 focus:ring-secondary"
        />

        <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[13px] text-text sm:text-[15px]">
            {charactersLeft} Characters left
          </p>

          <button
            type="submit"
            disabled={!content.trim()}
            className="rounded-[10px] bg-primary px-6 py-3 text-[14px] font-bold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Post Comment
          </button>
        </div>
      </form>
    </section>
  );
}