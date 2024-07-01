"use client";

import Image from "next/image";
import AboutImage from "@/public/Pexels Photo by Christina Morillo.svg";
import Head from "next/head";
import "@/app/globals.css";
import bg from "@/public/hello.png";

type Props = {
  title: String;
  description: string;
  aos: string;
  aostimer: string;
};
function CoreValueCard({ title, description, aos, aostimer }: Props) {
  return (
    <div
      data-aos={aos}
      data-aos-duration={aostimer}
      className="shadow-lg max-md:mt-3 z-10 flex-shrink-0 w-[330px] text-slate-400 h-[300px] hover:text-[#27272a] rounded-2xl border-2 border-blue-100 pl-5 pt-2 transition duration-500 hover:bg-[#f5cb1a] hover:shadow-lg max-md:w-[300px] max-md:h-[350px] max-md:hover:ml-[5px] max-md:p-[9px] group border-animate"
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
    <div
      className="flex flex-col items-center mt-[72px] justify-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
      }}
    >
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
        <Image
          className="w-[1200px] shadow-lg ml-[5%] max-md:ml-[0%] h-auto mt-[20px] max-md:mr-[54px] max-md:h-[322px] max-md:w-[350px] max-md:mt-[21px] object-cover relative rounded-2xl"
          data-aos="zoom-in "
          data-aos-duration="300"
          src={AboutImage}
          alt="blog-page-image"
          width={1000}
          height={500}
        />
        <div className="z-10 w-96 h-96 opacity-80 bg-[#f5cb1a] rounded-full blur-[190px] absolute top-[150%] max-md:hidden" />
      </div>

      <h3 className="mt-[5%] text-5xl font-bold max-md:text-4xl max-md:text-left">
        Our Core Values
      </h3>

      <div className=" h-full my-[5%]  max-md:h-fit max-md:mt-[10px]">
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 mt-8 gap-8">
          <CoreValueCard
            title="MISSION"
            aos="zoom-in"
            aostimer="3000"
            description="We believe that we can achieve more as a team than we ever could individually and are eager to give and receive constructive feedback in order to improve."
          />
          <CoreValueCard
            title="VISION"
            aos="zoom-in"
            aostimer="5000"
            description="Embracing diverse ideas and beliefs without judgment, we foster an open environment where candor and respect guide our interactions."
          />
          <CoreValueCard
            title="VALUES"
            aos="zoom-in"
            aostimer="6000"
            description="We uphold our principles with integrity and transparency, ensuring that every action we take aligns with our ethical standards and commitments."
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
