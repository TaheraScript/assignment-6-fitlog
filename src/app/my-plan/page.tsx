"use client";
import { WorkoutsContext } from "@/context/WorkoutsProvider";
import { useContext } from "react";
import WorkoutsStats from "@/components/myplan/WorkoutsStats";
import PlanTabs from "@/components/myplan/PlanTabs";

const MyPlan = () => {
  const { add, save, setAdd, setSave, activeTab, setActiveTab, isLoaded } =
    useContext(WorkoutsContext);

  if (!isLoaded) {
    return (
      <div className="container mx-auto py-24 flex flex-col items-center justify-center gap-4 min-h-[40vh]">
        <span className="loading loading-spinner loading-lg text-[#ccff00]" />
        <p className="text-[#8A92A0] text-[14px] font-inter">
          Loading workouts…
        </p>
      </div>
    );
  }

  const activeData = activeTab === "today" ? add : save;
  const totalMinutes = activeData.reduce((sum, item) => sum + item.duration, 0);
  const totalCalories = activeData.reduce(
    (sum, item) => sum + item.caloriesBurned,
    0,
  );

  return (
    <div className="container mx-auto py-10">
      <div>
        {" "}
        <h2 className="font-bold text-[30px] font-oswald">MY PLAN</h2>
        <p className="text-[14px] font-normal font-inter text-[#8A92A0]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>
      <div className="mt-6">
        <WorkoutsStats
          exercises={activeData.length}
          minutes={totalMinutes}
          calories={totalCalories}
        />
      </div>
      <div className="mt-6">
        <PlanTabs
          add={add}
          save={save}
          setAdd={setAdd}
          setSave={setSave}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
    </div>
  );
};

export default MyPlan;
