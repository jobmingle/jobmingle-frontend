"use client";
import Image from "next/image";
import React from "react";
import jobmingle from "../Images/jobmingle.png";
import Googleicon from "../Images/Googleicon.png";
import arrowback from "../Images/arrowback.png";
// import "../globals.css";
import Link from "next/link";
import {useRouter} from "next/navigation";
// useRouter

const page = () => {
   const router = useRouter();
   const handleSubmit = (e: any) => {
      e.preventDefault();
      console.log("hello");
      router.push("/Signin/Confirm-email");
   };
   return (
      <main className="text-black min-h-[100vh] h-auto ">
         <div className="p-0 m-0 h-full flex flex-col sm:flex-row sm:justify-center">
            <div className=" relative sm:hidden md:flex w-full md:w-[50%] h-[55vh] sm:h-[100vh] bg ">
               <Image src={jobmingle} alt="logo" className="w-[4.5rem] h-12 ml-4 sm:ml-8 mt-8" />
            </div>
            <div className=" w-full md:w-[50%] h-auto bg-[#FEFEFE] sm:h-[100vh] flex sm:justify-center flex-col items-center ">
               <div className="w-full flex pl-4 items-center py-4 flex-row">
                  <Image src={arrowback} alt="arrowback" className="  sm:hidden" />
               </div>
               <h2 className="font-bold text-2xl sm:text-3xl text-black-100 sora text-center mt-1 w-full px-4">Forgot Password</h2>
               <p className="montserrat font-semibold text-[75%] sm:text-sm text-black-100 w-full text-center px-4">
                  Please enter your email. A One Time Password (OTP) <br />
                  will be sent to you to confirm your email.
               </p>
               <main className="relative min-w-[95%] sm:min-w-[60%] md:min-w-[90%] lg:min-w-[60%] mt-7 sm:mt-4 p-2 pb-8 flex flex-col mx-4 sm:mx-8">
                  <form action="" className=" w-full mt-4">
                     <p className="text-sm montserrat py-1 tracking-wider font-medium">Email</p>
                     <input
                        type="text"
                        name=""
                        id=""
                        className="focus:outline-none mb-5 h-[3rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] sm:h-[2.5rem] pl-4"
                        placeholder="Enter Your Email Here"
                     />

                     <button
                        type="submit"
                        onClick={handleSubmit}
                        className="border-none border-[1px] text-sm text-white tracking-wider font-semibold montserrat w-full rounded-[10px] h-[3rem] sm:h-[2.5rem] pl-4 mt-[2rem] sm:mt-6 bg-[#F6CC16] text-center"
                     >
                        Reset Password
                     </button>
                     <Link href={"/Signin"} className="text-sm montserrat  font-medium float-right mt-4 text-black-100/80">
                        Remember Password ? <span className="text-[#F6CC16]">Login!</span>
                     </Link>
                  </form>
               </main>
            </div>
         </div>
      </main>
   );
};

export default page;
