"use client";
import React from "react";
import Joblist from "./joblist";

const AdminPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-6xl font-bold mb-4 text-center  max-md:text-2xl">Admin Dashboard</h1>
      <Joblist isAdmin={true} /> {/* Only displaying the Joblist */}
    </div>
  );
};

export default AdminPage;
