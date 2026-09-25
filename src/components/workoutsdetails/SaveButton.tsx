"use client";

import { useState } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { IWorkout } from "../type/Workouts-type";
import { WorkoutsContext } from "@/context/WorkoutsProvider";
import { useContext } from "react";
import { Bounce, toast } from "react-toastify";
import Link from "next/link";

const SaveButton = ({ data }: { data: IWorkout }) => {
  const WorkoutsProvider = useContext(WorkoutsContext);

  const { save, setSave, setActiveTab } = WorkoutsProvider;

  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleWorkouts = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const alreadySaved = save.some((item) => item.id === data.id);

    if (alreadySaved) {
      e.preventDefault();

      toast.warning(`"${data.name}" is already saved.`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Bounce,
      });

      setIsDuplicate(true);

      return;
    }

    setSave([...save, data]);

    setActiveTab("saved");

    toast.success(`You have saved "${data.name}"`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  return (
    <Link
      href="/my-plan"
      onClick={handleWorkouts}
      aria-disabled={isDuplicate}
      className={`flex-1 border border-[#374151] text-[#E5E7EB] font-medium text-[14px] font-inter p-2 rounded-lg transition flex justify-center items-center gap-2 ${
        isDuplicate
          ? "opacity-50 cursor-not-allowed pointer-events-none"
          : "hover:bg-gray-800"
      }`}
    >
      <FaRegBookmark />

      {isDuplicate ? "Already Saved" : "Save for later"}
    </Link>
  );
};

export default SaveButton;
