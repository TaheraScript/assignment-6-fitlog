"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { WorkoutsContext } from "@/context/WorkoutsProvider";

const Navbar = () => {
  const pathname = usePathname();

  const { add, save } = useContext(WorkoutsContext);

  return (
    <div className="bg-[#15171d] shadow-sm">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link
                  className={`rounded-full px-5 py-2 transition-all duration-200 ${
                    pathname === "/workouts"
                      ? "bg-[#1a2a0f] text-[#ccff00]"
                      : "text-[#8A92A0] hover:bg-[#1a2a0f] hover:text-[#ccff00]"
                  }`}
                  href="/workouts"
                >
                  Workouts
                </Link>
              </li>

              <li>
                <Link
                  className={`rounded-full px-5 py-2 transition-all duration-200 ${
                    pathname === "/my-plan"
                      ? "bg-[#1a2a0f] text-[#ccff00]"
                      : "text-[#8A92A0] hover:bg-[#1a2a0f] hover:text-[#ccff00]"
                  }`}
                  href="/my-plan"
                >
                  My Plan
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center">
            <Image
              src="/logo.png"
              width={25}
              height={20}
              alt="Dumbbell logo icon"
            />

            <a className="btn btn-ghost font-bold text-[18px] text-white font-oswald">
              FITLOG
            </a>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                className={`rounded-full px-5 py-2 transition-all duration-200 ${
                  pathname === "/workouts"
                    ? "bg-[#1a2a0f] text-[#ccff00]"
                    : "text-[#8A92A0] hover:bg-[#1a2a0f] hover:text-[#ccff00]"
                }`}
                href="/workouts"
              >
                Workouts
              </Link>
            </li>

            <li>
              <Link
                className={`rounded-full px-5 py-2 transition-all duration-200 ${
                  pathname === "/my-plan"
                    ? "bg-[#1a2a0f] text-[#ccff00]"
                    : "text-[#8A92A0] hover:bg-[#1a2a0f] hover:text-[#ccff00]"
                }`}
                href="/my-plan"
              >
                My Plan
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <div className="flex items-center gap-7">
            <Link href="/my-plan" className="flex items-center gap-2">
              <span className="text-white text-[14px] font-inter">Plan</span>
              <span className="flex items-center justify-center w-6 h-6 rounded-full text-[12px] font-bold bg-[#ccff00] text-[#0F1115]">
                {add.length}
              </span>
            </Link>

            <Link href="/my-plan" className="flex items-center gap-2">
              <span className="text-[#8A92A0] text-[14px] font-inter">
                Saved
              </span>
              <span className="flex items-center justify-center w-6 h-6 rounded-full text-[12px] font-bold border border-[#374151] text-[#8A92A0]">
                {save.length}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
