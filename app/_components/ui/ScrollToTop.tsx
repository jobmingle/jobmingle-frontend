"use client";
import { useEffect, useState } from "react";
import { HiMiniArrowUp } from "react-icons/hi2";

const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth", // for smooth scrolling
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<button
			onClick={scrollToTop}
			className={`fixed bottom-8 text-xl right-8 p-3 bg-yellow-500 text-white rounded-full shadow-lg transition-opacity duration-700 ease-in-out ${
				isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
			}`}
		>
			<HiMiniArrowUp />
		</button>
	);
};

export default ScrollToTopButton;
