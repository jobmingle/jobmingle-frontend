import React from "react";
import changepassbg from "../../../public/changepassimg.png";
import Image from "next/image";

const Page = () => {
   return (
      <div className=" flex flex-col items-center gap-3 h-auto">
         {/* <section className=" hidden lg:flex items-center justify-center ">
            <Image src={changepassbg} alt="illustration" className=" w- full aspect-square" />
         </section> */}
         <section className=" w-full lg:max-w-[30rem] px-2 sm:px-20 md:px-0">
            <h2 className="font-bold text-xl montserrat text-center capitalize tracking-wide py-2">Create new password</h2>
            <form action="" className=" flex flex-col mt-4 pb-4">
               <label htmlFor="currentpass " className="text-[100%] font-semibold">
                  Current Password
               </label>
               <input
                  type="password"
                  name="currentpass"
                  id="currentpass"
                  className="focus:outline-none h-[2.9rem] bg-transparent border-[1.2px] border-solid border-[#f5cb1a] w-full rounded-[8px] pl-4 sora text-[80%]"
                  placeholder="Current Password"
               />
               <p className="mb-5 text-xs sora py-0.5">We need to be sure you're making this change</p>
               <label htmlFor="newpass" className="text-[100%] font-semibold">
                  New Password
               </label>
               <input
                  type="password"
                  name="newpass"
                  id="newpass"
                  className="focus:outline-none mb-5 h-[2.9rem] bg-transparent border-[1.2px] border-solid border-[#f5cb1a] w-full rounded-[8px] pl-4 sora text-[80%]"
                  placeholder="Enter new papssword"
               />
               <label htmlFor="confirmnewpass" className="text-[100%] font-semibold">
                  Confirm Password
               </label>
               <input
                  type="password"
                  name="confirmnewpass"
                  id="confirmnewpass"
                  className="focus:outline-none mb-5 h-[2.9rem] bg-transparent border-[1.2px] border-solid border-[#f5cb1a] w-full rounded-[8px] pl-4 sora text-[80%]"
                  placeholder="Enter password again"
               />

               <button className="focus:outline-none mt-6 h-[2.9rem] border-[1.2px] border-solid bg-[#f5cb1a] w-full rounded-[8px] pl-4 sora text-[100%] text-white">
                  change password
               </button>
            </form>
         </section>
      </div>
   );
};

export default Page;
