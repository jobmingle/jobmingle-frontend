// components/Navbar.js
"use client";
import Link from "next/link";
import { useState } from "react";
import Button from "../Button";
const AppHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className=" bg-[#000000] text-white flex justify-around  md:shrink-0  max-md:contents">
      <div className="w-[100vw] h-20 border-b-[0.5px] border-b-[#9a8888] bg-[#000000] flex items-center justify-around">
        <div className="flex  items-center ">
          <img
            src="https://www.jobmingle.co/_next/image?url=%2FVector.webp&w=256&q=75"
            alt="jobmingle"
            srcSet=""
            width={50}
            height={50}
          />
          <div className="font-sans text-[1.625rem] ml-2 font-medium leading-[1.4375rem] hover:text-[#FFBE0B]">
            <Link href="/"> Jobmingle </Link>
          </div>
        </div>

        <div className="inline-flex items-start gap-10  max-md:hidden">
          <div className="text-lg font-medium leading-6 hover:text-[#FFBE0B]">
            <Link href="/about">About us</Link>
          </div>
          <div className="text-lg font-medium leading-6 hover:text-[#FFBE0B]">
            <Link href="/training">Training</Link>
          </div>
          <div className="text-lg font-medium leading-6 hover:text-[#FFBE0B]">
            <Link href="/blockchain">Blockchain</Link>
          </div>
          <div className="text-lg font-medium leading-6 hover:text-[#FFBE0B]">
            <Link href="/blog">Blog</Link>
          </div>
        </div>
        <div className="inline-flex items-start mr-6  max-md:hidden">
          <Button className="w-[200px] border-white border-solid bg-[#f1eb15]">
            Contact Us
          </Button>
        </div>
        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="[#d9d9e8] focus:outline-none">
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="36"
                fill="currentColor"
                className="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>
            ) : (
              <svg
                width={30}
                height={30}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG for hamburger icon */}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6C4 5.44772 4.44772 5 5 5H25C25.5523 5 26 5.44772 26 6C26 6.55228 25.5523 7 25 7H5C4.44772 7 4 6.55228 4 6ZM4 12C4 11.4477 4.44772 11 5 11H25C25.5523 11 26 11.4477 26 12C26 12.5523 25.5523 13 25 13H5C4.44772 13 4 12.5523 4 12ZM5 17C4.44772 17 4 17.4477 4 18C4 18.5523 4.44772 19 5 19H25C25.5523 19 26 18.5523 26 18C26 17.4477 25.5523 17 25 17H5Z"
                  fill="white"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className={` bg-black md:hidden max-md:absolute max-md:h-[100%] max-md:w-[100%] max-md:z-[30] max-md:justify-center max-md:gap-[50px] text-[#d9d9e8] flex flex-col items-center transition-all duration-500 ${
            menuOpen
              ? "clip-path-[polygon(0 0, 100% 0, 100% 100%, 0 80%)]"
              : "clip-path-[polygon(0 0, 100% 0, 100% 100%, 0 0)]"
          }`}
        >
          <div className="text-lg font-medium leading-6 my-4">
            <Link href="/about">About us</Link>
          </div>
          <div className="text-lg font-medium leading-6 my-4">
            <Link href="/training">Training</Link>
          </div>
          <div className="text-lg font-medium leading-6 my-4">
            <Link href="/blockchain">Blockchain</Link>
          </div>
          <div className="text-lg font-medium leading-6 my-4">
            <Link href="/blog">Blog</Link>
          </div>
          <div className="inline-flex items-start mr-6  ">
            <Button className="w-[200px] bg-[#f1eb15]  text-black border-solid  border-10 border-white">
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default AppHeader;
