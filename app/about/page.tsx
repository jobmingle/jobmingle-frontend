import Image from "next/image";
import LaptopPic from "@/public/jobSearch.jpg";
import LaptopPicTwo from "@/public/woman-looking-through-magnifying-glass.jpg";
import LaptopPicThree from "@/public/jobSearch.jpg";
import LaptopPicFour from "@/public/woman-looking-through-magnifying-glass.jpg";
import Button from "../component/Button";
const AboutSection = () => {
  return (
    //   id="about-us" // Add id here
    <section
      id="about"
      className=" section mt-[2rem] max-md:mb-[80%] flex items-center justify-center flex-col"
    >
      <div className="w-full  h-full flex   flex-row justify-around items-start mt-[100px] max-md:mt-[20px] p-[5rem]  max-md:p-[1rem]  max-md:flex-col max-md:justify-center max-md:items-center">
        <div
          className=" w-[70%] max-md:w-full text-start  flex justify-start flex-col mt-[5rem] max-md:ml-[20px] max-md:mt-[1rem]"
          data-aos="zoom-in"
        >
          <div
            className="text-[56.5px]    max-md:text-[30px] font-extrabold text-black  "
            style={{ fontFamily: "Raleway" }}
          >
            Why Choose Us?
          </div>
          <p className="w-[90%] max-md:w-auto text-[#4f4f53] font-[50px]  font-sans leading-normal  max-md:text-[15.5px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, minus
            dicta quaerat reiciendis nisi totam neque ut. Corrupti quo, hic
            molestias vero ad maiores aliquam voluptatem culpa perferendis
            eveniet nostrum. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Tenetur nulla, dolorum nostrum earum facere dolore praesentium
            temporibus vero eligendi. Iste adipisci fugiat odio neque quia
            dolore sapiente delectus commodi iusto?
          </p>
          <div className="justify-start items-start inline-flex">
            <Button className="mt-6 max-md:mt-[2] mb-5 border-white border-solid bg-[#f5cb1a]">
              Learn More
            </Button>
          </div>
        </div>

        <div className="flex w-[80%] h-full gap-[1rem] mt-6  max-md:gap-[1rem] max-md:mt-[20%]">
          <div className="flex flex-col gap-y-6">
            <Image
              src={LaptopPic}
              data-aos="zoom-in"
              alt="ImageOne"
              className="h-[200px]  rounded-2xl object-cover img1"
            />

            <Image
              className="h-[200px]  rounded-2xl object-cover img2"
              src={LaptopPicTwo}
              data-aos="zoom-in"
              alt="imagetwo"
            />
          </div>

          <div className="flex flex-col gap-y-6 mt-[-10%]">
            <Image
              className="h-[200px]  rounded-2xl object-cover img3"
              src={LaptopPicThree}
              data-aos="zoom-in"
              alt="imagethree"
            />
            <Image
              className="h-[200px]  rounded-2xl object-cover img4"
              src={LaptopPicFour}
              data-aos="zoom-in"
              alt="imagefour"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
