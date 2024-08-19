import React from "react";
import tired from "../../../public/tiredicon.png";
import tiredicon from "../../../public/tiredicon.png";
import love from "../../../public/loveicon.png";
import share from "../../../public/shareicon.png";
import Image from "next/image";
const jobs = [
   {
      id: 1,
      icon: tired,
      platform: "Upwork",
      jobTitle: "Virtual Assitance",
      location: "Remote",
      pricerange: "$15-$25",
      stat: "Applied",
   },
   {
      id: 2,
      icon: tired,
      platform: "figma",
      jobTitle: "Virtual Assitance",
      location: "Remote",
      pricerange: "$40-$85",
      stat: "expires soon",
   },
   {
      id: 3,
      icon: tired,
      platform: "Discord",
      jobTitle: "moderator",
      location: "Uyo Nigeria",
      pricerange: "$15-$25",
      stat: "Applied",
   },
   {
      id: 4,
      icon: tired,
      platform: "Upwork",
      jobTitle: "Virtual Assitance",
      location: "Remote",
      pricerange: "$15-$25",
      stat: "Applied",
   },
   {
      id: 5,
      icon: tired,
      platform: "Upwork",
      jobTitle: "Virtual Assitance",
      location: "Remote",
      pricerange: "$15-$25",
      stat: "expires soon",
   },
   {
      id: 6,
      icon: tired,
      platform: "figma",
      jobTitle: "Virtual Assitance",
      location: "Remote",
      pricerange: "$40-$85",
      stat: "expires soon",
   },
   {
      id: 7,
      icon: tired,
      platform: "Discord",
      jobTitle: "moderator",
      location: "Rivers state",
      pricerange: "$15-$25",
      stat: "Applied",
   },
   {
      id: 8,
      icon: tired,
      platform: "Upwork",
      jobTitle: "Virtual Assitance",
      location: "Lagos Nigeria",
      pricerange: "$15-$25",
      stat: "expires soon",
   },
   {
      id: 9,
      icon: tired,
      platform: "Upwork",
      jobTitle: "Virtual Assitance",
      location: "Remote",
      pricerange: "$15-$25",
      stat: "Applied",
   },
   {
      id: 10,
      icon: tired,
      platform: "figma",
      jobTitle: "Virtual Assitance",
      location: "Remote",
      pricerange: "$40-$85",
      stat: "Applied",
   },
   {
      id: 11,
      icon: tired,
      platform: "Discord",
      jobTitle: "moderator",
      location: "Rivers state",
      pricerange: "$15-$25",
      stat: "expires soon",
   },
   {
      id: 12,
      icon: tired,
      platform: "Upwork",
      jobTitle: "Virtual Assitance",
      location: "Lagos Nigeria",
      pricerange: "$15-$25",
      stat: "expires soon",
   },
];
const Jobs = () => {
   let MyJobs = 1;
   return (
      <div>
         {MyJobs >= 1 ? (
            <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  mt-4 gap-4 ">
               {jobs.map((job) => (
                  <div key={job.id} className="border p-2 md:p-3 rounded-md">
                     <section className=" flex flex-row gap-2 items-center relative">
                        <Image src={job.icon} alt="company-icon" className="w-8 h-8" /> <p className="text-sm font-semibold capitalize">{job.platform}</p>
                        <section
                           className={`absolute right-1 sm:right-3 text-white text-xs px-1 sm:px-2 py-0.5 sm:py-1 rounded-sm capitalize ${
                              job.stat === "Applied" ? "bg-green-700" : "bg-red-700"
                           }`}
                        >
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
   );
};

export default Jobs;
