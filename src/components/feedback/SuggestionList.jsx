import FeedbackCard from "./FeedbackCard";

export default function SuggestionList({ items }) {
  if (!items.length) {
    return (
      <div className="bg-white rounded-xl p-10 text-center">
        <h2 className="text-lg font-bold text-dark mb-2">
          There is no feedback yet.
        </h2>
        <p className="text-text mb-6">
          Got a suggestion? Found a bug that needs to be squashed?
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => (
        <FeedbackCard key={item.id} item={item} />
      ))}
    </div>
  );
}