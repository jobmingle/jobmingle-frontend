"use client";
import React from "react";
import Button from "../_components/atoms/Button";
import "../_styles/globals.css";
import Image from "next/image";
import tired from "../../public/tiredicon.png";
import share from "../../public/shareicon.png";
import love from "../../public/loveicon.png";
import {useRouter} from "next/navigation";

const jobs = [
   {
      id: 1,
      icon: tired,
      platform: "Upwork",
      jobTitle: "Virtual Assitance",
      location: "Remote",
      pricerange: "$15-$25",
   },
   {
      id: 2,
      icon: tired,
      platform: "figma",
      jobTitle: "Virtual Assitance",
      location: "Remote",
      pricerange: "$40-$85",
   },
   {
      id: 3,
      icon: tired,
      platform: "Discord",
      jobTitle: "moderator",
      location: "Uyo Nigeria",
      pricerange: "$15-$25",
   },
   {
      id: 4,
      icon: tired,
      platform: "Upwork",
      jobTitle: "Virtual Assitance",
      location: "Remote",
      pricerange: "$15-$25",
   },
   {
      id: 5,
      icon: tired,
      platform: "Upwork",
      jobTitle: "Virtual Assitance",
      location: "Remote",
      pricerange: "$15-$25",
   },
   {
      id: 6,
      icon: tired,
      platform: "figma",
      jobTitle: "Virtual Assitance",
      location: "Remote",
      pricerange: "$40-$85",
   },
   {
      id: 7,
      icon: tired,
      platform: "Discord",
      jobTitle: "moderator",
      location: "Rivers state",
      pricerange: "$15-$25",
   },
   {
      id: 8,
      icon: tired,
      platform: "Upwork",
      jobTitle: "Virtual Assitance",
      location: "Lagos Nigeria",
      pricerange: "$15-$25",
   },
   {
      id: 9,
      icon: tired,
      platform: "Upwork",
      jobTitle: "Virtual Assitance",
      location: "Remote",
      pricerange: "$15-$25",
   },
   {
      id: 10,
      icon: tired,
      platform: "figma",
      jobTitle: "Virtual Assitance",
      location: "Remote",
      pricerange: "$40-$85",
   },
   {
      id: 11,
      icon: tired,
      platform: "Discord",
      jobTitle: "moderator",
      location: "Rivers state",
      pricerange: "$15-$25",
   },
   {
      id: 12,
      icon: tired,
      platform: "Upwork",
      jobTitle: "Virtual Assitance",
      location: "Lagos Nigeria",
      pricerange: "$15-$25",
   },
];

const Page = () => {
   const Jobs = 1;
   const time = new Date().getHours();
   const router = useRouter();
   const handlelistjob = () => {
      router.push("/employerdashboard/list-a-job");
   };

   return (
      <div className="min-h-[70vh] sm:min-h-[85vh] md:min-h-[90vh] h-auto mx-2 md:mx-0">
         <Button className="w-[160px] max-md:w-[160px] text-[14px] mt-3 md:mt-0 text-white sora bg-[#f5cb1a]" onClick={handlelistjob}>
            List a job here !
         </Button>
         {Jobs >= 1 ? (
            <main className="border-black/50 w-full h-auto min-h-[35vh] md:min-h-[50vh] border-solid border-[0.5px] rounded-md mt-10 p-2 lg:p-4">
               <div className=" flex justify-between gap-4 items-center flex-wrap">
                  <section>
                     <h2 className="text-[18px] lg:text-[24px] montserrat font-semibold text-[#f5cb1a]">{time >= 12 ? "Good Evening" : "Good Morning"} Nneji! </h2>
                     <h3 className="text-[16px] lg:text-[20px] montserrat capitalize">Welcome to your employer dashboard</h3>
                     <p className="text-sm lg:text-[100%] montserrat text-cebbter">Here is your job listing statistics from july-september 2023</p>
                  </section>
                  <section>
                     <input
                        type="date"
                        name=""
                        id=""
                        className="border-[#f5cb1a] mr-4 w-[7.5rem] md:w-36 border-solid border-[1px] px-2 py-2 sora text-[75%] md:text-sm rounded-sm focus:outline-none "
                        placeholder="july-Nov"
                     />
                  </section>
               </div>
               <div className="flex justify-between mt-10">
                  <div className=" bg-[#1648C7] w-[8rem] sm:w-[10rem] h-[4rem] sm:h-[5rem] py-2">
                     <section className="sora text-white text-sm text-center flex flex-col justify-between h-full">
                        <div className=" text-xs sm:text-[100%]">Total Jobs listed</div>
                        {/* <button className="border w-7 h-7 float-right">-</button> */}
                        <div className=" text-[25px] font-semibold">28</div>
                     </section>
                  </div>
                  <div className=" bg-[#1648C7] w-[8rem] sm:w-[10rem] h-[4rem] sm:h-[5rem] py-2">
                     <section className="sora text-white text-sm text-center flex flex-col justify-between h-full">
                        <div className=" text-xs sm:text-[100%]">Available Jobs</div>
                        {/* <button className="border w-7 h-7 float-right">-</button> */}
                        <div className="text-[25px] font-semibold">16</div>
                     </section>
                  </div>
               </div>
               <div className=" mt-3 flex flex-row justify-between">
                  <p className="montserrat font-bold capitalize text-black-100 text-[90%] sm:text-[120%]">Listed Jobs</p>
                  <p className="montserrat font-semibold capitalize text-[#f5cb1a] text-[80%] sm:text-[110%] ">View all</p>
               </div>
               <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  mt-4 gap-4 ">
                  {jobs.map((job) => (
                     <div key={job.id} className="border p-2 md:p-3 rounded-md">
                        <section className=" flex flex-row gap-2 items-center">
                           <Image src={job.icon} alt="company-icon" className="w-8 h-8" /> <p className="text-sm font-semibold capitalize">{job.platform}</p>
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
               </section>
               <br />
            </main>
         ) : (
            <main className="border-black/50 w-full h-auto min-h-[35vh] md:min-h-[50vh] border-solid border-[0.5px] rounded-md mt-10 p-2">
               <div className=" flex justify-between gap-4 items-center flex-wrap">
                  <section>
                     <h2 className="text-[18px] lg:text-[24px] montserrat font-semibold text-[#f5cb1a]">{time >= 12 ? "Good Evening" : "Good Morning"} Nneji! </h2>
                     <h3 className="text-[16px] lg:text-[20px] montserrat capitalize">Welcome to your employer dashboard</h3>
                     <p className="text-sm lg:text-[100%] montserrat text-cebbter">Here is your job listing statistics from july-september 2023</p>
                  </section>
                  <section>
                     <input
                        type="date"
                        name=""
                        id=""
                        className="border-[#f5cb1a] mr-4 w-[7.5rem] md:w-36 border-solid border-[1px] px-2 py-2 sora text-[75%] md:text-sm rounded-sm focus:outline-none "
                     />
                  </section>
               </div>
               <section className="flex flex-col justify-center items-center py-4">
                  <Image src={tired} alt="tiredicon" className="w-24 h-24 md:w-28 md:h-28 m-auto" />
                  <p className="sora capitalize pt-2 ">you have not listed any job yet!</p>
                  <p className="sora capitalize text-md text-[#f5cb1a] underline">click here to list a job now!</p>
               </section>
               <br />
            </main>
         )}
         <br />
         <div className=" flex flex-col justify-center items-center space-y-3 py-1 ">
            <p className="sora capitalize text-2xl text-[#f5cb1a] underline">Join our newsletter.</p>
            <p className="sora capitalize text-center text-sm md:text-[100%] ">Never miss out on our updates, freebies and news!</p>
            <section className="w-full sm:w-auto m-auto flex flex-row flex-wrap justify-center gap-3 p-1">
               <input
                  type="text"
                  className=" h-12 w-full md:w-[19rem] rounded-sm bg-[#F5F5F1] focus:border-none outline-none focus:outline-none sora pl-4 text-sm"
                  placeholder="enter your email here"
               />
               <Button className="w-[140px] max-md:w-[160px] h-12 text-[12px] text-white sora bg-[#f5cb1a] text-center">Subscribe Now</Button>
            </section>
         </div>
      </div>
   );
};

export default Page;
