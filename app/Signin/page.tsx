import Image from "next/image";
import React from "react";
import signinBanner from "./Images/signinBanner.png";
import jobmingle from "./Images/jobmingle.png";
import Googleicon from "./Images/Googleicon.png";
import arrowback from "./Images/arrowback.png";
import "../globals.css";
import Link from "next/link";

const page = () => {
   return (
      <main className="text-black min-h-[100vh] h-auto overflow-x-hidden ">
         <div className="p-0 m-0 h-full flex flex-col sm:flex-row sm:justify-center overflow-x-hidden">
            <div className=" relative sm:hidden md:flex w-full md:w-[50%] h-[55vh] sm:h-[100vh] bg ">
               <Image src={jobmingle} alt="logo" className="w-[4.5rem] h-12 ml-4 sm:ml-8 mt-8" />
            </div>
            <div className=" w-full md:w-[50%] h-auto bg-[#FEFEFE]  relative sm:h-[100vh] flex sm:justify-center flex-col items-center ">
               <div className="w-full flex pl-4 items-center py-4 flex-row sm:absolute sm:top-2 sm:left-2 ">
                  <Image src={arrowback} alt="arrowback" className="" />
               </div>
               <h2 className="font-bold text-2xl sm:text-3xl text-black-100 sora text-center mt-1 w-full px-4">Welcome Back To Jobmingle</h2>
               <p className="montserrat font-semibold text-[75%] sm:text-sm text-black-100 w-full text-center px-4">please log in to your account to access feautures</p>
               <main className="relative min-w-[95%] sm:min-w-[70%] md:min-w-[90%] lg:min-w-[70%] mt-7 sm:mt-4 p-2 pb-8 flex flex-col">
                  <button className="border-black-100 border-solid montserrat border-[1px] w-full h-[3rem] sm:h-[3rem] rounded-[10px] flex justify-center items-center gap-1 bg-transparent">
                     <Image src={Googleicon} alt="google icon" className="w-4 h-4" />
                     <p className="text-xs font-bold">Login With Google</p>
                  </button>
                  <section className="border-black-100/50 border-solid montserrat border-b-[1px] h-[1rem] text-center mt-2 leading-3 pt-2 mx-12">
                     <span className="text-[75%] text-center px-3 py-0.5 text-black-100 bg-[#FEFEFE]">Or enter details below</span>
                  </section>
                  <form action="" className=" w-full mt-4">
                     <p className="text-sm montserrat py-1 tracking-wider font-medium">Email</p>
                     <input
                        type="text"
                        name=""
                        id="email"
                        className="focus:outline-none mb-5 h-[3rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] sm:h-[3rem] pl-4"
                        placeholder="Enter Your Email Here"
                     />
                     <p className="text-sm py-1 montserrat tracking-wider font-medium ">Password</p>
                     <input
                        type="password"
                        name=""
                        id="password"
                        className="focus:outline-none mb-2 h-[3rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] sm:h-[3rem] pl-4"
                        placeholder="Your Password"
                     />
                     <section className=" mt-1 flex flex-row justify-between">
                        <div className="flex flex-row gap-1">
                           <input type="checkbox" name="" id="" />
                           <p className=" montserrat text-xs font-medium">Remember me</p>
                        </div>
                        <Link href={"/Signin/Forgot-password"} className="text-xs text-[#F6CC16] montserrat font-medium">
                           Forgot Password?
                        </Link>
                     </section>

                     <button className="border-none border-[1px] text-sm text-white tracking-wider font-semibold montserrat w-full rounded-[10px] h-[3rem] sm:h-[3rem] pl-4 mt-[4.5rem] sm:mt-6 bg-[#F6CC16] text-center">
                        Login
                     </button>
                     <p className="text-sm montserrat  font-medium float-right mt-4 text-black-100/80">
                        Don't have an Account?{" "}
                        <Link href={"/Signup"} className="text-[#F6CC16]">
                           Sign up now!
                        </Link>
                     </p>
                  </form>
               </main>
            </div>
         </div>
      </main>
   );
};

export default page;
