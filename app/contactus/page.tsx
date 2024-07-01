"use client";

import Button from "../component/Button";
import Input from "../component/atoms/Input";
import { useState } from "react";
export default function Contact() {
  const [FormData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
    NewsLetter: "",
  });

  function handleChange(event: any) {
    const { name, value } = event.target;
    setFormData((p) => ({ ...p, [name]: value }));
    console.log(FormData);
  }

  return (
    <section
      className="flex flex-col items-center  mt-5 justify-center w-full   "
      style={{ fontFamily: "Poppins" }}
    >
      {/* Contact Info Section */}
      <h1 className="text-4xl mb-8 max-md:text-center max-md:text-3xl text-yellow-400 max-md:font-semibold font-meduim">
        Contact Information
      </h1>
      <div className="w-full h-1 bg-[#eab308]"></div>
      <div className="flex flex-col lg:flex-row text-white w-full items-center justify-center gap-6 lg:gap-24 p-6">
        {/* Email and Phone */}
        <div className="flex flex-col items-start justify-center  max-md:w-auto  h-[200px] w-[800px] lg:w-auto bg-white text-black p-10 rounded border-2 border-gray-400 shadow-lg">
          <p className="flex items-center mb-4">
            <span className="font-bold mr-2">Email:</span> Jobmingle@info.com
          </p>
          <p className="flex items-center">
            <span className="font-bold mr-2">Phone:</span> 12345709876543
          </p>
        </div>

        {/* Contact Form */}
        <div className="flex  text-black  font-bold flex-col max-md:w-[300px] w-[760px] lg:w-auto bg-white p-6 rounded border-2 border-gray-400 shadow-lg">
          <label htmlFor="Name"> Name</label>
          <Input
            type="text"
            name="Name"
            placeholder="Name"
            value={FormData.Name}
            onchange={handleChange}
            className="w-full text-[#A09999] max-md:h-[50px]  max-md:font-normal bg-[#D2CFCF] md:w-[500.2px] h-[78px] p-2 border rounded  border-opacity-0 mb-4    "
          />
          <label htmlFor="email"> Email</label>
          <Input
            type="email"
            name="Email"
            placeholder="Email"
            value={FormData.Email}
            onchange={handleChange}
            className="w-full text-[#A09999]  max-md:h-[50px]  max-md:font-normal bg-[#D2CFCF] md:w-[500.2px] h-[78px] p-2 border rounded  border-opacity-0 mb-4    "
          />
          <label htmlFor="message">message</label>
          <Input
            placeholder="Message/Comment"
            type="text"
            name="Message"
            value={FormData.Message}
            onchange={handleChange}
            className="w-full text- #A09999] max-md:h-[50px]  max-md:font-normal bg-[#D2CFCF] md:w-[500.2px] h-[78px] p-2 border rounded  border-opacity-0 mb-4    "
          />
          <Button className="w-full bg-yellow-400 text-white py-2 rounded-[10px] hover:bg-yellow-500">
            Send Message Now
          </Button>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="mt-8 text-center max-md:w-[85%]">
        <h2 className="text-2xl font-bold mb-4">Join Our Newsletter</h2>
        <p className="mb-4 max-md:text-1xl ">
          Never miss out on our updates, freebies and news
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-5">
          <Input
            type="text"
            name="NewsLetter"
            value={FormData.NewsLetter}
            placeholder="Email"
            onchange={handleChange}
            className="w-full text-[#A09999]  bg-[#D2CFCF] md:w-[500.2px] p-5 border rounded  border-opacity-0     "
          />
          <Button className="bg-yellow-400 font-semibold flex justify-center items-center text-white py-2 px-4 rounded   h-[60px] w-[300px] max-md:w-[70%] hover:bg-yellow-500">
            Subscribe Now
          </Button>
        </div>
      </div>
    </section>
  );
}
