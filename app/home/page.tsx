"use client";
import Image from "next/image";
import image from "@/public/woman-looking-through-magnifying-glass.jpg";
import Button from "../component/Button";
const Hero = () => {
  return (
    <div  id='home' className="relative h-screen">
      <Image
        src={image}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative flex items-center justify-center flex-col h-full">
        <div
          className="flex w-full  items-center justify-center flex-col"
          data-aos="zoom-in"
          style={{ fontFamily: "Poppins" }}
        >
          <div className="w-full  max-sm:text-[33px] text-center text-[3rem] font-bold font-sans max-md:text-[2rem] max-md:leading-normal text-white">
            Your
            <span className="text-[#f5cb1a] font-extrabold">
              {" "}
              Dream Remote Job
            </span>{" "}
            <br />
            Awaits - Lets Us Skill You Up and Guide You there
          </div>
        </div>
        <div
          className="font-sans w-[645px] font-revert text-white text-center mb-3 mt-5 text-lg font-medium max-md:w-[300px]"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          Join the exclusive set of individuals who are now learning a
          high-income skill to make their dream remote job a reality
        </div>
        <div
          className="flex justify-around items-start my-6"
          data-aos="zoom-in"
          data-aos-duration="1200"
          data-aos-delay="700"
          id="animationbutton"
        >
          <Button className="w-[200px] max-sm:w-[150px] bg-black text-white rounded-[10px] mr-[30px] hover:text-black hover:bg-yellow-500">
            SignUp
          </Button>
          <Button className="w-[200px] max-sm:w-[150px] bg-white border-2 border-yellow-500 text-black rounded-[10px] hover:text-black hover:bg-yellow-500">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
