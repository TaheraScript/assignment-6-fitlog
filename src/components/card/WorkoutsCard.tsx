import Image from "next/image";
import { IWorkout } from "../type/Workouts-type";
import { PiFireSimpleFill } from "react-icons/pi";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineStarBorderPurple500 } from "react-icons/md";
import Link from "next/link";

interface IDataPropType {
  data: IWorkout;
}
const WorkoutsCard = ({ data }: IDataPropType) => {
  return (
    <Link href={`/workouts/${data.id}`}>
    <div className="rounded-xl overflow-hidden bg-[#15171d]">
      <div>
        <Image
          src={data.image}
          alt={data.name}
          width={300}
          height={200}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-5 space-y-2">
        <div className="flex gap-2">
          {data.muscleGroups.map((muscle, index) => (
            <div
              key={index}
              className="badge font-inter font-bold text-[11px] rounded-4xl bg-[#ccff00] text-black "
            >
              {muscle}
            </div>
          ))}
        </div>
        <h2 className="text-[18px] font-oswald font-bold text-white">
          {data.name}
        </h2>
        <div className="text-[12px] font-normal text-[#9CA3AF] font-inter">
          {data.equipment}
        </div>

        <div className="divider" />
        <div className="flex items-center gap-4 text-sm text-gray-300">
  <div className="flex items-center gap-1">
    <FaRegClock />
    <span>{data.duration} min</span>
  </div>
  <div className="flex items-center gap-1">
    <PiFireSimpleFill />
    <span>{data.caloriesBurned} kcal</span>
  </div>
  <div className="flex items-center gap-1">
    <MdOutlineStarBorderPurple500 />
    <span>{data.rating}</span>
  </div>
</div>
      </div>
    </div>
    </Link>
  );
};

export default WorkoutsCard;
