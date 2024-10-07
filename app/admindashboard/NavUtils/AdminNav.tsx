"use client";
import React, {useEffect, useState} from "react";
import hamburger from "../../../public/hamburgericon.svg";
import close from "../../../public/closeicon.svg";
import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
//
const Sidenav = () => {
   const [Navactive, setNavactive] = useState(false);
   const pathname = usePathname();
   // const Links = [
   //    {
   //       id: 1,
   //       Name: "Dashboard",
   //       to: "/admindashboard",
   //    },
   //    {
   //       id: 2,
   //       Name: "Courses",
   //       to: "/admindashboard/courses",
   //    },
   //    {
   //       id: 3,
   //       Name: "Jobs",
   //       to: "/admindashboard/jobs",
   //    },
   // ];

   const handlelinkclick = () => {
      if (Navactive === true) {
         setNavactive(false);
      }
   };

   return (
      <div className="flex h-screen">
         {/* Sidebar */}
         <aside className="w-64 bg-[#2e2d33] text-black flex flex-col border-r-[1px] border-solid border-white">
            <div className="p-6">
               <h1 className="text-2xl font-bold text-white">Dashboard</h1>
            </div>
            <nav className="flex-1 px-4 space-y-4">
               <a href="#" className="block py-2 px-3 rounded hover:bg-white  text-white hover:text-gray-800">
                  Dashboard
               </a>
               <a href="#" className="block py-2 px-3 rounded hover:bg-white text-white hover:text-gray-800">
                  Jobs
               </a>
            </nav>
         </aside>

         {/* Main Content */}
      </div>
   );
};

export default Sidenav;
