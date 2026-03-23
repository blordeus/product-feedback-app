import { useMemo, useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import SuggestionsHeader from "../components/feedback/SuggestionsHeader";
import FeedbackCard from "../components/feedback/FeedbackCard";
import data from "../data/data.json";

function getCommentCount(comments = []) {
  return comments.reduce((total, comment) => {
    const replyCount = comment.replies ? comment.replies.length : 0;
    return total + 1 + replyCount;
  }, 0);
}

export default function Suggestions() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortBy, setSortBy] = useState("most-upvotes");

  const suggestions = useMemo(() => {
    const suggestionItems = data.productRequests.filter(
      (item) => item.status === "suggestion"
    );

    const filteredItems =
      activeCategory === "All"
        ? suggestionItems
        : suggestionItems.filter(
            (item) => item.category.toLowerCase() === activeCategory.toLowerCase()
          );

    const sortedItems = [...filteredItems].sort((a, b) => {
      switch (sortBy) {
        case "least-upvotes":
          return a.upvotes - b.upvotes;
        case "most-comments":
          return getCommentCount(b.comments) - getCommentCount(a.comments);
        case "least-comments":
          return getCommentCount(a.comments) - getCommentCount(b.comments);
        case "most-upvotes":
        default:
          return b.upvotes - a.upvotes;
      }
    });

    return sortedItems;
  }, [activeCategory, sortBy]);

  return (
    <main className="mx-auto max-w-[1110px] px-6 py-10 lg:py-24">
      <div className="grid gap-6 lg:grid-cols-[255px_1fr] lg:items-start">
        <Sidebar
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        <section className="flex flex-col gap-6">
          <SuggestionsHeader
            count={suggestions.length}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />

          {suggestions.length > 0 ? (
            <div className="flex flex-col gap-5">
              {suggestions.map((feedback) => (
                <FeedbackCard key={feedback.id} feedback={feedback} />
              ))}
            </div>
          ) : (
            <div className="rounded-[10px] bg-white px-6 py-18 text-center">
              <h2 className="text-[24px] font-bold text-dark">
                There is no feedback yet.
              </h2>
              <p className="mx-auto mt-4 max-w-[410px] text-[16px] leading-[23px] text-text">
                Got a suggestion? Found a bug that needs to be squashed? We love
                hearing about new ideas to improve our app.
              </p>

              <button className="mt-12 rounded-[10px] bg-primary px-6 py-3 text-[14px] font-bold text-white">
                + Add Feedback
              </button>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}