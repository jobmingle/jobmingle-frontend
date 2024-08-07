import React from 'react'
import { courses } from '@/lib/_exportLinks';
import Header from "@/public/course image.png";
import Share from "@/public/Icon.png";
import Facebook from "@/public/discord.png";

import Image from "next/image";
const Card = ({ course }: any) => {
  return (
    <div className="border border-gray-300 p-4 rounded-lg shadow-sm w-[300px] h-fit max-w-xs">
      <div className="flex items-center ml-2">
        {" "}
        <Image
          src={Facebook}
          alt={course.title}
          className="w-[10%] h-[10%] object-cover rounded-t-lg"
        />
        <h3 className="text-lg ml-5 text-black">figma</h3>
      </div>
      <div className="p-2">
        <h3 className="text-lg font-semibold">{course.title}</h3>
        <h4 className="text-gray-700 text-sm">figma</h4>
        <p className="text-md font-bold text-yellow-400">{course.price}</p>

        <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
          <div className="flex items-center space-x-4">
            <div className="relative w-12 h-8 rounded-full ">
              <div className="flex flex-row gap-[7.5rem] w-full mt-2 ">
                <button className="text-gray-400 hover:text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </button>
                <Image
                  src={Share}
                  alt="Share"
                  className="object-cover h-5 w-5"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Joblist = () => {
  return (
    <div>
      <div>
        <h2 className="mt-6 text-xl">Job List</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[55px]">
          {courses.map((course, index) => (
            <Card key={index} course={course} />
          ))}
        </div>
        <a href="#" className="text-right block mt-4 text-blue-500">
          View All
        </a>
      </div>
    </div>
  );
}

export default Joblist