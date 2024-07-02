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
        className="shadow-lg max-md:mt-3 z-10 flex-shrink-0 w-[350px] text-slate-400 h-[400px] hover:text-[#27272a] rounded-2xl border-2 border-blue-100 pl-5 pt-2 transition duration-500  hover:shadow-lg max-md:w-[300px] max-md:h-[350px] max-md:hover:ml-[5px] max-md:p-[9px] group border-animate"
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
        <div className="flex flex-wrap justify-center items-center mt-8 gap-8">
          <ServiceCard
            title="RE-SKILLING"
            aostime="3000"
            aos="fade-left"
            description="Transitioning to a new career doesn't have to be difficult. All you need is the right kind of training
to acquire the skills necessary for success, and that's precisely what JobMingle offers. We
provide you with access to the right courses and experts that guide you from being a novice to a
pro."
          />
          <ServiceCard
            title="UP-SKILLING"
            aostime="3000"
            aos="fade-up"
            description="To stand out in your niche, you must constantly seek ways to improve your existing skills. For
example, as a Facebook ads expert, it also makes sense to have comprehensive knowledge of
Google advertising. At JobMingle, we offer a wide variety of digital courses that provide you with
opportunities to advance your career with ease."
          />
          <ServiceCard
            title="REMOTE JOB LISTINGS"
            aostime="3000"
            aos="fade-right"
            description="In today's world, acquiring a digital skill is not enough; you must be ready to put it to work. One
of the challenges faced by new freelancers today is the scarcity of remote job opportunities.
That's why at JobMingle, we not only enhance your skills, but we also provide access to
numerous remote job opportunities across the country."
          />
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
