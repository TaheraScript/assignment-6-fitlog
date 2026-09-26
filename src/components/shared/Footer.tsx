import { IoBarbell } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="p-4">
      <div className="divider pt-7" />
      <div className="p-4 pb-4">
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-3 container mx-auto text-center sm:text-left">
          <div className="flex gap-3 items-center">
            <IoBarbell className="text-[#ccff00] text-[20px]" />
            <h2 className="font-oswald text-[14px] font-bold text-white">
              FITLOG
            </h2>
          </div>
          <p className="font-inter text-[12px] font-normal text-[#6B7280]">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
