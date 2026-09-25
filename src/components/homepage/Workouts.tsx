import WorkoutsCard from "../card/WorkoutsCard";
import { IWorkout } from "../type/Workouts-type";

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

const Workouts = async () => {
  const workoutsData = await getWorkouts();

  return (
    <div className="container mx-auto">
      <div className="pb-8">
        <h2 className="font-oswald font-bold text-[30px]">THE LIBRARY</h2>
      <p className="font-normal text-[14px]">
        Twelve lifts covering every major muscle group.
      </p>
      </div>
      <div className="grid grid-cols-3 grid-rows-4 gap-4 container mx-auto">
        {workoutsData.length > 0 ? (
          workoutsData.map((data: IWorkout) => (
            <WorkoutsCard key={data.id} data={data} />
          ))
        ) : (
          <p>Couldn&apos;t load workouts right now. Please try again later.</p>
        )}
      </div>
    </div>
  );
};

export default Workouts;
