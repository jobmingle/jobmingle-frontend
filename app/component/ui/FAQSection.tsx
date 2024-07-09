// components/FAQSection.js
"use client";
import { useState } from "react";
import Image from "next/image";
import LaptopPic from "@/public/jobSearch.jpg";

// Declaring type for FAQ items
type FAQItemType = {
  question: string;
  answer: string;
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex justify-around items-center max-w-screen-xl mt-20 mx-auto px-5 bg-white min-h-screen">
      <div className="relative group">
        <Image
          src={LaptopPic}
          alt="ImageOne"
          className="max-md:hidden w-[500px] h-[500px] shadow rounded-2xl object-cover img1"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
          <p className="text-white text-center px-4 text-2xl">
            Find the best remote jobs available on JobMingle
          </p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-5xl mt-5 tracking-tight">FAQ</h2>
          <p className="text-neutral-500 text-xl mt-3">
            Frequently asked questions
          </p>
        </div>
        <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              index={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
//component

type FAQItemProps = {
  index: number;
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: (index: number) => void;
};

const FAQItem = ({
  index,
  question,
  answer,
  isOpen,
  onToggle,
}: FAQItemProps) => {
  return (
    <div className="py-5">
      <div
        className={`group ${isOpen ? "open" : ""}`}
        onClick={() => onToggle(index)}
      >
        <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
          <span>{question}</span>
          <span className="transition group-open:rotate-180">
            <svg
              fill="none"
              height="24"
              shapeRendering="geometricPrecision"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="24"
            >
              <path d="M6 9l6 6 6-6"></path>
            </svg>
          </span>
        </summary>
        {/* if it opens close else opene it  */}
        {isOpen && (
          <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
            {answer}
          </p>
        )}
      </div>
    </div>
  );
};

const faqItems: FAQItemType[] = [
  {
    question: "What is JobMingle?",
    answer:
      "JobMingle is an innovative ed-tech platform and remote job recruitment website. We empower individuals seeking to transition to a new career by equipping them with the right skills and providing access to numerous remote job opportunities across the country. We assist employers in finding the remote talent they desire to grow their company and connect job seekers to the jobs they need to succeed.",
  },
  {
    question: "Do I need a laptop before I can visit Jobmingle.co?",
    answer:
      "No! You can access Jobmingle.co on all smart devices. As long as your phone can browse, you are good to go.",
  },
  {
    question: "Is there a mobile app available for JobMingle?",
    answer:
      "No. But we are currently working on it. We will notify you when it is available for download on the Play Store and Apple Store.",
  },
  {
    question: "What kind of courses are available on JobMingle?",
    answer:
      "We offer a wide range of courses across multiple industries. Which means we are not specific to a particular industry.",
  },
  {
    question: "Is it only remote jobs that are listed on JobMingle?",
    answer:
      "Yes. However, we also list hybrid jobs that require you to go to work a few times a week.",
  },
  {
    question: "Can I advertise with JobMingle?",
    answer:
      "Yes, you can. To advertise your brand, please send an email to contact@jobmingle.co to learn more about our advertising rates.",
  },
];

export default FAQSection;
