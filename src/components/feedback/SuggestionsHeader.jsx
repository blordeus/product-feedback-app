import { Link } from "react-router-dom";
import CustomDropdown from "../shared/CustomDropdown";

const sortOptions = [
  { label: "Most Upvotes", value: "most-upvotes" },
  { label: "Least Upvotes", value: "least-upvotes" },
  { label: "Most Comments", value: "most-comments" },
  { label: "Least Comments", value: "least-comments" },
];

export default function SuggestionsHeader({ count, sortBy, onSortChange }) {
  function handleDropdownChange(event) {
    onSortChange(event.target.value);
  }

  return (
    <header className="flex items-center justify-between rounded-[10px] bg-navy px-4 py-4 text-white sm:px-6">
      <div className="flex items-center gap-4 sm:gap-8">
        <h2 className="hidden text-[18px] font-bold md:block">
          {count} Suggestions
        </h2>

        <div className="flex items-center gap-2 text-[14px]">
          <span className="text-white/75">Sort by :</span>

          <CustomDropdown
            name="sortBy"
            value={sortBy}
            options={sortOptions}
            onChange={handleDropdownChange}
            variant="header"
          />
        </div>
      </div>

      <Link
        to="/new"
        className="rounded-[10px] bg-primary px-4 py-3 text-[14px] font-bold text-white sm:px-5"
      >
        + Add Feedback
      </Link>
    </header>
  );
}