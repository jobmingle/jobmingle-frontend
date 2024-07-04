"use client";
import Image from "next/image";
import image from "@/public/laptopman.png";
import Button from "../component/atoms/Button";

const Hero = () => {
  return (
    <div
      id="home"
      className=" ml-5  max-md:ml-3 flex justify-center items-start p-10 max-md:p-3  md:items-center  mt-[2.5rem] max-md:mt-4 md-justify-center flex-col md:flex-row"
    >
      {/* Left column */}
      <div className="relative   flex items-start  md:justify-center justify-center flex-col h-full">
        <div
          className="flex w-full items-center md:justify-center  justify-start flex-col"
          data-aos="zoom-in"
          style={{ fontFamily: "Ubuntu" }}
        >
          <div className="w-full  text-balance text-[3rem] font-bold font-sans  max-md:text-[1.9rem] max-md:leading-normal text-black">
            Your
            <span className="text-[#f5cb1a] font-extrabold">
              {" "}
              Dream Remote Job
            </span>{" "}
            Awaits - Let Us Skill You Up and Guide You There
            <p>The Journey To Your New Career Begins Now!</p>
          </div>
        </div>

        <div
          className="  text-start  text-balance md:justify-center font-revert text-[#545454] mb-3 mt-5 text-lg font-medium max-md:w-[300px]"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          Join the exclusive set of individuals who are now learning a
          high-income skill to make their dream remote job a reality
        </div>

        <div
          className="flex justify-start items-start  my-6"
          data-aos="zoom-in"
          data-aos-duration="1200"
          data-aos-delay="700"
          id="animationbutton"
        >
          <Button className="w-[300px] max-md:w-[250px] text-[16px] border-white border-solid bg-[#f5cb1a]">
            Get Started
          </Button>
        </div>
      </div>

      {/* Right column */}
      <div className="w-full h-full flex items-center justify-center">
        <img
          src="https://www.netcraft.com/wp-content/uploads/2023/04/home-hero-final-5.png"
          alt="Background"
          data-aos="zoom-in"
          style={{ objectFit: "cover" }}
          className=" max-md:w-[400px] max-md:h-[300px]"
        />
      </div>
    </div>
  );
};

export default Hero;
