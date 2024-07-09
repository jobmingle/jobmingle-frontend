"use client";
import Image from "next/image";
import React from "react";
import jobmingle from "../Signin/Images/jobmingle.png";
import Googleicon from "../Signin/Images/Googleicon.png";
import "../globals.css";
import Link from "next/link";
import {useRouter} from "next/navigation";

//
const page = () => {
   const router = useRouter();

   const handleSubmit = (e: any) => {
      e.preventDefault();
      // perform neccessary api requests
      // redirect to verify
      router.push("/Signup/Verify");
   };
   return (
      <main className="text-black min-h-[100vh] h-auto">
         <div className="p-0 m-0 h-full flex flex-col sm:flex-row sm:justify-center">
            <div className=" relative sm:hidden md:flex w-full md:w-[50%] h-[55vh] sm:h-[100vh] bg2 ">
               <Image src={jobmingle} alt="logo" className="w-[4.5rem] h-12 ml-4 sm:ml-8 mt-8" />
            </div>
            <div className=" w-full md:w-[50%] h-auto py-4 md:py-0 bg-[#FEFEFE] sm:h-[100vh] flex sm:justify-center flex-col items-center ">
               <h2 className="font-bold text-2xl sm:text-3xl text-black-100 sora text-center mt-1 w-full px-4">Welcome To Jobmingle</h2>
               <p className="montserrat font-semibold text-[75%] sm:text-sm text-black-100 w-full text-center px-4">please create an account to get on board</p>
               <main className="relative min-w-[95%] sm:min-w-[70%] md:min-w-[90%] lg:min-w-[70%] mt-7 sm:mt-2 p-2 pb-8 sm:pb-2 flex flex-col">
                  <button className="border-black-100 border-solid montserrat border-[1px] w-full h-[3rem] sm:h-[2.5rem] rounded-[10px] flex justify-center items-center gap-1 bg-transparent">
                     <Image src={Googleicon} alt="google icon" className="w-4 h-4" />
                     <p className="text-xs font-bold">Sign Up With Google</p>
                  </button>
                  <section className="border-black-100/50 border-solid montserrat border-b-[1px] h-[1rem] text-center mt-2 leading-3 pt-2 mx-12">
                     <span className="text-[75%] text-center px-3 py-0.5 text-black-100 bg-[#FEFEFE]">Or enter details below</span>
                  </section>
                  <form action="" className=" w-full">
                     <p className="text-sm montserrat py-1 tracking-wider font-medium">Name</p>
                     <input
                        type="text"
                        name=""
                        id="name"
                        className="focus:outline-none mb-2 h-[3rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] sm:h-[2.5rem] pl-4"
                        placeholder="Enter Your Name Here"
                     />
                     <p className="text-sm montserrat py-1 tracking-wider font-medium">Email</p>
                     <input
                        type="email"
                        name=""
                        id="email"
                        className="focus:outline-none mb-2 h-[3rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] sm:h-[2.5rem] pl-4"
                        placeholder="Enter Your Email Here"
                     />
                     <p className="text-sm montserrat py-1 tracking-wider font-medium">Phone Number</p>
                     <input
                        type="number"
                        name=""
                        id="number"
                        className="focus:outline-none mb-2 h-[3rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] sm:h-[2.5rem] pl-4"
                        placeholder="Enter Your Phone number Here"
                     />
                     <p className="text-sm py-1 montserrat tracking-wider font-medium ">Password</p>
                     <input
                        type="password"
                        name=""
                        id="pass"
                        className="focus:outline-none mb-2 h-[3rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] sm:h-[2.5rem] pl-4"
                        placeholder="Your Password"
                     />
                     <p className="text-sm py-1 montserrat tracking-wider font-medium ">Confirm Password</p>
                     <input
                        type="password"
                        name=""
                        id="confirmpass"
                        className="focus:outline-none mb-2 h-[3rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] sm:h-[2.5rem] pl-4"
                        placeholder="Confirm Your Password"
                     />
                     <section className=" mt-1 flex flex-row justify-between">
                        <div className="flex flex-row gap-1">
                           <input type="checkbox" name="" id="" />
                           <p className=" montserrat text-xs font-medium">i have read and agreed to the terms and conditions of Jobmingle.</p>
                        </div>
                     </section>

                     <button
                        onClick={handleSubmit}
                        type="submit"
                        className="border-none border-[1px] text-sm text-white tracking-wider font-semibold montserrat w-full rounded-[10px] h-[3rem] sm:h-[2.5rem] pl-4 mt-[4.5rem] sm:mt-6 bg-[#F6CC16] text-center"
                     >
                        Create Your Account
                     </button>
                     <p className="text-sm montserrat  font-medium float-right mt-4 text-black-100/80">
                        Don't have an Account?{" "}
                        <Link href={"/Signin"} className="text-[#F6CC16]">
                           Login
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
