// components/Card.js
"use client";
import React from "react";
import Header from "@/public/course image.png";
import Share from "@/public/Icon.png";
import Image from "next/image";

const Card = ({ course }: any) => {
  return (
    <div className="border border-gray-300 p-4 rounded-lg shadow-sm w-full h-[100%] max-w-xs">
      <Image
        src={Header}
        alt={course.title}
        className="w-full h-32 object-cover rounded-t-lg"
      />
      <div className="p-2">
        <p className="text-yellow-500 text-xs">Design</p>
        <h3 className="text-lg font-semibold">{course.title}</h3>
        <h4 className="text-gray-700 text-sm">
          Using Figma to design beautiful user interface designs and great user
          experience
        </h4>

        <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
          <div className="flex items-center space-x-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src={Header}
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <div className="flex justify-between gap-10 ">
                <p className="text-sm text-gray-600">{course.instructor}</p>
                <p className="text-md font-bold">{course.price}</p>
              </div>
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

export default Card;
