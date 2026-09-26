import Link from "next/link";

const NotFound = () => {
  return (
    <div className="container mx-auto py-24 flex flex-col items-center justify-center text-center min-h-[50vh]">
      <p className="font-oswald font-bold text-[#ccff00] text-[64px] leading-none">
        404
      </p>
      <h1 className="font-oswald font-bold text-[24px] text-white uppercase mt-2">
        Page not found
      </h1>
      <p className="text-[#8A92A0] text-[14px] font-inter mt-2 max-w-sm">
        That page doesn&apos;t exist. It may have moved, or the link might be
        broken.
      </p>
      <Link
        href="/"
        className="btn mt-6 bg-[#ccff00] text-[#0F1115] font-bold text-[14px] font-inter border-none rounded-full hover:bg-lime-300"
      >
        Back to workouts
      </Link>
    </div>
  );
};

export default NotFound;
