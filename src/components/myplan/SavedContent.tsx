import Image from "next/image"; // added: for the small workout thumbnail
import Link from "next/link";
import { IWorkout } from "@/components/type/Workouts-type";
import { FaRegClock } from "react-icons/fa"; // added: duration icon
import { PiFireSimpleFill } from "react-icons/pi"; // added: calories icon
import { MdOutlineStarBorderPurple500 } from "react-icons/md"; // added: rating icon
import { IoClose } from "react-icons/io5"; // added: remove (X) icon

interface ISavedContentProps {
  data: IWorkout[];
  onRemove?: (id: number) => void; // added: optional callback to remove a saved item
}

const SavedContent = ({ data, onRemove }: ISavedContentProps) => {
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

  // changed: replaced the grid-of-cards layout with a vertical list of rows matching the screenshot
  return (
    <div className="flex flex-col gap-4">
      {data.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between bg-[#151921] rounded-xl p-3"
        >
          {/* Left: thumbnail + info */}
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-lg overflow-hidden shrink-0">
              <Image src={item.image} alt={item.name} fill className="object-cover" />
            </div>
            <div>
              <h3 className="text-white font-oswald font-bold text-[15px] uppercase">
                {item.name}
              </h3>
              <p className="text-[#8A92A0] text-[12px] font-inter">{item.equipment}</p>
              <div className="flex items-center gap-3 mt-1 text-[12px] text-[#8A92A0]">
                <span className="flex items-center gap-1">
                  <FaRegClock /> {item.duration} min
                </span>
                <span className="flex items-center gap-1 text-[#ccff00]">
                  <PiFireSimpleFill /> {item.caloriesBurned} kcal
                </span>
                <span className="flex items-center gap-1">
                  <MdOutlineStarBorderPurple500 /> {item.rating}
                </span>
              </div>
            </div>
          </div>

          {/* Right: actions — Saved tab shows "View Details" only, no "Mark as Done" */}
          <div className="flex items-center gap-3">
            <Link
              href={`/workouts/${item.id}`}
              className="btn btn-sm bg-transparent border border-[#374151] text-white font-inter text-[12px] rounded-lg hover:bg-gray-800"
            >
              View Details
            </Link>
            <button
              onClick={() => onRemove?.(item.id)}
              className="text-[#8A92A0] hover:text-white transition"
              aria-label="Remove"
            >
              <IoClose size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SavedContent;