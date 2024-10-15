"use client";
import {useAuth} from "@/app/_contexts/auth/AuthState";
import {usePathname, useRouter} from "next/navigation";
import Button from "../../_components/ui/Button";
import Link from "next/link";
import {HiArrowLeft, HiMiniBriefcase, HiOutlineCog, HiPencilSquare} from "react-icons/hi2";

const UserDashboard = () => {
   const pathname = usePathname();
   const {logout} = useAuth();
   function handleLogout() {
      logout();
   }

   const isActive = (path: string): boolean => pathname === path;

   return (
      <nav
         className={`flex-col items-center md:items-start w-full mx-2 h-auto min-h-8`}
         // className={` bg-gray-800 text-white flex flex-col items-center md:items-start border min-h-screen`}
      >
         <ul className=" flex flex-row md:flex-col gap-[0.8rem] w-full justify-between md:justify-between items-center md:items-start">
            <li className=" md:w-full">
               <Link
                  href="/employer-dashboard"
                  className={`flex gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:bg-gray-50 rounded-l px-8 md:px-4 ${isActive("/employer-dashboard") ? "bg-gray-50" : ""}`}
               >
                  <HiMiniBriefcase className="hover:text-yellow-500 text-stone-950 w-[1.8rem] h-[1.8rem] " />
                  <p className="hidden md:flex"> Jobs</p>
               </Link>
            </li>

            <li>
               <Link
                  href="/employer-dashboard/list-a-job"
                  className={`flex gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:bg-gray-50 rounded-l px-8 md:px-4 ${isActive("/") ? "bg-gray-50" : ""}`}
               >
                  <HiPencilSquare className="hover:text-yellow-500 text-stone-950 w-[1.8rem] h-[1.8rem] " />
                  <p className="hidden md:flex">List a Job</p>
               </Link>
            </li>
            <li>
               <Link
                  href="/employer-dashboard/settings"
                  className={`flex gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:bg-gray-50 rounded-l px-8 md:px-4 ${isActive("/employer-dashboard/settings") ? "bg-gray-50" : ""}`}
               >
                  <HiOutlineCog className="w-[1.8rem] h-[1.8rem] hover:text-yellow-500 text-stone-950" />

                  <p className="hidden md:flex">Settings</p>
               </Link>
            </li>

            <li className=" md:w-full">
               <button onClick={handleLogout} className=" flex items-center gap-2 transition-all 0.3s text-sm lg:text-lg py-3 hover:bg-gray-50 rounded-l px-8 md:px-4">
                  <HiArrowLeft title="Logout" className=" hover:text-yellow-500 text-stone-950 w-[1.8rem] h-[1.8rem]" />
                  <p className="hidden md:flex text-center "> Logout</p>
               </button>
            </li>
         </ul>
      </nav>
   );
};

export default UserDashboard;
