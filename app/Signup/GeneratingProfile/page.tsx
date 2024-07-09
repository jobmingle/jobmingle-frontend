"use client";
import Image from "next/image";
import React, {useState} from "react";
import jobmingle from "../../Signin/Images/jobmingle.png";
import arrowback from "../../Signin/Images/arrowback.png";
import "../../globals.css";
import Link from "next/link";
import {useRouter} from "next/navigation";
import SuccessModal from "../../../Components/SuccessModal";
import Interests from "@/Components/ProfileTabs/Interests";
import Usage from "@/Components/ProfileTabs/Usage";
import ProfilePic from "@/Components/ProfileTabs/ProfilePic";
//

const page = () => {
   const router = useRouter();
   const [ModalActive, setModalActive] = useState(false);
   const [ModalActive2, setModalActive2] = useState(false);
   const [CurrentTab, setCurrentTab] = useState(0);
   const tabs = [<Interests />, <Usage />, <ProfilePic />];

   const handlenext = () => {
      setCurrentTab(CurrentTab + 1);
   };

   const handlefinish = () => {
      setModalActive2(true);
   };
   // const handleback = () => {
   //    router.back();
   // };

   return (
      <main className="text-black min-h-[100vh] h-auto overflow-x-hidden ">
         {ModalActive ? <SuccessModal Act={"Email Verified"} linkto={"/Signup/GeneratingProfile"} whereto={"Click Here To Continue The Sign Up Process"} /> : null}
         {ModalActive2 ? <SuccessModal Act={"Account Created Successfully"} linkto={"/"} whereto={"Click Here To Continue"} /> : null}
         <div className="p-0 m-0 h-full flex flex-col sm:flex-row sm:justify-center overflow-x-hidden">
            <div className=" relative sm:hidden md:flex w-full md:w-[50%] h-[55vh] sm:h-[100vh] bg2 ">
               <Image src={jobmingle} alt="logo" className="w-[4.5rem] h-12 ml-4 sm:ml-8 mt-8" />
            </div>
            <div className=" w-full md:w-[50%] h-auto bg-[#FEFEFE] sm:h-[100vh] flex sm:justify-center relative flex-col items-center pb-6 sm:pb-3">
               {/* <div className="w-full flex pl-4 items-center py-4 flex-row sm:absolute sm:top-2 sm:left-2 " onClick={handleback}>
                  <Image src={arrowback} alt="arrowback" className="" />
               </div> */}
               {/* <div className=" w-full h-3 p-0 rounded-full max-w-[95%] sm:max-w-[70%] md:max-w-[90%] lg:max-w-[70%] flex justify-start items-center absolute top-4">
                  <div
                     className={`bg-[#F6CC16] ${CurrentTab === 0 ? "w-[33.3%]" : null} min-h-3 m-0 rounded-full  ${CurrentTab === 1 ? "w-[66.6%]" : null}  ${
                        CurrentTab === 2 ? "w-[100%]" : null
                     }`}
                  ></div>
               </div> */}

               <h2 className="font-bold text-2xl sm:text-3xl text-black-100 sora text-center mt-3 sm:mt-1 w-full px-4">Generating Profile</h2>

               {/*  */}
               <main className="relative min-w-[95%] sm:min-w-[70%] md:min-w-[90%] lg:min-w-[70%] p-1 pb-8 sm:pb-2 flex flex-col justify-center items-center">
                  {tabs[CurrentTab]}
                  {CurrentTab < 2 ? (
                     <button
                        type="submit"
                        onClick={handlenext}
                        className="border-none border-[1px] text-sm text-white tracking-wider font-semibold montserrat w-full rounded-[10px] h-[3rem] sm:h-[2.8rem] pl-4 mt-[1rem] bg-[#F6CC16] text-center"
                     >
                        Next
                     </button>
                  ) : (
                     <button
                        type="submit"
                        onClick={handlefinish}
                        className="border-none border-[1px] text-sm text-white tracking-wider font-semibold montserrat w-full rounded-[10px] h-[3rem] sm:h-[2.8rem] pl-4 mt-[2rem] bg-[#F6CC16] text-center"
                     >
                        Finish
                     </button>
                  )}{" "}
               </main>
            </div>
         </div>
      </main>
   );
};

export default page;
