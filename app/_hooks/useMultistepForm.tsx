import { ReactElement, useState } from "react";

export function useMultistepForm(steps: ReactElement[]) {
	const [currentIndex, setCurrentIndex] = useState(0);

	function handleNext() {
		setCurrentIndex((i) => {
			if (i >= steps.length - 1) return i;
			return i + 1;
		});
	}
	function handlePrev() {
		setCurrentIndex((i) => {
			if (i <= 0) return i;
			return i - 1;
		});
	}

	function goTo(index: number) {
		setCurrentIndex(index);
	}

	return {
		currentIndex,
		step: steps[currentIndex],
		isLastStep: currentIndex === steps.length - 1,
		steps,
		goTo,
		handleNext,
		handlePrev,
	};
}
