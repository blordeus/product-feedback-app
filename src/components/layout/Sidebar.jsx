const categories = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

export default function Sidebar({
  activeCategory,
  onCategoryChange,
  roadmapCounts,
  isMobileOpen = false,
  onCloseMenu,
}) {
  return (
    <>
      {isMobileOpen && (
        <button
          type="button"
          aria-label="Close menu overlay"
          onClick={onCloseMenu}
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
        />
      )}

      <aside
        className={`${
          isMobileOpen ? "fixed right-0 top-[72px] z-40 w-[271px]" : "hidden"
        } lg:static lg:block lg:w-auto`}
      >
        <div className="flex min-h-[calc(100vh-72px)] flex-col gap-6 bg-bg p-6 lg:min-h-0 lg:bg-transparent lg:p-0">
          <section className="hidden rounded-[10px] bg-[linear-gradient(135deg,#28A7ED_0%,#A337F6_55%,#E84D70_100%)] px-6 py-8 text-white lg:block">
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
                <span className="font-bold">{roadmapCounts.planned}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span>In-Progress</span>
                </div>
                <span className="font-bold">{roadmapCounts["in-progress"]}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <span>Live</span>
                </div>
                <span className="font-bold">{roadmapCounts.live}</span>
              </div>
            </div>
          </section>
        </div>
      </aside>
    </>
  );
}