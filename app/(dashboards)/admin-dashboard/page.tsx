"use client";

import React, { useState } from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

type Account = {
	id: number;
	username: string;
	media_impression_count: number;
	total_followers: number;
	total_following: number;
	type: "Vendor" | "Employee" | "Student";
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

const AccountDashboard = () => {
	const [accounts, setAccounts] = useState<Account[]>(initialAccounts);

	// Compute totals for the cards
	const totalVendors = accounts.filter(
		(account) => account.type === "Vendor"
	).length;
	const totalEmployees = accounts.filter(
		(account) => account.type === "Employee"
	).length;
	const totalStudents = accounts.filter(
		(account) => account.type === "Student"
	).length;
	const totalUsers = accounts.length;

	// Chart data (example data showing trends over time)
	const chartData = [
		{ name: "Jan", Vendors: 3, Employees: 5, Students: 2 },
		{ name: "Feb", Vendors: 2, Employees: 4, Students: 3 },
		{ name: "Mar", Vendors: 5, Employees: 6, Students: 4 },
		// Add more monthly data as needed
	];

	return (
		<div className="container mx-auto md:p-9">
			{/* Cards for Total Numbers */}
			<div className="grid grid-cols-2 gap-3 md:flex  md:justify-between md:gap-6 mb-6">
				<div className="w-full p-4 bg-blue-500 text-white rounded-lg">
					<h3 className="text-xl font-bold">Total Users</h3>
					<p className="text-3xl">{totalUsers}</p>
				</div>
				<div className="w-full p-4 bg-green-500 text-white rounded-lg">
					<h3 className="text-xl font-bold">Total Vendors</h3>
					<p className="text-3xl">{totalVendors}</p>
				</div>
				<div className="w-full p-4 bg-yellow-500 text-white rounded-lg">
					<h3 className="text-xl font-bold">Total Employees</h3>
					<p className="text-3xl">{totalEmployees}</p>
				</div>
				<div className="w-full p-4 bg-red-500 text-white rounded-lg">
					<h3 className="text-xl font-bold">Total Students</h3>
					<p className="text-3xl">{totalStudents}</p>
				</div>
			</div>

			{/* Bar Chart */}
			<div className="w-full h-96 mt-[10%] ">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart data={chartData}>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Bar dataKey="Vendors" fill="#8884d8" />
						<Bar dataKey="Employees" fill="#82ca9d" />
						<Bar dataKey="Students" fill="#ffc658" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default AccountDashboard;
