// pages/_app.js
"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp() {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			offset: 1,
		});
	}, []);
	return null;
}

export default MyApp;
