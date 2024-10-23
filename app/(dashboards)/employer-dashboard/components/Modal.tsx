"use client";
import Button from "@/app/_components/atoms/Button";
import React, {useState} from "react";
import arrowback from "@/public/arrowback.png";
import {useRouter} from "next/navigation";
import Image from "next/image";

interface CompProps {
   setActive: any;
   ChosenJob: any;
}

const Modal: React.FC<CompProps> = ({ChosenJob, setActive}) => {
   const router = useRouter();
   const [formData, setFormData] = useState({platform: ChosenJob.platform, link:ChosenJob.website, email: "", jobres: "", type: "", salary: "", jobdes: ""});

   // const handleclose = () => {
   //    setActive(false);
   // };

   // const handleback = () => {
   //    router.back();
   // };
   const handlecancel = () => {
      setActive(false);
   };
   const handleChange = (e: any) => {
      const {name, value} = e.target;
      setFormData((prev) => ({...prev, [name]: value}));
      //   access for value and name with "name" and "value"
   };
   const handlesubmit = (e: any) => {
      e.preventDefault();
      console.log(formData);
      console.log(ChosenJob);
   };
   console.log(ChosenJob);

   //
   //
   const style = "border-[#e5bb0a] border-[1px] border-solid h-[2rem] w-full text-xs rounded-sm sora pl-2 bg-transparent text-white focus:outline-none";
   return (
      <div
         className={"absolute top-0 bottom-0 right-0 left-0 min-h-screen bg-[#f1f1f1] px-5 sm:px-0 flex flex-col items-center z-40 "}
         // style={{border: "1px solid red"}}
      >
         <div className="p-0 m-0 h-full w-full flex flex-col overflow-x-hidden ">
            <h3 className="montserrat capitalize text-3xl sm:text-3xl font-bold text-center mt-4 pb-6 sm:pb-3  ">Update Job</h3>

            <main
               className="relative w-full lg:w-[70%] sm:min-w-[70%] m-auto lg:min-w-[78%] p-1 pb-8 sm:pb-2 flex flex-col justify-center items-center"
               // style={{border: "1px solid blue"}}
            >
               <form action="" className="w-full h-full pt-4" onSubmit={handlesubmit}>
                  <p className="text-sm montserrat py-1 tracking-wider font-medium">Name of company/Organization</p>
                  <input
                     type="text"
                     name="platform"
                     id="company-name"
                     value={formData.platform}
                     className="focus:outline-none mb-3 h-[2.5rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] sm:h-[2.5rem] pl-4"
                     placeholder="Enter company name here"
                     onChange={handleChange}
                  />
                  <p className="text-sm montserrat py-1 tracking-wider font-medium">Link</p>
                  <input
                     type="text"
                     name="link"
                     id="company-link"
                     value={formData.link}
                     className="focus:outline-none mb-3 h-[2.5rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] sm:h-[2.5rem] pl-4"
                     placeholder="Link to company's website/organization"
                     onChange={handleChange}
                  />
                  <p className="text-sm montserrat py-1 tracking-wider font-medium">Job Respondsibilities</p>
                  <textarea
                     name="jobres"
                     id="jobres"
                     value={formData.jobres}
                     className="focus:outline-none mb-3 h-[6rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] p-4"
                     placeholder="Enter job responsibilities"
                     onChange={handleChange}
                  ></textarea>
                  <p className="text-sm montserrat py-1 tracking-wider font-medium">Job Type</p>
                  <input
                     type="text"
                     name="type"
                     id="type"
                     value={formData.type}
                     className="focus:outline-none mb-3 h-[2.5rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] sm:h-[2.5rem] pl-4"
                     placeholder="Hybrid/Remote"
                     onChange={handleChange}
                  />
                  <p className="text-sm montserrat py-1 tracking-wider font-medium">Salary (In naira)</p>
                  <input
                     type="text"
                     name="salary"
                     id="salary"
                     className="focus:outline-none mb-3 h-[2.5rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] sm:h-[2.5rem] pl-4"
                     placeholder="Enter expected salary here"
                     onChange={handleChange}
                  />
                  <p className="text-sm montserrat py-1 tracking-wider font-medium">Job Description</p>
                  <textarea
                     name="jobdes"
                     id="jobdes"
                     value={formData.jobdes}
                     className="focus:outline-none mb-3 h-[6rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] p-4"
                     placeholder="Enter job Description"
                     onChange={handleChange}
                  ></textarea>
                  <p className="text-sm montserrat py-1 tracking-wider font-medium">Email</p>
                  <input
                     type="email"
                     name="email"
                     id="email"
                     value={formData.email}
                     className="focus:outline-none mb-3 h-[2.5rem] bg-transparent border-black-100 border-[1px] text-[68%] sora border-solid w-full rounded-[10px] sm:h-[2.5rem] pl-4"
                     placeholder="Email/ Link to reach out to"
                     onChange={handleChange}
                  />
                  <button
                     type="submit"
                     className="border-none border-[1px] text-sm text-white tracking-wider font-semibold montserrat w-full rounded-[10px] h-[3rem] sm:h-[2.8rem] pl-4 mt-[1rem] bg-[#F6CC16] text-center"
                     onClick={handlesubmit}
                  >
                     Update
                  </button>
                  <button
                     type="submit"
                     className="border-none border-[1px] text-sm text-black tracking-wider font-semibold montserrat w-full rounded-[10px] h-[3rem] sm:h-[2.8rem] pl-4 mt-[1rem] bg-[#fefefefe] text-center"
                     onClick={handlecancel}
                  >
                     cancel
                  </button>
               </form>
            </main>
            <br />
            <br />
            {/* </div> */}
         </div>
      </div>
      // </div>
   );
};

export default Modal;
