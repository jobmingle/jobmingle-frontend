import Image from "next/image";
import FaceBook from "@/public/svg-icons/facebook.svg";
import Instagram from "@/public/svg-icons/instagram.svg";
import LinkedIn from "@/public/svg-icons/linkedin.svg";
import Twitter from "@/public/svg-icons/twitter.svg";
import Contact from "@/public/svg-icons/call-us.svg";
import Location from "@/public/svg-icons/location.svg";
import Mail from "@/public/svg-icons/email.svg";
import Button from "../Button";

const AppFooter = () => {
  return (
    <footer id="footer" className=" z-20  max-md:flex-col px-12 py-5  bg-black   max-md:pl-[0px]   mt-9  text-[#d9d9e8] justify-center items-center  flex">
      {/* Column 1 */}
      <div className="w-full   flex items-start justify-start  flex-col sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4">
        <div className="flex items-center justify-center">
          <div className="w-[45.41px] h-[23.49px] relative">
            <img
              src="https://www.jobmingle.co/_next/image?url=%2FVector.webp&w=256&q=75"
              alt="JobMingle-Logo"
              className="w-full h-full object-cover"
            />
          </div>{" "}
          <div className="[#d9d9e8] text-[26.10px] font-medium font-['Raleway'] leading-normal">
            JobMingle
          </div>
        </div>
        <ul>
          <li>
            <div className="[#d9d9e8]  mt-5 text-base font-medium font-['DM Sans'] leading-normal">
              Follow us on
            </div>
          </li>
          <li>
            <div className=" flex gap-2 mt-5" id="social-icons">
              <div className="w-6 h-6 relative">
                <Image
                  src={FaceBook}
                  alt="facebook-logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-6 h-6 relative">
                <Image
                  src={Instagram}
                  alt="Instagram"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-6 h-6 relative">
                <Image
                  src={LinkedIn}
                  alt="LinkedIn-Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-6 h-6 relative">
                <Image
                  src={Twitter}
                  alt="twitter-logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </li>
          {/* Add more links as needed */}
        </ul>
      </div>

      {/* Column 2 */}
      <div className="w-full  sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4">
        <div className="flex mt-5 ">
          <div className="[#d9d9e8]   text-lg font-medium font-['DM Sans'] leading-normal">
            Contact Us
          </div>
        </div>
        <ul>
          <li>
            <div className="flex mt-3 ">
              <div className="w-6 h-6 relative">
                <Image
                  src={Mail}
                  alt="mail-com"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="[#d9d9e8] text-base ml-2  font-medium font-['DM Sans'] leading-normal">
                Info@JobMingle.com
              </div>
            </div>
          </li>
          <li>
            <div className="flex mt-3 ">
              <div className="w-6 h-6 relative">
                <Image
                  src={Contact}
                  alt="contact-mail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="[#d9d9e8] text-base ml-2  font-medium font-['DM Sans'] leading-normal">
                +2349048744395
              </div>
            </div>
          </li>

          {/* Add more links as needed */}
        </ul>
      </div>

      {/* Column 3 */}
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 px-4 mb-4">
        <div className="flex items-center justify-start">
          <div className="text-2xl font-meduim  ">Get a course Today !</div>
        </div>
        <div className="w-[158px] h-12 justify-start items-start inline-flex mt-2">
          <Button className="w-[200px] bg-[#f5cb1a]  text-black border-solid  border-10 border-white">
            Courses
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
