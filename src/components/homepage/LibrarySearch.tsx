"use client";

import { useState } from "react";
import { IWorkout } from "@/components/type/Workouts-type";
import WorkoutsCard from "@/components/card/WorkoutsCard";
import { IoSearch } from "react-icons/io5";

interface ILibrarySearchProps {
  workoutsData: IWorkout[];
}

const LibrarySearch = ({ workoutsData }: ILibrarySearchProps) => {
  const [query, setQuery] = useState("");

  const filtered = workoutsData.filter((item) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    const nameMatch = item.name.toLowerCase().includes(q);
    const tagMatch = item.muscleGroups.some((tag) =>
      tag.toLowerCase().includes(q),
    );
    return nameMatch || tagMatch;
  });

  return (
    <div>
      <div className="relative mb-6 max-w-sm">
        <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A92A0] text-[16px]" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by name or tag…"
          className="input input-sm w-full bg-[#15171d] text-white text-[14px] font-inter border-[#232732] rounded-xl pl-9 focus:outline-none"
        />
      </div>

      {workoutsData.length === 0 ? (
        <p>Couldn&apos;t load workouts right now. Please try again later.</p>
      ) : filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto">
          {filtered.map((data: IWorkout) => (
            <WorkoutsCard key={data.id} data={data} />
          ))}
        </div>
      ) : (
        <p className="text-[#8A92A0] text-[14px] font-inter">
          No workouts match &quot;{query}&quot;.
        </p>
      )}
    </div>
  );
};

export default LibrarySearch;
