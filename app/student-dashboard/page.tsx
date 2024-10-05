// pages/index.js
"use client";
import React, { useEffect } from "react";
import Card from "./component/Card";
import { courses } from "@/lib/_exportLinks";
import Joblist from "./component/joblist";
import Button from "../_components/ui/Button";
import { useRouter } from "next/navigation";

import { useAuth } from "../_contexts/auth/AuthState";

const HomePage = () => {
	const { token, user, isAuthenticated, logout } = useAuth();

	return (
		<div className="container mx-auto p-4">
			<h1 className="text-2xl font-bold">Hello, {user?.firstName}!</h1>
			<p>Welcome to your dashboard</p>

			<h2 className="mt-6 text-xl">Available Courses</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{courses.map((course, index) => (
					<Card key={index} course={course} />
				))}
			</div>
			<a href="#" className="text-right block mt-4 text-blue-500">
				View All
			</a>
			<Joblist />
		</div>
	);
};

export default HomePage;
