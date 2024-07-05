"use client";
import Image from "next/image";
import React, {useState} from "react";
import jobmingle from "../Images/jobmingle.png";
import Googleicon from "../Images/Googleicon.png";
import arrowback from "../Images/arrowback.png";
// import "../globals.css";
import Link from "next/link";
import {useRouter} from "next/navigation";

const page = () => {
   const [Code, setCode] = useState(["", "", "", ""]);
   const router = useRouter();
   // onchange functionlities
   const handleChange = (e: any) => {
      const value = e.target.value;
      console.log(value);
   };
   // onsubmitfunctionalities
   const handleSubmit = (e: any) => {
      e.preventDefault();
      router.push("/Signin/ResetPassword");
   };
   return (
      <main className="text-black min-h-[100vh] h-auto overflow-x-hidden">
         <div className="p-0 m-0 h-full flex flex-col sm:flex-row sm:justify-center overflow-x-hidden">
            <div className=" relative sm:hidden md:flex w-full md:w-[50%] h-[55vh] sm:h-[100vh] bg ">
               <Image src={jobmingle} alt="logo" className="w-[4.5rem] h-12 ml-4 sm:ml-8 mt-8" />
            </div>
            <div className=" w-full md:w-[50%] h-auto bg-[#FEFEFE] sm:h-[100vh] flex sm:justify-center relative flex-col items-center">
               <div className="w-full flex pl-4 items-center py-4 flex-row sm:absolute sm:top-2 sm:left-2 ">
                  <Image src={arrowback} alt="arrowback" className="" />
               </div>
               <h2 className="font-bold text-2xl sm:text-3xl text-black-100 sora text-center mt-1 w-full px-4">Confirm Email</h2>
               <p className="montserrat font-semibold text-[75%] sm:text-sm text-black-100 w-full text-center px-4">
                  Please enter the verification pin sent to <br />
                  ***doe@example.com to reset password
               </p>
               <main className="relative min-w-[95%] sm:min-w-[70%] md:min-w-[90%] lg:min-w-[70%] mt-7 sm:mt-4 pb-6 px-1 sm:px-0 flex items-center flex-col">
                  <form action="" className=" w-full mt-4 mx-2">
                     <div className="w-full flex flex-row justify-center gap-2">
                        {Code.map((digit, index) => {
                           return (
                              <input
                                 type="text"
                                 name=""
                                 id=""
                                 value={digit}
                                 key={index}
                                 onChange={(e) => handleChange(e)}
                                 className="border-[1px] border-solid rounded-[5px] border-black-100 w-[46px] h-[46px] text-black-100 text-lg text-center "
                              />
                           );
                        })}
                     </div>
                     <div className="mt-3">
                        <p className="montserrat font-bold text-lg text-[#021C5F] text-center">Expires in 9:40</p>
                        <div className="mt-6 w-full text-center">
                           <p className="text-black-100 text-xs sora">Didn't get the email ?</p>
                           <button className="border-none text-sm sora tracking-wider sora font-semibold text-[#F6CC16]">click here to resend</button>
                        </div>
                     </div>
                     <button
                        onClick={handleSubmit}
                        className="border-none border-[1px] text-sm text-white tracking-wider font-semibold montserrat w-full rounded-[10px] h-[3rem] sm:h-[3rem] pl-4 mt-[2rem] sm:mt-6 bg-[#F6CC16] text-center"
                     >
                        Submit pin
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
