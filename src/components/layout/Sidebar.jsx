const categories = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

export default function Sidebar({ activeCategory, onCategoryChange }) {
  return (
    <aside className="flex flex-col gap-6">
      <section className="rounded-[10px] bg-[linear-gradient(135deg,#28A7ED_0%,#A337F6_55%,#E84D70_100%)] px-6 py-8 text-white">
        <h1 className="text-[20px] font-bold leading-none">Frontend Mentor</h1>
        <p className="mt-1 text-[15px] text-white/75">Feedback Board</p>
      </section>

      <section className="rounded-[10px] bg-white p-6">
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => onCategoryChange(category)}
                className={`rounded-[10px] px-4 py-2 text-[13px] font-semibold transition-colors ${
                  isActive
                    ? "bg-secondary text-white"
                    : "bg-light text-secondary hover:bg-[#CFD7FF]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </section>

      <section className="rounded-[10px] bg-white p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-[18px] font-bold text-dark">Roadmap</h2>
          <span className="text-[13px] font-semibold text-secondary underline">
            View
          </span>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="h-2 w-2 rounded-full bg-warning" />
              <span>Planned</span>
            </div>
            <span className="font-bold">2</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span>In-Progress</span>
            </div>
            <span className="font-bold">3</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span>Live</span>
            </div>
            <span className="font-bold">1</span>
          </div>
        </div>
      </section>
    </aside>
  );
}