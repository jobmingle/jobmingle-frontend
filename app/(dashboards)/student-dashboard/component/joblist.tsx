import React from 'react'
import { courses } from '@/lib/_exportLinks';
import Header from "@/public/course image.png";
import share from "@/public/Icon.png";
import love from "@/public/Heart.png";
import tired from "@/public/discord.png";
import Image from "next/image";
const jobs = [
  {
    id: 1,
    icon: tired,
    platform: "Upwork",
    jobTitle: "Virtual Assitance",
    location: "Remote",
    pricerange: "$15-$25",
  },
  {
    id: 2,
    icon: tired,
    platform: "figma",
    jobTitle: "Virtual Assitance",
    location: "Remote",
    pricerange: "$40-$85",
  },
  {
    id: 3,
    icon: tired,
    platform: "Discord",
    jobTitle: "moderator",
    location: "Uyo Nigeria",
    pricerange: "$15-$25",
  },
  {
    id: 4,
    icon: tired,
    platform: "Upwork",
    jobTitle: "Virtual Assitance",
    location: "Remote",
    pricerange: "$15-$25",
  },
  {
    id: 5,
    icon: tired,
    platform: "Upwork",
    jobTitle: "Virtual Assitance",
    location: "Remote",
    pricerange: "$15-$25",
  },
  {
    id: 6,
    icon: tired,
    platform: "figma",
    jobTitle: "Virtual Assitance",
    location: "Remote",
    pricerange: "$40-$85",
  },
  {
    id: 7,
    icon: tired,
    platform: "Discord",
    jobTitle: "moderator",
    location: "Rivers state",
    pricerange: "$15-$25",
  },
  {
    id: 8,
    icon: tired,
    platform: "Upwork",
    jobTitle: "Virtual Assitance",
    location: "Lagos Nigeria",
    pricerange: "$15-$25",
  },
  {
    id: 9,
    icon: tired,
    platform: "Upwork",
    jobTitle: "Virtual Assitance",
    location: "Remote",
    pricerange: "$15-$25",
  },
  {
    id: 10,
    icon: tired,
    platform: "figma",
    jobTitle: "Virtual Assitance",
    location: "Remote",
    pricerange: "$40-$85",
  },
  {
    id: 11,
    icon: tired,
    platform: "Discord",
    jobTitle: "moderator",
    location: "Rivers state",
    pricerange: "$15-$25",
  },
  {
    id: 12,
    icon: tired,
    platform: "Upwork",
    jobTitle: "Virtual Assitance",
    location: "Lagos Nigeria",
    pricerange: "$15-$25",
  },
];
const Joblist = () => {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  mt-4 gap-4 ">
      {jobs.map((job) => (
        <div key={job.id} className="border p-2 rounded-md">
          <section className=" flex flex-row gap-2 items-center">
            <Image src={job.icon} alt="company-icon" className="w-8 h-7" />{" "}
            <p className="text-sm font-semibold capitalize">{job.platform}</p>
          </section>
          <p className=" font-semibold text-md montserrat capitalize">
            {job.jobTitle}
          </p>
          <p className=" text-xs sm:text-[85%] montserrat capitalize">
            {job.location}
          </p>
          <p className=" border-b-[2px] border-solid border-x-black-100 text-xl sm:text-[120%] montserrat capitalize text-[#f5cb1a] font-semibold tracking-wide">
            {job.pricerange}
          </p>
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
  );
}

export default Joblist