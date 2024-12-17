import React from "react";

import { Alegreya } from "next/font/google";
import "@/app/_styles/cert.css";

import certificateTemplate from "@/public/image/certificate_jm.png";

import { useState, useCallback, useRef } from "react";

import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";

import Image from "next/image";
import html2canvas from "html2canvas";

interface CertificateProps {
	studentName: string;
	courseName: string;
	completionDate: string;
}

const alegreya = Alegreya({
	subsets: ["latin"],
	weight: ["400", "500", "700"], // Specify the font weights
	display: "swap",
});

const Certificate: React.FC<CertificateProps> = ({
	studentName,
	courseName,
	completionDate,
}) => {
	const ref = useRef(null);

	const onButtonClick = useCallback(() => {
		if (ref.current === null) {
			return;
		}

		toPng(ref.current, { cacheBust: true })
			.then((dataUrl) => {
				const link = document.createElement("a");

				link.download = `${courseName} Certificate.png`;

				link.href = dataUrl;

				link.click();
			})

			.catch((err) => {
				console.error(err);
			});
	}, [ref, courseName]);

	const handleGenerateCert = async () => {
		const certificateDiv = ref.current;

		if (!certificateDiv) return;

		// Step 1: Convert JSX to an Image
		const canvas = await html2canvas(certificateDiv, { scale: 4 }); // High resolution
		const imgData = canvas.toDataURL("image/png");

		// Step 2: Add the Image to jsPDF
		const pdf = new jsPDF("landscape", "mm", "a4"); // A4 size in landscape
		// const imgWidth = 297;
		// const imgHeight = (canvas.height * imgWidth) / canvas.width;
		const pageWidth = pdf.internal.pageSize.getWidth();
		const pageHeight = pdf.internal.pageSize.getHeight();

		// Maintain original size or fit within bounds
		const imgWidth = Math.min(canvas.width / 4, pageWidth - 40); // Fit within margins
		const imgHeight = (canvas.height * imgWidth) / canvas.width; // Proportional height

		// Center the image on the PDF page
		const x = (pageWidth - imgWidth) / 2;
		const y = (pageHeight - imgHeight) / 2;

		// Save the PDF
		// pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
		pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight, undefined, "FAST");

		pdf.save(`certificate_${studentName}.pdf`);
	};

	return (
		<div>
			<div
				className={`  flex flex-col ${alegreya.className}  justify-center items-center relative h-[400px]- w-[560px]- `}
				ref={ref}
			>
				<div className="">
					<Image
						alt="certificate template"
						src={certificateTemplate}
						height={400}
						width={400}
					/>
				</div>

				<div className=" absolute top-[108px] smd:top-[130px] sm:top-[140px] md:top-[150px] text-center  ">
					<h1>{studentName}</h1>
				</div>
				<div className=" absolute bottom-[54px] smd:bottom-[67px] sm:bottom-[60px]  md:bottom-[72px] text-[10px] ">
					<h2 className="">{courseName}</h2>
				</div>
				<div className=" absolute  bottom-[17px] smd:bottom-[20px] md:bottom-[24px] text-[7px] ">
					<p className="text-yellow-600">{completionDate}</p>
				</div>
			</div>

			<div className="flex gap-3 items-center justify-center mt-[30px] text-yellow-500 text-[12px]">
				<button
					className=" absolute- flex px-3  justify-center py-2 rounded border border-gray-900 items-center hover:bg-yellow-500 hover:text-black font-semibold shadow shadow-yellow-500 transition-colors duration-700"
					onClick={onButtonClick}
				>
					Download Image
				</button>
				<button
					className=" absolute- flex px-3  justify-center py-2 rounded border border-gray-900 items-center hover:bg-yellow-500 hover:text-black font-semibold shadow shadow-yellow-500 transition-colors duration-700"
					onClick={handleGenerateCert}
				>
					Download Pdf
				</button>
			</div>
		</div>
	);
};

export default Certificate;
