"use client";
import Image from "next/image";
import React, {useState} from "react";
import jobmingle from "@/public/jobmingle.png";
import arrowback from "@/public/arrowback.png";
import {useRouter} from "next/navigation";
import SuccessModal from "@/Components/SuccessModal";

const Page = () => {
   const router = useRouter();
   const [Alert, setAlert] = useState(false);
   const handleback = () => {
      router.back();
   };
   const handlesubmit = (e: any) => {
      e.preventDefault();
      console.log("submitted");
      setAlert(true);
   };
   return (
      <div className="min-h-[100vh] border relative">
         {Alert ? (
            <SuccessModal
               extrastyling={"min-h-[110vh]  sm:h-[110vh] lg:h-[120vh] xl:h-[110vh]"}
               Act={"Job Listed Successfully " + "" + " it will take a while for the verification process to be completed"}
               linkto={"/"}
               whereto={"Click Here To Go Back To Home"}
            />
         ) : null}
         <div className="p-0 m-0 h-full flex flex-col sm:flex-row sm:justify-center overflow-x-hidden ">
            <div
               className=" w-full lg:w-[70%] min-h-[100vh] bg-[#FEFEFE] sm:h-[110vh] lg:h-[120vh] xl:h-[110vh] flex sm:justify-center relative flex-col items-center pb-6 sm:pb-3  "
               // style={{border: "1px solid red"}}
            >
               <div className="w-full flex pl-4 items-center py-4 flex-row sm:absolute sm:top-2 sm:left-2 " onClick={handleback}>
                  <Image src={arrowback} alt="arrowback" className="" />
               </div>

               {/*  */}
               <h3 className="montserrat capitalize text-3xl sm:text-3xl font-bold text-center">List your jobs on jobmingle</h3>
               <p className="sora text-md text-center capitalize tracking-wide px-2 sm:px-0">Note: It will take about 24hours for verification to be completed</p>
               <main
                  className="relative min-w-[95%] sm:min-w-[70%] md:min-w-[90%] lg:min-w-[90%] p-1 pb-8 sm:pb-2 flex flex-col justify-center items-center"
               //    style={{border: "1px solid blue"}}
               >
                  <form action="" className="w-full h-full pt-4">
                     <p className="text-sm montserrat py-1 tracking-wider font-medium">Name of company/Organization</p>
                     <input
                        type="text"
                        name=""
                        id="company-name"
                        className="focus:outline-none mb-3 h-[2.5rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] sm:h-[2.5rem] pl-4"
                        placeholder="Enter company name here"
                     />
                     <p className="text-sm montserrat py-1 tracking-wider font-medium">Link</p>
                     <input
                        type="text"
                        name=""
                        id="company-name"
                        className="focus:outline-none mb-3 h-[2.5rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] sm:h-[2.5rem] pl-4"
                        placeholder="Link to company's website/organization"
                     />
                     <p className="text-sm montserrat py-1 tracking-wider font-medium">Job Respondsibilities</p>
                     <textarea
                        name=""
                        id=""
                        className="focus:outline-none mb-3 h-[6rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] p-4"
                        placeholder="Enter job responsibilities"
                     ></textarea>
                     <p className="text-sm montserrat py-1 tracking-wider font-medium">Job Type</p>
                     <input
                        type="text"
                        name=""
                        id="type"
                        className="focus:outline-none mb-3 h-[2.5rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] sm:h-[2.5rem] pl-4"
                        placeholder="Hybrid/Remote"
                     />
                     <p className="text-sm montserrat py-1 tracking-wider font-medium">Salary (In naira)</p>
                     <input
                        type="text"
                        name=""
                        id="type"
                        className="focus:outline-none mb-3 h-[2.5rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] sm:h-[2.5rem] pl-4"
                        placeholder="Enter expected salary here"
                     />
                     <p className="text-sm montserrat py-1 tracking-wider font-medium">Job Description</p>
                     <textarea
                        name=""
                        id=""
                        className="focus:outline-none mb-3 h-[6rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] p-4"
                        placeholder="Enter job Description"
                     ></textarea>
                     <p className="text-sm montserrat py-1 tracking-wider font-medium">Email</p>
                     <input
                        type="email"
                        name=""
                        id="email"
                        className="focus:outline-none mb-3 h-[2.5rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] sm:h-[2.5rem] pl-4"
                        placeholder="Email/ Link to reach out to"
                     />
                     <button
                        type="submit"
                        className="border-none border-[1px] text-sm text-white tracking-wider font-semibold montserrat w-full rounded-[10px] h-[3rem] sm:h-[2.8rem] pl-4 mt-[1rem] bg-[#F6CC16] text-center"
                        onClick={handlesubmit}
                     >
                        Finish
                     </button>
                  </form>
               </main>
            </div>
         </div>
      </div>
   );
};

export default Page;
