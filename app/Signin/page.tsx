import Image from "next/image";
import React from "react";
import signinBanner from "./Images/signinBanner.png";
import jobmingle from "./Images/jobmingle.png";
import Googleicon from "./Images/Googleicon.png";
import arrowback from "./Images/arrowback.png";
import "../globals.css";

const page = () => {
   return (
      <div className="p-0 m-0 bg-[#FEFEFE] text-black min-h-[100vh] h-auto grid grid-cols-1 sm:grid-cols-2 justify-center">
         <div className=" relative h-[60vh] sm:h-screen sm:hidden md:flex bg">
            {/* <Image src={signinBanner} alt="a girl on her laptop" className="object-center" /> */}
            <Image src={jobmingle} alt="logo" className="w-[4.5rem] h-12 ml-8 mt-8" />
         </div>
         <div className=" h-[50vh] sm:h-screen sm:w-screen md:w-auto flex sm:justify-center flex-col items-center ">
            <Image src={arrowback} alt="arrowback" className="w-4 h-4"/>
            <h2 className="font-bold text-2xl sm:text-3xl text-black-100 sora text-center w-full px-4">Welcome Back To Jobmingle</h2>
            <p className="montserrat font-semibold text-sm text-black-100 w-full text-center px-4">please log in to your account to access feautures</p>
            {/* inputs and login means */}
            <main className="relative min-w-[95%] sm:min-w-[70%] md:min-w-[90%] lg:min-w-[60%]  mt-4 p-2">
               <button className="border-black-100/40 border-solid montserrat border-[1px] w-full h-[2.5rem] rounded-[10px] flex justify-center items-center gap-1 bg-transparent">
                  <Image src={Googleicon} alt="google icon" className="w-4 h-4" />
                  <p className="text-xs font-bold">Login With Google</p>
               </button>
               <section className="border-black-100/50 border-solid montserrat border-b-[1px] h-[1rem] text-center mt-2 leading-3 pt-1.5 mx-12">
                  <span className="text-[75%] text-center px-3 py-0.5 text-black-100 bg-[#FEFEFE]">Or enter details below</span>
               </section>
               <form action="" className=" w-full mt-4 ">
                  <p className="text-sm montserrat py-1 tracking-wider font-medium">Email</p>
                  <input
                     type="text"
                     name=""
                     id=""
                     className="focus:outline-none mb-5 border-black-100/40 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] h-[2.5rem] pl-4"
                     placeholder="Enter Your Email Here"
                  />
                  <p className="text-sm py-1 montserrat tracking-wider font-medium ">Password</p>
                  <input
                     type="text"
                     name=""
                     id=""
                     className="focus:outline-none mb-2 border-black-100/40 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] h-[2.5rem] pl-4"
                     placeholder="Your Password"
                  />
                  <section className=" mt-1 flex flex-row justify-between">
                     <div className="flex flex-row gap-1">
                        <input type="checkbox" name="" id="" />
                        <p className=" montserrat text-xs font-medium">Remember me</p>
                     </div>
                     <p className="text-xs text-[#F6CC16] montserrat font-medium">Forgot Password?</p>
                  </section>

                  <button className="border-none border-[1px] text-sm text-white tracking-wider font-semibold montserrat w-full rounded-[10px] h-[2.5rem] pl-4 mt-6 bg-[#F6CC16] text-center">
                     Login
                  </button>
                  <p className="text-sm  font-medium float-right mt-1 text-black-100/80">
                     Don't have an Account? <span className="text-[#F6CC16]">Sign up now!</span>
                  </p>
               </form>
            </main>
         </div>
      </div>
   );
};

export default page;
