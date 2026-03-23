const sortOptions = [
  { label: "Most Upvotes", value: "most-upvotes" },
  { label: "Least Upvotes", value: "least-upvotes" },
  { label: "Most Comments", value: "most-comments" },
  { label: "least Comments", value: "least-comments" },
];

export default function SuggestionsHeader({ count, sortBy, onSortChange }) {
  return (
    <header className="flex items-center justify-between rounded-[10px] bg-navy px-6 py-4 text-white">
      <div className="flex items-center gap-8">
        <h2 className="text-[18px] font-bold">{count} Suggestions</h2>

        <label className="flex items-center gap-2 text-[14px]">
          <span className="text-white/75">Sort by :</span>

          <select
            value={sortBy}
            onChange={(event) => onSortChange(event.target.value)}
            className="bg-transparent font-bold text-white outline-none"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value} className="text-dark">
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <button className="rounded-[10px] bg-primary px-5 py-3 text-[14px] font-bold text-white">
        + Add Feedback
      </button>
    </header>
  );
}