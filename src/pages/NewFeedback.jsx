import { Link } from "react-router-dom";

export default function NewFeedback() {
  return (
    <main className="mx-auto max-w-[540px] px-4 py-8 sm:px-6 sm:py-14">
      <Link
        to="/"
        className="text-[14px] font-bold text-text hover:underline"
      >
        ← Go Back
      </Link>

      <div className="relative mt-14 rounded-[10px] bg-white p-6 sm:p-10">
        <div className="absolute -top-7 left-6 flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#E84D70_0%,#A337F6_55%,#28A7ED_100%)] text-[28px] font-bold text-white sm:left-10">
          +
        </div>

        <h1 className="text-[18px] font-bold text-dark sm:text-[24px]">
          Create New Feedback
        </h1>

        <form className="mt-10 space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-[13px] font-bold text-dark sm:text-[14px]"
            >
              Feedback Title
            </label>
            <p className="mt-1 text-[13px] text-text sm:text-[14px]">
              Add a short, descriptive headline
            </p>
            <input
              id="title"
              name="title"
              type="text"
              className="mt-4 w-full rounded-[5px] bg-bg px-4 py-3 text-[15px] text-dark outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-[13px] font-bold text-dark sm:text-[14px]"
            >
              Category
            </label>
            <p className="mt-1 text-[13px] text-text sm:text-[14px]">
              Choose a category for your feedback
            </p>
            <select
              id="category"
              name="category"
              defaultValue="feature"
              className="mt-4 w-full rounded-[5px] bg-bg px-4 py-3 text-[15px] text-dark outline-none focus:ring-2 focus:ring-secondary"
            >
              <option value="feature">Feature</option>
              <option value="ui">UI</option>
              <option value="ux">UX</option>
              <option value="enhancement">Enhancement</option>
              <option value="bug">Bug</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="detail"
              className="block text-[13px] font-bold text-dark sm:text-[14px]"
            >
              Feedback Detail
            </label>
            <p className="mt-1 text-[13px] text-text sm:text-[14px]">
              Include any specific comments on what should be improved, added, etc.
            </p>
            <textarea
              id="detail"
              name="detail"
              rows={5}
              className="mt-4 w-full rounded-[5px] bg-bg px-4 py-3 text-[15px] text-dark outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>

          <div className="flex flex-col-reverse gap-4 sm:flex-row sm:justify-end">
            <Link
              to="/"
              className="rounded-[10px] bg-dark px-6 py-3 text-center text-[14px] font-bold text-white"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="rounded-[10px] bg-primary px-6 py-3 text-[14px] font-bold text-white"
            >
              Add Feedback
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}