"use client";

import { useState } from "react";
import { LuCalendarPlus2 } from "react-icons/lu";
import { IWorkout } from "../type/Workouts-type";
import { WorkoutsContext } from "@/context/WorkoutsProvider";
import { useContext } from "react";
import { Bounce, toast } from "react-toastify";
import Link from "next/link";

const AddButton = ({ data }: { data: IWorkout }) => {
  const WorkoutsProvider = useContext(WorkoutsContext);

  const { add, setAdd, setActiveTab } = WorkoutsProvider;

  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleWorkouts = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const alreadyAdded = add.some((item) => item.id === data.id);

    if (alreadyAdded) {
      e.preventDefault();

      toast.warning(`"${data.name}" is already in today's plan.`, {
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

    setAdd([...add, data]);

    setActiveTab("today");

    toast.success(`You have added "${data.name}"`, {
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
      className={`flex-1 bg-[#ccff00] text-[#0F1115] font-semibold p-2 rounded-lg transition font-inter text-[14px] flex justify-center items-center gap-2 ${
        isDuplicate
          ? "opacity-50 cursor-not-allowed pointer-events-none"
          : "hover:bg-lime-300"
      }`}
    >
      <LuCalendarPlus2 />
      {isDuplicate ? "Already Added" : "Add to today's plan"}
    </Link>
  );
};

export default AddButton;
