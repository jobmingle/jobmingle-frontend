"use client";

import React, { useState } from "react";

type Account = {
  id: number;
  username: string;
  media_impression_count: number;
  total_followers: number;
  total_following: number;
  type: "Vendor" | "Employee" | "Student"; // New type field
};

// Dummy accounts data
const initialAccounts: Account[] = [
  {
    id: 1,
    username: "john_doe",
    media_impression_count: 120,
    total_followers: 5400,
    total_following: 150,
    type: "Vendor",
  },
  {
    id: 2,
    username: "jane_smith",
    media_impression_count: 95,
    total_followers: 3200,
    total_following: 200,
    type: "Employee",
  },
  {
    id: 3,
    username: "alex_jones",
    media_impression_count: 450,
    total_followers: 10200,
    total_following: 300,
    type: "Student",
  },
  // Add more dummy accounts as needed
];

const AccountSearch = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterType, setFilterType] = useState<string>("All"); // For filtering
  const [accounts, setAccounts] = useState<Account[]>(initialAccounts);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterType(e.target.value);
  };

  // Handle delete action
  const handleDelete = (id: number) => {
    setAccounts(accounts.filter((account) => account.id !== id));
  };

  // Filter accounts based on the search term and type
  const filteredAccounts = accounts.filter((account) => {
    const matchesSearch = account.username
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "All" || account.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="container flex flex-col mx-auto p-6">
      {/* Search box and filter dropdown */}
      <div className="flex w-full justify-between items-center mb-4">
        <input
          type="text"
          className="w-full max-w-lg p-2 border border-gray-300 rounded-md"
          placeholder="Search for an account..."
          value={searchTerm}
          onChange={handleSearchChange}
        />

        <select
          value={filterType}
          onChange={handleFilterChange}
          className="w-fit ml-4 p-2  pl-2 border border-gray-300 rounded-md bg-yellow-500 text-black"
        >
          <option value="All">All</option>
          <option value="Vendor">Vendor</option>
          <option value="Employee">Employee</option>
          <option value="Student">Student</option>
        </select>
      </div>

      {/* Accounts list */}
      <div className="mt-8 flex flex-1 lg:flex-row flex-col gap-4">
        {filteredAccounts.length > 0 ? (
          filteredAccounts.map((account) => (
            <div
              key={account.id}
              className="w-full sm:w-full lg:w-full shadow-md border-yellow-500 border-[2px] flex justify-center flex-col gap-5 bg-white p-10 rounded-lg"
            >
              <div className="flex relative flex-col items-center mb-4">
                <div className="w-24 h-24 rounded-full bg-slate-400 overflow-hidden"></div>
                <div>
                  <h2 className="text-[1.3em] mt-2 font-bold">
                    {account.username}
                  </h2>
                </div>
              </div>

              <div className="flex justify-center items-center gap-5 lg:gap-10 mt-2 text-sm mb-4">
                <div>
                  <p className="font-bold">Type</p>
                  <p className="text-[#6B7280]">{account.type}</p>
                </div>
              </div>

              {/* Delete Button */}
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-full"
                onClick={() => handleDelete(account.id)}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No accounts found</p>
        )}
      </div>
    </div>
  );
};

export default AccountSearch;
