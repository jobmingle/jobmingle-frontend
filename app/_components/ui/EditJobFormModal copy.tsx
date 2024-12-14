import { useEffect, useRef, useState } from "react";
import { BsXLg } from "react-icons/bs";
import EditJobForm from "./EditJobForm";

const EditJobFormModal = ({ setActive, job }: any) => {
	const handleclose = () => {
		setActive(false);
	};

	const modalRef = useRef<HTMLDivElement>(null);
	const [isDragging, setIsDragging] = useState(false);
	const [offset, setOffset] = useState({ x: 0, y: 0 });

	const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
		if (modalRef.current) {
			setIsDragging(true);
			setOffset({
				x: e.clientX - modalRef.current.offsetLeft,
				y: e.clientY - modalRef.current.offsetTop,
			});
		}
	};

	const handleMouseMove = (e: MouseEvent) => {
		if (isDragging && modalRef.current) {
			modalRef.current.style.left = `${e.clientX - offset.x}px`;
			modalRef.current.style.top = `${e.clientY - offset.y}px`;
		}
	};
	const handleMouseUp = () => {
		setIsDragging(false);
	};

	useEffect(() => {
		document.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("mouseup", handleMouseUp);

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseup", handleMouseUp);
		};
		// eslint-disable-next-line
	}, [isDragging, offset]);

	const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
		// Close modal only if the user clicks directly on the overlay
		if (e.target === e.currentTarget) {
			setActive(false);
		}
	};

	return (
		<div
			className="fixed inset-0 md:inset-0 bg-gray-400- bg-red-700  bg-opacity-50 flex justify-center  items-center z-50 cursor-grab-"
			onClick={handleOverlayClick}
		>
			<div
				ref={modalRef}
				onMouseDown={handleMouseDown}
				className={
					"relative-  bg-black-100/10  px-5 top-0 right-0 flex flex-col items-center z-40 cursor-grab"
				}
				style={{
					position: "absolute",

					transform: "translate(-50%, -50%)",
				}}
			>
				<div className="relative- h-auto  min-w-[25rem] w-auto-  max-w-[50rem] w-full- rounded-md  bg-white m-auto ">
					<button
						className=" absolute sora text-xs right-5 md:right-1 pr-2 pt-2  p-1"
						onClick={handleclose}
					>
						<BsXLg />
					</button>
					<main className=" flex flex-col  m-auto w-full items-center justify-center p-3">
						<EditJobForm job={job} />{" "}
					</main>
				</div>
			</div>
		</div>
	);
};

export default EditJobFormModal;
