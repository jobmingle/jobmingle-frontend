"use client";
import React, {useState} from "react";
import tiredicon from "../../public/tiredicon.png";
import editicon from "../../public/editicon.png";
import Image from "next/image";
import Courses from "./_Tabs/Courses";
import Jobs from "./_Tabs/Jobs";
import Password from "./_Tabs/Password";

//
const Page = () => {
   const [Tabs, setTabs] = useState(0);
   let MyTabs = [<Jobs />, <Courses />, <Password />];

   const username = "Prosper Williams";
   const location = "Benin City Nigeria";
   return (
      <div className=" h-auto pt-4 px-2 sm:px-0">
         <section className="m-auto max-w-[22rem] flex flex-col justify-center py-2 sm:px-2">
            <main className=" flex justify-center flex-row items-center gap-3">
               <div className=" flex-2">
                  {" "}
                  <Image src={tiredicon} alt="profile image" className="max-w-[5.6rem] sm:max-w-[6rem] object-cover" />
               </div>
               <div className="flex-grow text-center">
                  {" "}
                  <h3 className="font-bold text-xl montserrat">{username}</h3>
                  <p className="sora text-sm">{location}</p>
               </div>
            </main>
            <button className=" border mt-3 max-w-[8rem] m-auto items-center capitalize flex justify-center gap-1 rounded-sm text-sm px-3 py-2 sora text-semibold ">
               <p>Edit Profile</p>
               <Image src={editicon} alt="editicon" className="w-4 h-4 " />
            </button>
         </section>
         <div className=" mt-4 sm:px-2 md:px-0">
            <section className="flex justify-between">
               <button className={` py-2 px-4 sora text-sm text-[#021C5F] rounded-md ${Tabs === 0 ? "border bg-[#F5F5F1]" : null}`} onClick={() => setTabs(0)}>
                  All jobs
               </button>
               <button className={` py-2 px-4 sora text-sm text-[#021C5F] rounded-md ${Tabs === 1 ? "border bg-[#F5F5F1]" : null}`} onClick={() => setTabs(1)}>
                  Courses
               </button>
               <button className={` py-2 px-4 sora text-sm text-[#021C5F] rounded-md ${Tabs === 2 ? "border bg-[#F5F5F1]" : null}`} onClick={() => setTabs(2)}>
                  Password
               </button>
            </section>
            <br />
            {MyTabs[Tabs]}
         </div>
      </div>
   );
};

export default Page;
