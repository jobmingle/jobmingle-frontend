"use client";
import React, {useState} from "react";
import {useAuth} from "@/app/_contexts/auth/AuthState";
import tiredicon from "@/public/tiredicon.png";
import userprofilepic from "@/public/ceo.jpeg";
import share from "@/public/shareicon.png";
import love from "@/public/loveicon.png";
import Image from "next/image";
import {Jobs} from "@/lib/_exportLinks";

//
const Page = () => {
	const { user, isLoading } = useAuth();
	const router = useRouter();

   let MyJobs = 1;
   const time = new Date().getHours();
   const timeOfTheDay = time >= 12 ? "Evening" : "Morning";

	// if (isLoading || !user) {
	// 	return <Loader />;
	// }

   return (
      <div className=" h-auto pt-4 px-2 sm:px-0 w-full flex-grow md:p-4 my-10">
         <div className=" flex flex-row py-1 items-center justify-between">
            <div>
               <h1 className="text-2xl font-bold">
                  Good {timeOfTheDay}, {user?.firstName || "Champ"}!
               </h1>
               <p>Welcome to your dashboard</p>
            </div>

            <div className="w-14 h-14 rounded-full overflow-hidden">
               <Image src={userprofilepic} alt="user_profile_pic" className="w-full h-full object-fill object-center " />
            </div>
         </div>

         <div className="pb-8">
            <div className="py-4">
               <h1 className="text-2xl mb-0  max-md:text-center max-md:text-3xl text-yellow-400 max-md:font-bold font-bold justify-center items-center ">
                  Browse your favorite jobs!
               </h1>
            </div>
            <div className="w-full p-1 flex row justify-center">
               <input
                  type="text"
                  className="border-[1px] border-solid border-yellow-400 pl-4 sora w-[23rem] h-[2.6rem] text-sm rounded-md focus:outline-none"
                  placeholder="Browse jobs..."
               />
            </div>
            {MyJobs >= 1 ? (
               <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  mt-4 gap-4 ">
                  {Jobs.map((job) => (
                     <div key={job.id} className="border p-2 md:p-3 rounded-md">
                        <section className=" flex flex-row gap-2 items-center relative">
                           <Image src={job.icon} alt="company-icon" className="w-8 h-8" /> <p className="text-sm font-semibold capitalize">{job.platform}</p>
                           <section className={`absolute right-1 text-white text-xs px-1 py-0.5 rounded-sm capitalize ${job.stat === "Applied" ? "bg-green-700" : "bg-red-700"}`}>
                              {job.stat ? job.stat : null}
                           </section>
                        </section>
                        <p className=" font-semibold text-md montserrat capitalize">{job.jobTitle}</p>
                        <p className=" text-xs sm:text-[85%] montserrat capitalize">{job.location}</p>
                        <p className=" border-b-[2px] border-solid border-x-black-100 text-xl sm:text-[120%] montserrat capitalize text-[#f5cb1a] font-semibold tracking-wide">
                           {job.pricerange}
                        </p>
                        <section className="flex flex-row justify-between m-1 py-1 ">
                           <button className="w-6 h-6">
                              <Image src={love} alt="loveicon" />
                           </button>
                           <button className="w-6 h-6">
                              <Image src={share} alt="shareicon" />
                           </button>
                        </section>
                     </div>
                  ))}
                  <br />
               </section>
            ) : (
               <main className=" w-full h-auto min-h-[35vh] md:min-h-[50vh] border-solid mt-10 p-2">
                  <section className="flex flex-col justify-center items-center py-4">
                     <Image src={tiredicon} alt="tiredicon" className="w-24 h-24 md:w-28 md:h-28 m-auto" />

                     <p className="sora capitalize pt-2 ">you have not apllied for any jobs yet!</p>
                     <p className="sora capitalize text-md text-[#f5cb1a] underline">click here to apply for a job now!</p>
                  </section>
                  <br />
               </main>
            )}
         </div>
      </div>
   );
};

export default Page;
