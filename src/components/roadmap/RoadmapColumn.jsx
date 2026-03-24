import RoadmapCard from "./RoadmapCard";

export default function RoadmapColumn({
  title,
  description,
  colorClass,
  items,
}) {
  return (
    <section className="flex flex-col">
      <div className={`h-2 rounded-t-[5px] ${colorClass}`} />

      <div className="pt-6">
        <div className="mb-6">
          <h2 className="text-[18px] font-bold text-dark">
            {title} ({items.length})
          </h2>
          <p className="mt-1 text-[13px] text-text sm:text-[16px]">
            {description}
          </p>
        </div>

        {items.length > 0 ? (
          <div className="space-y-4">
            {items.map((feedback) => (
              <RoadmapCard key={feedback.id} feedback={feedback} />
            ))}
          </div>
        ) : (
          <div className="rounded-[10px] bg-white p-6 text-[14px] text-text">
            No items in this column yet.
          </div>
        )}
      </div>
    </section>
  );
}