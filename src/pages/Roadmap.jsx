import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import RoadmapColumn from "../components/roadmap/RoadmapColumn";

const roadmapTabs = [
  {
    key: "planned",
    title: "Planned",
    description: "Ideas prioritized for research",
    colorClass: "bg-warning",
  },
  {
    key: "in-progress",
    title: "In-Progress",
    description: "Currently being developed",
    colorClass: "bg-primary",
  },
  {
    key: "live",
    title: "Live",
    description: "Released features",
    colorClass: "bg-accent",
  },
];

export default function Roadmap({ productRequests }) {
  const [activeTab, setActiveTab] = useState("planned");

  const groupedFeedback = useMemo(() => {
    return productRequests.reduce(
      (groups, item) => {
        if (item.status === "planned") groups.planned.push(item);
        if (item.status === "in-progress") groups["in-progress"].push(item);
        if (item.status === "live") groups.live.push(item);
        return groups;
      },
      {
        planned: [],
        "in-progress": [],
        live: [],
      }
    );
  }, [productRequests]);

  const activeTabConfig = roadmapTabs.find((tab) => tab.key === activeTab);

  return (
    <main className="mx-auto max-w-[1110px] px-4 py-6 sm:px-6 sm:py-8 lg:py-20">
      <header className="rounded-[10px] bg-navy px-6 py-6 text-white">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              to="/"
              className="text-[14px] font-bold text-white/75 hover:underline"
            >
              ← Go Back
            </Link>

            <h1 className="mt-2 text-[18px] font-bold sm:text-[24px]">
              Roadmap
            </h1>
          </div>

          <Link
            to="/new"
            className="inline-block rounded-[10px] bg-primary px-6 py-3 text-[14px] font-bold text-white"
          >
            + Add Feedback
          </Link>
        </div>
      </header>

      <div className="mt-6 border-b border-dark/15 lg:hidden">
        <div className="grid grid-cols-3">
          {roadmapTabs.map((tab) => {
            const isActive = activeTab === tab.key;
            const count = groupedFeedback[tab.key].length;

            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`relative px-2 py-5 text-center text-[13px] font-bold text-dark ${
                  isActive ? "opacity-100" : "opacity-40"
                }`}
              >
                <span>
                  {tab.title} ({count})
                </span>

                {isActive && (
                  <span
                    className={`absolute bottom-0 left-0 h-1 w-full ${tab.colorClass}`}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 lg:hidden">
        <RoadmapColumn
          title={activeTabConfig.title}
          description={activeTabConfig.description}
          colorClass={activeTabConfig.colorClass}
          items={groupedFeedback[activeTab]}
          showTopBar={false}
        />
      </div>

      <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6 lg:items-start">
        <RoadmapColumn
          title="Planned"
          description="Ideas prioritized for research"
          colorClass="bg-warning"
          items={groupedFeedback.planned}
        />

        <RoadmapColumn
          title="In-Progress"
          description="Currently being developed"
          colorClass="bg-primary"
          items={groupedFeedback["in-progress"]}
        />

        <RoadmapColumn
          title="Live"
          description="Released features"
          colorClass="bg-accent"
          items={groupedFeedback.live}
        />
      </div>
    </main>
  );
}