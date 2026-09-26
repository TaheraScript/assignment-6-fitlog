import Image from "next/image";

import { IoBarbell } from "react-icons/io5";

const Banner = () => {
  return (
    <section className="py-20 space-y-3 ">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center container mx-auto bg-[#15171d] px-6 md:px-14 py-14 md:py-20 rounded-2xl overflow-hidden">
        <div className="space-y-4">
          <p className="font-bold text-[11px] font-inter text-[#ccff00]">
            WORKOUT LIBRARY
          </p>
          <h1 className="font-oswald text-[32px] md:text-[46px] lg:text-[60px] font-extrabold text-white whitespace-normal lg:whitespace-nowrap leading-tight lg:leading-none">
            TRAIN WITH INTENT. LOG <br className="hidden lg:block" />
            EVERY SET.
          </h1>
          <p className="font-normal text-[16px] font-inter text-[#9CA3AF]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it{" "}
            <br className="hidden lg:block" />
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <a
            href="#library"
            className="inline-flex items-center gap-2 font-bold text-[12px] font-inter bg-[#ccff00] text-black px-5 py-2 rounded mt-8 cursor-pointer hover:bg-lime-300 transition"
          >
            <IoBarbell className="text-[16px]" />
            BROWSE WORKOUTS
          </a>
        </div>
        <div className="ml-0 lg:ml-6">
          <Image
            src="/banner.png"
            width={400}
            height={400}
            alt="Illustration of human musculature using gym equipment"
            className="w-full max-w-100 h-auto mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
