"use client";

import Image from "next/image";
import { useState } from "react";
import Profile from "@/public/profile-image.png";

const ProfileForm = () => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    phoneNumber: "",
    description: "",
    state: "",
  });

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="flex flex-col  w-full items-center max-md:w-full justify-center min-h-screen py-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white flex flex-col items-center justify-center rounded-lg w-full max-w-lg p-8"
        style={{ height: "auto" }}
      >
        <div className="flex flex-col items-center mb-6 ">
          <div className="relative w-24 h-24 mb-4">
            <Image
              src={Profile}
              alt="Profile Image"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <button
            type="button"
            className="text-sm text-blue-500 font-semibold hover:underline"
          >
            CHANGE
          </button>
        </div>

        <div className="space-y-6 w-[800px] max-md:w-[50%]">
          {/* Email Input */}
          <div className="flex flex-col  max-md:w-full">
            <label
              htmlFor="email"
              className="mb-1 text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleInputChange}
              placeholder="Enter Your Email here"
              className="w-full p-3 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              style={{
                border: "1.71px solid #D2CFCF",
                width: "100%",
                height: "85px",
                borderRadius: "12px",
              }}
            />
          </div>

          {/* Name Input */}
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="mb-1 text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleInputChange}
              placeholder="Enter Your Name here"
              className="w-full p-3 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              style={{
                border: "1.71px solid #D2CFCF",
                width: "100%",
                height: "85px",
                borderRadius: "12px",
              }}
            />
          </div>

          {/* Phone Number Input */}
          <div className="flex flex-col">
            <label
              htmlFor="phoneNumber"
              className="mb-1 text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              value={form.phoneNumber}
              onChange={handleInputChange}
              placeholder="Enter Your Phone Number here"
              className="w-full p-3 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              style={{
                border: "1.71px solid #D2CFCF",
                width: "100%",
                height: "85px",
                borderRadius: "12px",
              }}
            />
          </div>

          {/* Description Input (Select) */}
          <div className="flex flex-col">
            <label
              htmlFor="description"
              className="mb-1 text-sm font-medium text-gray-700"
            >
              What Best Describes You?
            </label>
            <select
              name="description"
              id="description"
              value={form.description}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              style={{
                border: "1.71px solid #D2CFCF",
                width: "100%",
                height: "85px",
                borderRadius: "12px",
              }}
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="Job Seeker">Job Seeker</option>
              <option value="Employer">Employer</option>
            </select>
          </div>

          {/* State Input (Select) */}
          <div className="flex flex-col">
            <label
              htmlFor="state"
              className="mb-1 text-sm font-medium text-gray-700"
            >
              State
            </label>
            <select
              name="state"
              id="state"
              value={form.state}
              onChange={handleInputChange}
              className="w-full p-3 bg-gray-100 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              style={{
                border: "1.71px solid #D2CFCF",
                width: "100%",
                height: "85px",
                borderRadius: "12px",
              }}
            >
              <option value="" disabled>
                Select Your State of Residence
              </option>
              <option value="California">California</option>
              <option value="New York">New York</option>
              <option value="Texas">Texas</option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-[800px] max-md:w-[300px]  max=-md:w-[200px] py-3 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
            style={{
              height: "50px",
              paddingLeft: "16px",
              paddingRight: "16px",
              borderRadius: "12px",
            }}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;
