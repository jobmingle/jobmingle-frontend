// components/Navbar.js
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "../atoms/Button";
import Image from "next/image";

const AppHeader = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

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

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		//This is the original non-sticky navbar without animation: remove the comment and delete the initial to return to original
		// <nav className="bg-white text-black flex justify-around md:shrink-0 max-md:contents fixed top-0 left-0 right-0">
		<nav
			className={`bg-white  text-black flex justify-around md:shrink-0 max-md:contents  top-0 left-0 right- shadow-md transform transition-transform duration-500 ease-in-out z-50 ${
				isVisible && "fixed"
			} ${isVisible ? "animate-bounceIn" : "translate-y-0"}`}
		>
			<div className="w-[100vw] h-28 border-b-[0.5px] border-b-[#9a8888] bg-white flex items-center justify-around">
				<div className="flex items-center max-md:mr-[45%]">
					<div className="font-sans text-[1.625rem] mx-7  font-medium leading-[1.4375rem]  hover:text-[#FFBE0B]">
						<Link href="/">
							<Image
								src={"/image/logo.png"}
								alt="jobmingle"
								srcSet=""
								width={50}
								height={50}
							/>
						</Link>
					</div>
				</div>

				<div className="inline-flex items-start gap-10 max-md:hidden">
					<div className="text-lg font-medium leading-6 hover:text-[#FFBE0B]">
						{/* <Link href="#about" onClick={toggleMenu}> */}
						<Link href="/about" onClick={toggleMenu}>
							About us
						</Link>
					</div>
					<div className="text-lg font-medium leading-6 hover:text-[#FFBE0B]">
						<Link href="/jobs">Jobs</Link>
					</div>

					<div className="text-lg font-medium leading-6 hover:text-[#FFBE0B]">
						{/* <Link href="#contact">contact</Link> */}
						<Link href="/contact-us">Contact</Link>
					</div>
				</div>
				<div className="inline-flex items-start mr-6 max-md:hidden">
					<Link href="/Signup">
						<Button className="w-[120px]  bg-black text-white rounded-[10px] mr-[20px] hover:text-black hover:bg-yellow-500 transition-colors duration-500">
							Sign Up
						</Button>
					</Link>

					{/* I hid this button on large screen downward with max-lg:hidden , to fix nav items overlap */}
					<Link href="/Signin" className="max-lg:hidden">
						<Button className="w-[120px]  bg-white border-2 border-yellow-500 text-black rounded-[10px] hover:text-black hover:bg-yellow-500 transition-colors duration-500 ">
							Login
						</Button>
					</Link>
				</div>

				{/* Mobile Menu Toggle */}
				<div className="md:hidden flex items-center">
					<button onClick={toggleMenu} className="focus:outline-none">
						{menuOpen ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="26"
								height="36"
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
			</div>

			{/* Mobile menu */}
			{menuOpen && (
				<div
					className={`bg-black md:hidden max-md:absolute max-md:h-[50%] max-md:w-[100%] max-md:z-[30] max-md:justify-center max-md:gap-[40px] text-[#d9d9e8] flex flex-col items-center transition-all duration-500 ${
						menuOpen
							? "clip-path-[polygon(0 0, 100% 0, 100% 100%, 0 80%)]"
							: "clip-path-[polygon(0 0, 100% 0, 100% 100%, 0 0)]"
					}`}
				>
					<div className="text-lg font-medium leading-6 ">
						<Link href="/" onClick={toggleMenu}>
							Home
						</Link>
					</div>
					<div className="text-lg font-medium leading-6 ">
						<Link href="/about" onClick={toggleMenu}>
							About us
						</Link>
					</div>
					<div className="text-lg font-medium leading-6 ">
						<Link href="/jobs" onClick={toggleMenu}>
							Jobs
						</Link>
					</div>

					<div className="text-lg font-medium leading-6 ">
						<Link href="/contact-us" onClick={toggleMenu}>
							Contact Us
						</Link>
					</div>
					<div className="inline-flex items-start mr-6">
						<Link href="/Signup" onClick={toggleMenu}>
							<Button className="w-[200px] bg-[#f5cb1a] text-black border-solid border-10 border-white transition-colors duration-300">
								Sign Up
							</Button>
						</Link>
					</div>
				</div>
			)}
		</nav>
	);
};

export default AppHeader;
