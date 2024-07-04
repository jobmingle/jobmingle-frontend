"use client";
import Image from "next/image";
import React, {useState} from "react";
import jobmingle from "../Images/jobmingle.png";
import Googleicon from "../Images/Googleicon.png";
import arrowback from "../Images/arrowback.png";
import "../../globals.css";
import Link from "next/link";
import SuccessModal from "../../../Components/SuccessModal";
const page = () => {
   const [ResetSuccessful, setResetSuccessful] = useState(false);

   const handleUpdatePassword = (e: any) => {
      e.preventDefault();
      // perform any neccesary actions
      // setalert to true
      setResetSuccessful(true);
   };
   useState;
   return (
      <main className="text-black min-h-[100vh] h-auto relative overflow-x-hidden">
         {ResetSuccessful ? <SuccessModal whereto={" Click here to go back to login"} Act={"Your password has been changed successfully!"} linkto={"/Signin"} /> : null}{" "}
         <div className="p-0 m-0 h-full flex flex-col sm:flex-row sm:justify-center relative overflow-x-hidden">
            <div className=" relative sm:hidden md:flex w-full md:w-[50%] h-[55vh] sm:h-[100vh] bg ">
               <Image src={jobmingle} alt="logo" className="w-[4.5rem] h-12 ml-4 sm:ml-8 mt-8" />
            </div>
            <div className=" w-full md:w-[50%] h-auto bg-[#FEFEFE] sm:h-[100vh] flex sm:justify-center flex-col items-center ">
               <div className="w-full flex pl-4 items-center py-4 flex-row">
                  <Image src={arrowback} alt="arrowback" className="  sm:hidden" />
               </div>
               <h2 className="font-bold text-2xl sm:text-3xl text-black-100 sora text-center mt-1 w-full px-4">Create new Password</h2>
               <p className="montserrat font-semibold text-[75%] sm:text-sm text-black-100 w-full text-center px-4">please log in to your account to access feautures</p>
               <main className="relative min-w-[95%] sm:min-w-[70%] md:min-w-[90%] lg:min-w-[70%] mt-7 sm:mt-4 p-2 pb-8 flex flex-col">
                  <form action="" className=" w-full mt-4">
                     <p className="text-sm montserrat py-1 tracking-wider font-medium">Password</p>
                     <input
                        type="password"
                        name=""
                        id="newpass"
                        className="focus:outline-none mb-5 h-[3rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] sm:h-[2.5rem] pl-4"
                        placeholder="New Password"
                     />
                     <p className="text-sm py-1 montserrat tracking-wider font-medium ">Confirm Password</p>
                     <input
                        type="password"
                        name=""
                        id="confirm new pass"
                        className="focus:outline-none mb-2 h-[3rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] sm:h-[2.5rem] pl-4"
                        placeholder="Confirm Password"
                     />

                     <button
                        onClick={handleUpdatePassword}
                        className="border-none border-[1px] text-sm text-white tracking-wider font-semibold montserrat w-full rounded-[10px] h-[3rem] sm:h-[2.5rem] pl-4 mt-[4.5rem] sm:mt-6 bg-[#F6CC16] text-center"
                     >
                        Update Password
                     </button>
                  </form>
               </main>
            </div>
         </div>
      </main>
   );
};

export default page;
