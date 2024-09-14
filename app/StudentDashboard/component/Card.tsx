"use client";
import React from "react";
import Image from "next/image";
import Header from "@/public/course image.png";
import Share from "@/public/Icon.png";

const Card = ({ course }: any) => {
  return (
    <div className="border border-gray-300 p-4 rounded-lg shadow-sm max-w-xs">
      <div className="relative">
        <Image
          src={Header}
          alt={course.title}
          className="w-full h-32 object-cover rounded-lg"
        />
        <div className="absolute top-2 left-2 bg-white text-yellow-400 px-2 py-1 text-xs rounded-md font-bold">
          4.2 ★
        </div>
      </div>
      <div className="p-2 text-left">
        <p className="text-yellow-500 text-xs">Design</p>
        <h3 className="text-lg font-semibold">{course.title}</h3>
        <h4 className="text-gray-700 text-sm">
          Using Figma to design beautiful user interface designs and great user
          experience
        </h4>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            <div className="relative w-10 h-10 rounded-full overflow-hidden">
              <Image
                src={Header}
                alt="Profile"
                className="object-cover w-[50%] h-[50%]"
              />
            </div>
            <div className="ml-3">
              <p className="text-sm text-gray-600">{course.instructor}</p>
              <p className="text-xs text-gray-400">100 Enrolled</p>
            </div>
          </div>
          <p className="text-md font-bold text-yellow-400">{course.price}</p>
        </div>

        <div className="flex justify-between mt-3">
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
            className="object-cover h-5 w-5 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
