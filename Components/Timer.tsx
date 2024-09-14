"use client";
import React, { useState, useEffect } from "react";

interface Timerprops {
	minute: number;
	secs: number;
	timeLeft: number;
	setTimeLeft: any;
	isVisible: boolean;
	setIsVisible: any;
}

const Timer: React.FC<Timerprops> = ({
	minute,
	secs,
	timeLeft,
	setTimeLeft,
	isVisible,
	setIsVisible,
}) => {
	useEffect(() => {
		if (timeLeft > 0 && isVisible) {
			const timer = setInterval(() => {
				setTimeLeft((prevTime: any) => {
					if (prevTime <= 1) {
						clearInterval(timer);
						return 0;
					}
					return prevTime - 1;
				});
			}, 1000);

			return () => clearInterval(timer);
		}
		if (timeLeft === 0) {
			setIsVisible(false);
		}
	}, [timeLeft, isVisible, setIsVisible, setTimeLeft]);

	const minutes = Math.floor(timeLeft / 60);
	const seconds = timeLeft % 60;

	return (
		<div>
			<p>
				{String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
			</p>
		</div>
	);
};

export default Timer;
