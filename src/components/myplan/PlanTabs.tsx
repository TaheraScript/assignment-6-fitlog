"use client";
import { useState } from "react";
import { IWorkout } from "@/components/type/Workouts-type";
import TodaysPlanContent from "./TodaysPlanContent";
import SavedContent from "./SavedContent";

type TabType = "today" | "saved";
type SortType = "duration" | "calories" | "rating" | "name";

interface IPlanTabsProps {
  add: IWorkout[];
  save: IWorkout[];
  setAdd: (data: IWorkout[]) => void;
  setSave: (data: IWorkout[]) => void;
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const PlanTabs = ({
  add,
  save,
  setAdd,
  setSave,
  activeTab,
  setActiveTab,
}: IPlanTabsProps) => {
  const [sortBy, setSortBy] = useState<SortType>("duration");

  const sortOptions: { key: SortType; label: string }[] = [
    { key: "duration", label: "Duration" },
    { key: "calories", label: "Calories" },
    { key: "rating", label: "Rating" },
    { key: "name", label: "Name" },
  ];

  const sortData = (data: IWorkout[]) => {
    return [...data].sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "duration") return b.duration - a.duration;
      if (sortBy === "calories") return b.caloriesBurned - a.caloriesBurned;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });
  };

  const handleRemoveFromAdd = (id: number) => {
    setAdd(add.filter((item) => item.id !== id));
  };

  const handleRemoveFromSave = (id: number) => {
    setSave(save.filter((item) => item.id !== id));
  };

  const handleMarkDone = (id: number) => {
    setAdd(add.filter((item) => item.id !== id));
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div role="tablist" className="tabs tabs-box bg-[#151921] rounded-xl">
          <a
            role="tab"
            onClick={() => setActiveTab("today")}
            className={`tab rounded-xl text-[12px] font-inter cursor-pointer ${
              activeTab === "today"
                ? "tab-active bg-[#2b303d] text-white font-bold"
                : "text-[#8A92A0]"
            }`}
          >
            Today&apos;s Plan
          </a>
          <a
            role="tab"
            onClick={() => setActiveTab("saved")}
            className={`tab rounded-xl text-[12px] font-inter cursor-pointer ${
              activeTab === "saved"
                ? "tab-active bg-[#2b303d] text-white font-bold"
                : "text-[#8A92A0]"
            }`}
          >
            Saved
          </a>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[#8A92A0] text-[12px] font-inter font-normal whitespace-nowrap shrink-0">
            Sort By
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as SortType)}
            className="select select-sm bg-[#15171d] text-white text-[14px] font-inter border-[#232732] rounded-xl focus:outline-none"
          >
            {sortOptions.map((opt) => (
              <option key={opt.key} value={opt.key}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {activeTab === "today" ? (
        <TodaysPlanContent
          data={sortData(add)}
          onRemove={handleRemoveFromAdd}
          onMarkDone={handleMarkDone}
        />
      ) : (
        <SavedContent data={sortData(save)} onRemove={handleRemoveFromSave} />
      )}
    </div>
  );
};

export default PlanTabs;
