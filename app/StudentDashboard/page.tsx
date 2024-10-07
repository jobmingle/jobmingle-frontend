// pages/index.js
import React from "react";
import Card from "./component/Card";
import { courses } from "@/lib/_exportLinks";
import Joblist from "./component/joblist";

const HomePage = () => {
  return (
    <div className=" w-full p-4 border">
      <h1 className="text-2xl font-bold">Good Morning X_Lem!</h1>
      <p>Welcome to your dashboard</p>
      <h2 className="mt-6 text-xl">Available Courses</h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4">
        {courses.map((course, index) => (
          <Card key={index} course={course} />
        ))}
      </div>
      <a href="#" className="text-right block mt-4 text-blue-500">
        View All
      </a>
      <Joblist/>
    </div>
  );
};

export default HomePage;
