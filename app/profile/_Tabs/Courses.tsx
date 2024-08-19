import React from "react";
import tiredicon from "../../../public/tiredicon.png";
import love from "../../../public/loveicon.png";
import share from "../../../public/shareicon.png";
import courseplaceholder from "../../../public/courseplaceholder.png";
import Image from "next/image";

//
const courses = [
   {
      id: 1,
      icon: courseplaceholder,
      des: "course description in few words course description in few words",
      coursetitle: "Virtual Assitance",
      category: "UI/UX for beginers",
      pricerange: "$15-$25",
   },
   {
      id: 2,
      icon: courseplaceholder,
      des: "course description in few words course description in few words",
      coursetitle: "Email Marketing",
      category: "Remote",
      pricerange: "$40-$85",
   },
   {
      id: 3,
      icon: courseplaceholder,
      des: "course description in few words course description in few words",
      coursetitle: "Introduction to SEO",
      category: "Design",
      pricerange: "$15-$25",
   },
   {
      id: 4,
      icon: courseplaceholder,
      des: "course description in few words course description in few words",
      coursetitle: "Introduction to backend Dev.",
      category: "Marketing",
      pricerange: "$15-$25",
   },
   {
      id: 5,
      icon: courseplaceholder,
      des: "course description in few words course description in few words",
      coursetitle: "Virtual Assitance course",
      category: "Design",
      pricerange: "$15-$25",
   },
   {
      id: 6,
      icon: courseplaceholder,
      des: "course description in few words course description in few words",
      coursetitle: "Project Management tutorial",
      category: "Cyber security",
      pricerange: "$40-$85",
   },
   {
      id: 7,
      icon: courseplaceholder,
      des: "course description in few words course description in few words",
      coursetitle: "UI/UX for beginers",
      category: "Design",
      pricerange: "$15-$25",
   },
   {
      id: 8,
      icon: courseplaceholder,
      des: "course description in few words course description in few words",
      coursetitle: "introduction to Web. Dev.",
      category: "Development",
      pricerange: "$15-$25",
   },
   {
      id: 9,
      icon: courseplaceholder,
      des: "course description in few words course description in few words",
      coursetitle: "Virtual Assitance crash course",
      category: "Marketing",
      pricerange: "$15-$25",
   },
   {
      id: 10,
      icon: courseplaceholder,
      des: "course description in few words course description in few words",
      coursetitle: "Email Marketing",
      category: "Design",
      pricerange: "$40-$85",
   },
   {
      id: 11,
      icon: courseplaceholder,
      des: "course description in few words course description in few words",
      coursetitle: "UI/UX Design crash course",
      category: "development",
      pricerange: "$15-$25",
   },
   {
      id: 12,
      icon: courseplaceholder,
      des: "course description in few words course description in few words",
      coursetitle: "Email Marketing",
      category: "Design",
      pricerange: "$15-$25",
   },
];
const Courses = () => {
   let Courses = 1;

   return (
      <div>
         {Courses >= 1 ? (
            <main className=" w-full h-auto min-h-[35vh] md:min-h-[50vh] p-2 lg:p-4">
               <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 ">
                  {courses.map((course) => (
                     <div key={course.id} className="border p-2 md:p-3 rounded-md">
                        <section className="items-center">
                           <Image src={course.icon} alt="company-icon" className="w-full h-[8rem] md:h-[9rem] lg:h-[9.7rem]" />
                        </section>
                        <p className=" text-xs sm:text-[85%] montserrat capitalize text-[#f5cb1a] py-0.5 font-semibold">{course.category}</p>
                        <p className=" font-semibold sm:font-bold text-[90%] montserrat capitalize  ">{course.coursetitle}</p>
                        <p className=" text-xs sm:text-[80%] md:text-[85%] sora  text-gray-500 pb-2 tracking-wide">{course.des}</p>
                        <section className="flex flex-row justify-between">
                           <div className="flex flex-row items-center gap-1">
                              <Image src={tiredicon} alt="tiredicon" className="w-7 h-7" />
                              <div className="flex flex-col">
                                 <p className="sora text-xs font-bold capitalize text-blue-900">prosper</p>
                                 <p className="sora text-[65%] font-semibold">15 Lessons</p>
                              </div>
                           </div>
                           <p className="text-[#f5cb1a] capitalize text-sm montserrat font-bold">Enrolled</p>
                        </section>
                        <section className="border-b-[2px] border-solid border-x-black-100 py-1">
                           <button className="border w-full bg-[#113DAE] rounded-md text-white py-1.5 capitalize">resume course</button>
                        </section>
                        <section className="flex flex-row justify-between m-1 py-1 ">
                           <button className="w-6 h-6">
                              <Image src={love} alt="loveicon" />
                           </button>
                           <button className="w-6 h-6">
                              <Image src={share} alt="shareicon" />
                           </button>
                        </section>
                     </div>
                  ))}
               </section>
               <br />
            </main>
         ) : (
            <main className=" w-full h-auto min-h-[35vh] md:min-h-[50vh] border-solid mt-10 p-2">
               <section className="flex flex-col justify-center items-center py-4">
                  <Image src={tiredicon} alt="tiredicon" className="w-24 h-24 md:w-28 md:h-28 m-auto" />
                  <p className="sora capitalize pt-2 ">you have not paid for any course yet!</p>
                  <p className="sora capitalize text-md text-[#f5cb1a] underline">click here to see courses now!</p>
               </section>
               <br />
            </main>
         )}
      </div>
   );
};

export default Courses;
