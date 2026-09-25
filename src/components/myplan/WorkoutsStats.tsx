interface IWorkoutStatsProps {
  exercises: number;
  minutes: number;
  calories: number;
}

const WorkoutsStats = ({
  exercises,
  minutes,
  calories,
}: IWorkoutStatsProps) => {
  const stats = [
    { label: "Exercises", value: exercises, highlight: true },
    { label: "Minutes", value: minutes, highlight: false },
    { label: "Calories", value: calories, highlight: false },
  ];

  return (
    <div className="">
      <div className="flex bg-[#15171d] rounded-2xl divide-x divide-[#232732] p-6">
        {stats.map((stat) => (
          <div key={stat.label} className="flex-1 ml-2">
            <p className="text-[#8A92A0] text-[12px] font-inter font-normal">
              {stat.label}
            </p>
            <p
              className={`text-[36px] font-bold font-inter ${
                stat.highlight ? "text-[#ccff00]" : "text-white"
              }`}
            >
              {stat.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutsStats;
