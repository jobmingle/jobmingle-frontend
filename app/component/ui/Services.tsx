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
  aostime: string;
};
function ServiceCard({ title, description, aos, aostime }: Props) {
  return (
    <div>
      <div
        data-aos={aos}
        data-aos-duration={aostime}
        className="shadow-lg max-md:mt-3 z-10 flex-shrink-0 w-[350px] text-slate-400 h-[350px] hover:text-[#27272a] rounded-2xl border-2 border-blue-100 pl-5 pt-2 transition duration-500  hover:shadow-lg max-md:w-[300px] max-md:h-[350px] max-md:hover:ml-[5px] max-md:p-[9px] group border-animate"
      >
        <div className=" relative z-20 flex-shrink-0 w-12 h-12 rounded-full bg-[#FFBE0B] flex items-center justify-center my-5">
          <p className="text-2xl font-bold  h-5 w-5 text-black">1</p>
        </div>
        <div className="font-bold text-[16px] leading-loose mb-3 text-[black]">
          {title}
        </div>
        <div className="font-medium font-sans leading-normal mr-5">
          {description}
        </div>
      </div>
    </div>
  );
}

function HowItWorks() {
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
      <div
        className="Ellipse1 w-96 h-96 opacity-80 z-10 bg-[#f5cb1a63] rounded-full blur-[190px] absolute left-[70%] bottom-[20%] max-md:hidden"
        data-aos="zoom-in"
      />

      <h3 className="mt-[3%] text-4xl font-bold max-md:text-4xl max-md:text-left">
        Our Services
      </h3>

      <div className=" h-full my-[1%]  max-md:h-fit max-md:mt-[10px]">
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 mt-8 gap-8">
          <ServiceCard
            title="MISSION"
            aostime="3000"
            aos="fade-left"
            description="We believe that we can achieve more as a team than we ever could individually and are eager to give and receive constructive feedback in order to improve."
          />
          <ServiceCard
            title="VISION"
            aostime="3000"
            aos="fade-up"
            description="Embracing diverse ideas and beliefs without judgment, we foster an open environment where candor and respect guide our interactions."
          />
          <ServiceCard
            title="VALUES"
            aostime="3000"
            aos="fade-right"
            description="We uphold our principles with integrity and transparency, ensuring that every action we take aligns with our ethical standards and commitments."
          />
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
