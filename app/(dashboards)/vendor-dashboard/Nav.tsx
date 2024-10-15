"use client";
import {useAuth} from "@/app/_contexts/auth/AuthState";
import {usePathname, useRouter} from "next/navigation";
import Button from "../../_components/ui/Button";
import {useState} from "react";
import Link from "next/link";
import {HiAcademicCap, HiMiniBriefcase, HiBookOpen, HiCog, HiArrowLeft, HiPencilSquare} from "react-icons/hi2";

const UserDashboard = () => {
   const router = useRouter();
   const pathname = usePathname();
   const {logout} = useAuth();
   function handleLogout() {
      logout();
   }

   const isActive = (path: string): boolean => pathname === path;

   return (
      <nav className={`flex-col items-center md:items-start w-full mx-2 h-auto min-h-8`}>
         <ul className=" flex flex-row md:flex-col gap-[0.8rem] w-full justify-between md:justify-between items-center md:items-start sora">
            <li className=" md:w-full">
               <Link
                  href={"/dashboard/courses"}
                  className={`flex gap-2 transition-all 0.3s text-sm lg:text-lg py-3  hover:bg-gray-50 rounded-l px-8 md:px-4 ${isActive("/vendor-dashboard") ? "bg-gray-50" : ""}`}
               >
                  <HiBookOpen className="w-[1.8rem] h-[1.8rem] hover:text-yellow-500 text-stone-950 " />

                  <p className="hidden md:flex text-center"> Courses</p>
               </Link>
            </li>
            <li className=" md:w-full">
               <Link href="/" className={`flex gap-2 transition-all 0.3s text-sm lg:text-lg py-3  hover:bg-gray-50 rounded-l px-8 md:px-4 ${isActive("/") ? "bg-gray-50" : ""}`}>
                  <HiPencilSquare className="hover:text-yellow-500 text-stone-950 w-[1.8rem] h-[1.8rem] " />
                  <p className="hidden md:flex">Add Course</p>
               </Link>
            </li>
            <li className=" md:w-full">
               <Link
                  href="/dashboard/settings"
                  className={`flex gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:bg-gray-50 rounded-l px-8 md:px-4 ${
                     isActive("/vendor-dashboard/settings") ? "bg-gray-50" : ""
                  }`}
               >
                  <HiCog className=" hover:text-yellow-500 text-stone-950 w-[1.8rem] h-[1.8rem]" />
                  <p className="hidden md:flex text-center">Settings</p>
               </Link>
            </li>
            <li className=" md:w-full">
               <button onClick={handleLogout} className=" flex gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:bg-gray-50 rounded-l px-8 md:px-4">
                  <HiArrowLeft title="Logout" className=" hover:text-yellow-500 text-stone-950 w-[1.8rem] h-[1.8rem]" />
                  <p className="hidden md:flex text-center "> Logout</p>
               </button>
            </li>
         </ul>
      </nav>
   );
};

export default UserDashboard;
