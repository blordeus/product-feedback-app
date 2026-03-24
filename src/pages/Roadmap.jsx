import { Link } from "react-router-dom";
import { useMemo } from "react";
import RoadmapColumn from "../components/roadmap/RoadmapColumn";
import data from "../data/data.json";

export default function Roadmap() {
  const groupedFeedback = useMemo(() => {
    return data.productRequests.reduce(
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
  }, []);

  return (
    <main className="mx-auto max-w-[1110px] px-4 py-8 sm:px-6 lg:py-20">
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

      <div className="mt-8 grid gap-6 lg:grid-cols-3 lg:items-start">
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