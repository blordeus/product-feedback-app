import { useParams, Link } from "react-router-dom";
import data from "../data/data.json";

export default function FeedbackDetail() {
  const { id } = useParams();

  const feedback = data.productRequests.find(
    (item) => item.id === Number(id)
  );

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
      {/* Top actions */}
      <div className="mb-6 flex items-center justify-between">
        <Link
          to="/"
          className="text-[14px] font-bold text-text hover:underline"
        >
          ← Go Back
        </Link>

        <button className="rounded-[10px] bg-secondary px-5 py-3 text-[14px] font-bold text-white">
          Edit Feedback
        </button>
      </div>

      {/* Feedback Card */}
      <div className="rounded-[10px] bg-white p-6 sm:p-7">
        <h1 className="text-[18px] font-bold text-dark">
          {feedback.title}
        </h1>

        <p className="mt-2 text-[14px] text-text sm:text-[16px]">
          {feedback.description}
        </p>

        <div className="mt-4 inline-flex rounded-[10px] bg-light px-4 py-2 text-[13px] font-semibold text-secondary">
          {feedback.category}
        </div>
      </div>

      {/* Placeholder for comments */}
      <div className="mt-6 rounded-[10px] bg-white p-6">
        <h2 className="text-[18px] font-bold text-dark">
          Comments (coming next)
        </h2>
      </div>
    </main>
  );
}