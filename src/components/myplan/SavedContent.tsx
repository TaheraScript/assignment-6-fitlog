import { IWorkout } from "@/components/type/Workouts-type";
import Link from "next/link";

interface ISavedContentProps {
  data: IWorkout[];
}

const SavedContent = ({ data }: ISavedContentProps) => {
  if (data.length === 0) {
    return (
      <div className="border border-dashed border-[#252932] rounded-2xl py-24 flex flex-col items-center justify-center text-center">
        <h3 className="text-white font-oswald font-bold text-[18px] uppercase">Nothing here yet</h3>
        <p className="text-[#8A92A0] text-[14px] font-inter mt-2">
          Browse the library and add a lift to get today moving.
        </p>
        <Link
          href="/workouts"
          className="btn mt-6 bg-[#ccff00] text-[#0F1115] font-bold text-[14px] font-inter border-none rounded-full hover:bg-lime-300"
        >
          Go to workouts
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {data.map((item) => (
        <div key={item.id} className="bg-[#15171d] rounded-xl p-4 text-white">
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default SavedContent;