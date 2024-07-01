import Image from "next/image";
import React from "react";
import signinBanner from "./Images/signinBanner.png";
import jobmingle from "./Images/jobmingle.png";
import Googleicon from "./Images/Googleicon.png";
import "../globals.css";

const page = () => {
   return (
      <div className="p-0 m-0 bg-[#FEFEFE] text-black min-h-[100vh] h-screen grid grid-cols-1 sm:grid-cols-2 justify-center">
         <div className=" relative sm:h-screen sm:hidden md:flex bg">
            {/* <Image src={signinBanner} alt="a girl on her laptop" className="object-center" /> */}
            <Image src={jobmingle} alt="logo" className="w-[4.5rem] h-12 ml-8 mt-8" />
         </div>
         <div className="border-red-600 border-solid border-2  sm:h-screen sm:w-screen md:w-auto flex justify-center flex-col items-center ">
            <h2 className="font-bold text-3xl text-black-100 sora text-center w-full">Welcome Back To Jobmingle</h2>
            <p className="montserrat font-semibold text-sm text-black-100 w-full text-center">please log in to your account to access feautures</p>
            <main className="border-orange-500 border-2 border-solid min-w-[68%] mt-4">
               <button className="border-red-500 border-solid border-2 ">
                  <Image src={Googleicon} alt="google icon" />
               </button>
            </main>
         </div>
      </div>
   );
};

export default page;
