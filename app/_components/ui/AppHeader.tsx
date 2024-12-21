// components/Navbar.js
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../atoms/Button";
import Image from "next/image";
import Logo from "./Logo";
import logo from "@/public/logo.png";

import { usePathname, useRouter } from "next/navigation";
import { useAppSelector } from "@/app/_hooks/hooks";
import {
	authenticated,
	user as userData,
} from "@/app/_features/appSlices/userSlice";
import LogoutButton from "../auth/LogoutButton";

const AppHeader = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	// const { isAuthenticated, logout, user } = useAuth();
	const router = useRouter();
	const pathname = usePathname();

	const user = useAppSelector(userData);
	const isAuthenticated = useAppSelector(authenticated);

	let url = "/";
	if (user) {
		if (user?.goals === "List a course") url = "/vendor-dashboard";

		if (user?.goals === "Post a job") url = "/employer-dashboard";

		if (user?.goals === "Apply for a job / Take a course") url = "/dashboard";
		if (user?.goals === "admin" || user?.role === "admin")
			url = "/admin-dashboard";
	}

	// Effect for sticky navbar after scrolling pass the viewport height
	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			const viewportHeight = window.innerHeight;

			// Show the navbar if the user has scrolled past the viewport height
			if (scrollPosition > viewportHeight) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};
		// Add scroll event listener
		window.addEventListener("scroll", handleScroll);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	function handleBackToDashboard() {
		router.push(url);
	}

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<header
			className={`bg-white  text-black flex justify-around  md:shrink-0 max-md:contents  top-0 left-0 right-0 shadow-md transform transition-transform duration-500 ease-in-out w-full z-30 fixed   ${
				isVisible && "fixed"
			} ${isVisible ? "animate-bounceIn" : "translate-y-0"}`}
		>
			<nav className="w-full h-24 border-b-[0.5px] border-b-[#9a8888] bg-white  flex items-center justify-between px-8 z-40">
				<div className="flex items-center  ">
					<Link href="/">
						<Logo path={logo} />
					</Link>
				</div>

				<ul className="hidden md:flex  items-end gap-8 lg:gap-16  z-50">
					<li className="text-sm lg:text-lg  font-medium leading-6 hover:text-yellow-500">
						<Link
							href="/about"
							className={`${pathname === "/about" ? "text-yellow-500" : ""}`}
						>
							About us
						</Link>
					</li>
					<li className="text-sm lg:text-lg  font-medium leading-6 hover:text-yellow-500">
						<Link
							href="/courses"
							className={`${pathname === "/courses" ? "text-yellow-500" : ""}`}
						>
							Courses
						</Link>
					</li>
					<li className="text-sm lg:text-lg font-medium leading-6 hover:text-yellow-500">
						<Link
							href="/jobs"
							className={`${pathname === "/jobs" ? "text-yellow-500" : ""}`}
						>
							Jobs
						</Link>
					</li>

					<li className="text-sm lg:text-lg  font-medium leading-6 hover:text-yellow-500">
						{/* <Link href="#contact">contact</Link> */}
						<Link
							href="/contact-us"
							className={`${
								pathname === "/contact-us" ? "text-yellow-500" : ""
							}`}
						>
							Contact us
						</Link>
					</li>
				</ul>
				{user ? (
					<div className=" hidden md:flex gap-3 items-start   ">
						<button
							className="py-[.6rem] px-[1rem] border rounded-md hover:bg-yellow-500 transition-colors ease-in-out cursor-pointer duration-500  shadow shadow-yellow-500  "
							onClick={handleBackToDashboard}
						>
							Dashboard
						</button>
						<LogoutButton />
					</div>
				) : (
					<div className="flex items-start gap-3 max-md:hidden ">
						<Link href="/sign-up" className="">
							<Button className="w-[100px]  bg-black text-white rounded-[10px]  hover:text-black hover:bg-yellow-500 transition-colors duration-500">
								Sign Up
							</Button>
						</Link>

						{/* I hid this button on large screen downward with max-lg:hidden , to fix nav items overlap */}
						<Link href="/sign-in">
							<Button className="w-[100px]  bg-white border-2 border-yellow-500 text-black rounded-[10px] hover:text-black hover:bg-yellow-500 transition-colors duration-500 max-lg:hidden">
								Login
							</Button>
						</Link>
					</div>
				)}

				{user && (
					<div className=" flex text-sm md:hidden  ">
						{/* <Link href={url || null}> */}
						<button
							className="py-[.6rem] px-[1rem] border rounded-md hover:bg-yellow-500 transition-colors ease-in-out cursor-pointer duration-500  shadow shadow-yellow-500  "
							onClick={handleBackToDashboard}
						>
							Dashboard
						</button>
					</div>
				)}

				{/* Mobile Menu Toggle */}
				<div className="md:hidden flex items-center">
					<button onClick={toggleMenu} className="focus:outline-none">
						{menuOpen ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="50"
								height="50"
								fill="currentColor"
								className="bi bi-x"
								viewBox="0 0 16 16"
							>
								<path
									d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"
									fill="black"
								/>
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
									fill="black"
								/>
							</svg>
						)}
					</button>
				</div>
			</nav>

			{/* Mobile menu */}
			{menuOpen && (
				<ul
					className={`bg-stone-800 md:hidden pb-10 absolute h-[50%] w-[100%] z-[2]  justify-center gap-[5px]  text-[#d9d9e8] flex flex-col items-center transition-colors duration-500 ${
						menuOpen
							? "clip-path-[polygon(0 0, 100% 0, 100% 100%, 0 80%)]"
							: "clip-path-[polygon(0 0, 100% 0, 100% 100%, 0 0)]"
					}`}
				>
					<li className="flex text-lg font-medium leading-6 hover:text-white items-center justify-center hover:bg-yellow-300 hover:bg-opacity-10 w-full h-20 ">
						<Link href="/" onClick={toggleMenu}>
							Home
						</Link>
					</li>
					<li className="flex text-lg font-medium leading-6  hover:text-white items-center justify-center hover:bg-yellow-300 hover:bg-opacity-10 w-full h-20">
						<Link href="/about" onClick={toggleMenu}>
							About us
						</Link>
					</li>

					<li className="flex text-lg font-medium leading-6  hover:text-white items-center justify-center hover:bg-yellow-300 hover:bg-opacity-10 w-full h-20">
						<Link href="/courses" onClick={toggleMenu}>
							Courses
						</Link>
					</li>
					<li className="flex text-lg font-medium leading-6  hover:text-white items-center justify-center hover:bg-yellow-300 hover:bg-opacity-10 w-full h-20">
						<Link href="/jobs" onClick={toggleMenu}>
							Jobs
						</Link>
					</li>

					<li className="flex text-lg font-medium leading-6  hover:text-white items-center justify-center hover:bg-yellow-300 hover:bg-opacity-10 w-full h-20">
						<Link href="/contact-us" onClick={toggleMenu}>
							Contact Us
						</Link>
					</li>
					<li className="inline-flex items-start mr-6">
						{user ? (
							<LogoutButton styleExtra="bg-white text-black" hidden={false} />
						) : (
							<Link href="/sign-up" onClick={toggleMenu}>
								<Button className="w-[200px] bg-[#f5cb1a] text-black border-solid border-10 border-white transition-colors duration-300">
									Sign Up
								</Button>
							</Link>
						)}
					</li>
				</ul>
			)}
		</header>
	);
};

export default AppHeader;
