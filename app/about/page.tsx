import Image from "next/image";
import LaptopPic from "@/public/jobSearch.jpg";
import LaptopPicTwo from "@/public/african-american-business-woman-holding-laptop-standing-by-window.png";
import LaptopPicThree from "@/public/Pexels Photo by Christina Morillo.svg";
import LaptopPicFour from "@/public/christina.png";
import Button from "../component/atoms/Button";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-[#f8f9fa] mt-[2rem] flex items-center justify-center flex-col"
    >
      <div className="w-full h-full flex flex-row justify-around items-start mt-[100px] max-md:mt-[20px] p-[5rem] max-md:p-[1rem] max-md:flex-col max-md:justify-center max-md:items-center">
        <div
          className="w-[70%] max-md:w-full text-start flex justify-start flex-col mt-[5rem] max-md:ml-[20px] max-md:mt-[1rem]"
          data-aos="zoom-in"
        >
          <div
            className="text-[56.5px] max-md:text-[30px] font-extrabold text-black"
            style={{ fontFamily: "Raleway" }}
          >
            ABOUT US
          </div>
          <p className="w-[90%] max-md:w-auto text-[#4f4f53] font-[50px] font-sans leading-normal max-md:text-[15.5px]">
            JobMingle is an ed-tech and remote job recruitment website that
            empowers individuals seeking to transition to a new career with
            high-income skills and provides access to numerous remote job
            opportunities across the country. Incorporated on July 25th, 2023,
            and launched in March, 2024, JobMingle aims to assist those who are
            tired of the traditional 9-5 jobs and are looking for ways to earn
            money online, working from home doing the things they love. We are
            committed to building the best ed-tech and remote job recruitment
            company in Nigeria for job applicants, employers, and course
            creators. JobMingle is leveraging technology to address the 'skills
            acquisition gap' and meet human resources needs in the remote
            industry in Nigeria. Join us as we turn this dream into a reality!
          </p>
          <div className="justify-start items-start inline-flex">
            <Button className="mt-6 shadow-lg max-md:mt-[2] mb-5 border-white border-solid bg-[#f5cb1a]">
              Learn More
            </Button>
          </div>
        </div>

        <div className="flex w-[80%] h-full gap-[1rem] mt-6 max-md:gap-[1rem] max-md:mt-[20%]">
          <div className="flex flex-col gap-y-6">
            <div className="relative group">
              <Image
                src={LaptopPic}
                data-aos="fade-down-right"
                alt="ImageOne"
                className="h-[200px] shadow-lg rounded-2xl object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                <p className="text-white text-center px-4">
                  Meet human resources needs
                </p>
              </div>
            </div>

            <div className="relative group">
              <Image
                className="h-[200px] shadow-lg rounded-2xl object-cover"
                src={LaptopPicTwo}
                data-aos="fade-down-left"
                alt="imagetwo"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                <p className="text-white text-center px-4">earn money online</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-y-6 mt-[-10%]">
            <div className="relative group">
              <Image
                className="h-[200px] shadow-lg rounded-2xl object-cover"
                src={LaptopPicThree}
                data-aos="fade-up-right"
                alt="imagethree"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                <p className="text-white text-center px-4">
                  High-income skills{" "}
                </p>
              </div>
            </div>
            <div className="relative group">
              <Image
                className="h-[200px] shadow-lg rounded-2xl object-cover"
                src={LaptopPicFour}
                data-aos="fade-up-left"
                alt="imagefour"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
                <p className="text-white text-center px-4">
                  dream into a reality{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
