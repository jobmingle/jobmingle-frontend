"use client";

import Image from "next/image";
import AboutImage from "@/public/Pexels Photo by Christina Morillo.svg";
import Head from "next/head";
import "@/app/globals.css";
import SlideImage from "@/public/Pexels Photo by Christina Morillo.svg";
import Carousel from "../component/ui/Carousel";

type Props = {
  title: String;
  description: string;
  aos: string;
  aostimer: string;
};

const slides = [
  {
    imagesone: SlideImage,
    headerText: "The Journey To Your New Career Begins Now!",
  },
  {
    imagesone: SlideImage,
    headerText:
      "Your Dream Remote Job Awaits- Let Us Skill You Up And Guide You There",
  },
];

function CoreValueCard({ title, description, aos, aostimer }: Props) {
  return (
    <div
      data-aos={aos}
      data-aos-duration={aostimer}
      className="shadow-lg max-md:mt-3 z-10 flex-shrink-0 w-[330px] text-slate-400 h-[320px] hover:text-[#27272a] rounded-2xl border-2 border-blue-100 pl-5 pt-2 transition duration-500 hover:bg-[#f5cb1a] hover:shadow-lg max-md:w-[300px] max-md:h-[350px] max-md:hover:ml-[5px] max-md:p-[9px] group border-animate"
    >
      <div className=" relative z-20 flex-shrink-0 w-12 h-12 rounded-full bg-white/[.10] flex items-center justify-center my-5">
        <svg
          width={20}
          height={32}
          viewBox="0 0 20 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SVG Path Here */}
        </svg>
      </div>
      <div className="font-bold text-[16px] leading-loose mb-3 text-[black]">
        {title}
      </div>
      <div className="font-medium font-sans leading-normal mr-5">
        {description}
      </div>
    </div>
  );
}

function AboutUs() {
  return (
    <div className="flex flex-col items-center mt-[72px] justify-center">
      <Head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
        <meta name="google-adsense-account" content="ca-pub-9738664936744628" />
      </Head>

      <div className="check relative z-20 w-full text-center max-md:w-[287px]">
        <span
          data-aos="fade-left"
          className="text-5xl max-md:text-1xl font-extrabold max-md:font-bold leading-[82px] max-md:leading-[24px] max-md:text-[29px]"
        >
          Jobmingle
        </span>
        <span
          data-aos="fade-right"
          className="text-yellow-400 ml-8 max-md:ml-1 text-5xl max-md:text-2xl font-extrabold leading-10 max-md:text-[32px]"
        >
          overview
        </span>
        <Carousel autoSlide={true}>
          {slides.map((s, index) => (
            <div key={index} className="relative w-full flex-shrink-0">
              <Image
                src={s.imagesone}
                className="w-full h-auto object-cover"
                alt={`Slide ${index}`}
                width={1000}
                height={500}
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-white text-4xl font-bold">
                  {s.headerText}
                </h2>
              </div>
            </div>
          ))}
        </Carousel>
        <div className="z-10 w-96 h-96 opacity-80 bg-[#f5cb1a] rounded-full blur-[190px] absolute top-[150%] max-md:hidden" />
      </div>

      <h3 className="mt-[5%] text-5xl font-bold max-md:text-4xl max-md:text-left">
        Our Core Values
      </h3>

      <div className=" h-full my-[5%]  max-md:h-fit max-md:mt-[10px]">
        <div className="flex flex-wrap items-center justify-center mt-8 gap-8">
          <CoreValueCard
            title="MISSION"
            aos="zoom-in"
            aostimer="3000"
            description="To Be The Most Preferred Edtech & Remote Jobs Company Where Employers Can Easily Find
The Talent They Desire, And Jobseekers Can Effortlessly Find The Jobs They Need."
          />
          <CoreValueCard
            title="VISION"
            aos="zoom-in"
            aostimer="5000"
            description="To Empower Individuals And Jobseekers With The Tools They Need To Transition To New,
High-income Careers Through Comprehensive Digital Skills Training And Strategic Connections
To Remote Opportunities."
          />
          <CoreValueCard
            title="VALUES"
            aos="zoom-in"
            aostimer="6000"
            description="Being problem solvers is integral to our identity. Therefore, our core values are Teamwork,
Innovation, Competency, and Community."
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
