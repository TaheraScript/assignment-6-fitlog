import { IWorkout } from "@/components/type/Workouts-type";
import LibrarySearch from "./LibrarySearch";

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
    <div id="library" className="container mx-auto scroll-mt-24">
      <div className="pb-8">
        <h2 className="font-oswald font-bold text-[30px]">THE LIBRARY</h2>
        <p className="font-normal text-[14px]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <LibrarySearch workoutsData={workoutsData} />
    </div>
  );
};

export default Workouts;
