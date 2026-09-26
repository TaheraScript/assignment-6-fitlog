"use client";
import { useState } from "react";
import { IWorkout } from "@/components/type/Workouts-type";
import TodaysPlanContent from "./TodaysPlanContent";
import SavedContent from "./SavedContent";
import { Bounce, toast } from "react-toastify";
import { IoChevronDown, IoSearch } from "react-icons/io5";

type TabType = "today" | "saved";
type SortType = "duration" | "calories" | "rating";

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
  const [query, setQuery] = useState("");

  const sortOptions: { key: SortType; label: string }[] = [
    { key: "duration", label: "Duration" },
    { key: "calories", label: "Calories" },
    { key: "rating", label: "Rating" },
  ];

  const filterData = (data: IWorkout[]) => {
    const q = query.trim().toLowerCase();
    if (!q) return data;
    return data.filter((item) => {
      const nameMatch = item.name.toLowerCase().includes(q);
      const tagMatch = item.muscleGroups.some((tag) =>
        tag.toLowerCase().includes(q),
      );
      return nameMatch || tagMatch;
    });
  };

  const sortData = (data: IWorkout[]) => {
    return [...data].sort((a, b) => {
      if (sortBy === "duration") return b.duration - a.duration;
      if (sortBy === "calories") return b.caloriesBurned - a.caloriesBurned;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });
  };

  const handleRemoveFromAdd = (id: number) => {
    const item = add.find((i) => i.id === id);
    setAdd(add.filter((item) => item.id !== id));
    if (item) {
      toast.success(`Removed "${item.name}" from today's plan.`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  const handleRemoveFromSave = (id: number) => {
    const item = save.find((i) => i.id === id);
    setSave(save.filter((item) => item.id !== id));
    if (item) {
      toast.success(`Removed "${item.name}" from saved.`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  const handleMarkDone = (id: number) => {
    const item = add.find((i) => i.id === id);
    setAdd(add.filter((item) => item.id !== id));
    if (item) {
      toast.success(`"${item.name}" marked as done. 💪`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  return (
    <div>
      <div className="relative mb-4 max-w-sm">
        <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A92A0] text-[16px]" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name or tag…"
          className="w-full bg-[#15171d] text-white text-[14px] font-inter border border-[#232732] rounded-xl pl-9 pr-3 py-1.5 focus:outline-none"
        />
      </div>

      <div className="flex items-center justify-between mb-6">
        <div role="tablist" className="tabs tabs-box bg-[#151921] rounded-xl ">
          <a
            role="tab"
            onClick={() => setActiveTab("today")}
            className={`tab rounded-xl px-5 py-3 text-[12px] font-inter cursor-pointer ${
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
            className={`tab rounded-xl px-5 py-3 text-[12px] font-inter cursor-pointer ${
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

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortType)}
              className="bg-[#15171d] text-white text-[14px] font-inter border border-[#232732] rounded-xl focus:outline-none appearance-none pl-3 pr-8 py-1.5 min-w-28"
            >
              {sortOptions.map((opt) => (
                <option key={opt.key} value={opt.key}>
                  {opt.label}
                </option>
              ))}
            </select>
            <IoChevronDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[#8A92A0] text-[14px]" />
          </div>
        </div>
      </div>

      {activeTab === "today" ? (
        <TodaysPlanContent
          data={sortData(filterData(add))}
          onRemove={handleRemoveFromAdd}
          onMarkDone={handleMarkDone}
        />
      ) : (
        <SavedContent
          data={sortData(filterData(save))}
          onRemove={handleRemoveFromSave}
        />
      )}
    </div>
  );
};

export default PlanTabs;
