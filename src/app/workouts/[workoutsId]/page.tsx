import { IWorkout } from "@/components/type/Workouts-type";
import Image from "next/image";
import AddButton from "@/components/workoutsdetails/AddButton";
import SaveButton from "@/components/workoutsdetails/SaveButton";

interface IWorkoutsDetailPage{
    params : Promise<{
        workoutsId:string
    }>
}
const getWorkouts = async (): Promise<IWorkout[]> => {
  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
      next: { revalidate: 60 },
      signal: AbortSignal.timeout(8000),
    });

    if (!res.ok) {
      console.error("Workouts API error:", res.status, res.statusText);
      return [];
    }

    return await res.json();
  } catch (err) {
    console.error("Failed to fetch workouts:", err);
    return [];
  }
};
const workoutsDetailPage = async({params} : IWorkoutsDetailPage ) => {
    const {workoutsId} =await params
    const workoutsData: IWorkout[]= await getWorkouts();
    const data = workoutsData.find((data : IWorkout) => Number(data.id) === Number(workoutsId))
    if (!data) {
    return <div>Workout not found.</div>;
  }
const specs = [
    { label: "EQUIPMENT", value: data.equipment },
    { label: "DIFFICULTY", value: data.difficulty },
    { label: "SETS", value: data.sets },
    { label: "REPS", value: data.reps },
    { label: "DURATION", value: `${data.duration} min` },
    { label: "CALORIES", value: `${data.caloriesBurned} kcal` },
    { label: "RATING", value: data.rating },
  ];

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <div className=" rounded-2xl p-4 bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: Image */}
          <div className="relative w-full h-80 md:h-full rounded-xl overflow-hidden">
            <Image src={data.image} alt={data.name} fill className="object-cover" />
          </div>

          {/* Right: Details */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="font-oswald font-bold text-[28px] md:text-[36px] text-white uppercase">
                {data.name}
              </h1>
              <p className="text-[#9CA3AF] text-sm mt-2">{data.description}</p>

              {/* Muscle group tags */}
              <div className="flex gap-2 mt-4">
                {data.muscleGroups.map((muscle, index)=> (
                  <div
                   key={index}
                    className="badge font-inter font-bold text-[11px] rounded-4xl bg-[#ccff00] text-black uppercase px-3 py-1"
                  >
                    {muscle}
                  </div>
                ))}
              </div>

              {/* Spec table */}
              <div className="mt-6 bg-[#151922] rounded-xl divide-y divide-[#1E2330]">
                {specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex justify-between items-center px-4 py-3 text-sm"
                  >
                    <span className="text-[#9CA3AF] font-bold text-[12px]  font-inter tracking-wide">{spec.label}</span>
                    <span className="text-[#E5E7EB] font-medium text-14 font-inter">{spec.value}</span>
                  </div>
                ))}
              </div>

              {/* Instructions */}
              <div className="mt-6">
                <h2 className="text-white font-extrabold text-[16px] font-inter tracking-wide mb-2">
                  INSTRUCTIONS
                </h2>
                <ol className="list-decimal list-inside space-y-1 text-[#D1D5DB] text-[14px] font-normal">
                  {data.instructions.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <AddButton data={data}></AddButton>
              <SaveButton data={data}></SaveButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default workoutsDetailPage;