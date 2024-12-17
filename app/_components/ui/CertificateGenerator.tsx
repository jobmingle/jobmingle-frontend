import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface CertificateProps {
	studentName: string;
	courseName: string;
	completionDate: string;
}

const CertificateGenerator: React.FC<CertificateProps> = ({
	studentName,
	courseName,
	completionDate,
}) => {
	const certificateRef = useRef<HTMLDivElement>(null);

	const generateCertificate = async () => {
		const input = certificateRef.current;
		if (!input) return;

		// Generate the image using html2canvas
		const canvas = await html2canvas(input, { scale: 2 });
		const imgData = canvas.toDataURL("/image/png");

		// Generate PDF using jsPDF
		const pdf = new jsPDF("landscape", "mm", "a4"); // Landscape A4 size
		const imgWidth = 297;
		const imgHeight = (canvas.height * imgWidth) / canvas.width;
		pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

		pdf.save(`certificate_${studentName}.pdf`);
	};

	return (
		<div>
			{/* Certificate Design */}
			<div
				ref={certificateRef}
				className="flex flex-col justify-between w-[842px] h-[595px] bg-cover   object-contain  p-8 bg-white relative mx-auto border-2 border-double- border-stone-500 shadow shadow-yellow-600"
				style={{
					textAlign: "center",
					fontFamily: "serif",
					position: "relative",
					boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
				}}
			>
				{/* Background Image */}
				<div className="absolute inset-0 z-0">
					<img
						src="/image/logo.png"
						alt="Certificate Background"
						className="w-full h-full object-cover opacity-10"
					/>
				</div>

				{/* Decorative Border Corners */}
				<div className="absolute z-20 top-4 left-4 text-yellow-500">
					<div className="w-12 h-12 border-t-4 border-l-4 border-yellow-500 rounded-lg"></div>
				</div>
				<div className="absolute z-20 top-4 right-4 text-yellow-500">
					<div className="w-12 h-12 border-t-4 border-r-4 border-yellow-500 rounded-lg"></div>
				</div>
				<div className="absolute z-20 bottom-4 left-4 text-yellow-500">
					<div className="w-12 h-12 border-b-4 border-l-4 border-yellow-500 rounded-lg"></div>
				</div>
				<div className="absolute z-20 bottom-4 right-4 text-yellow-500">
					<div className="w-12 h-12 border-b-4 border-r-4 border-yellow-500 rounded-lg"></div>
				</div>
				{/* <div className="absolute inset-0 bg-white bg-opacity-95 "></div> */}

				{/* Main Certificate Content */}
				<h1 className="text-4xl font-bold text-gray-800 z-20">
					CERTIFICATE OF COMPLETION
				</h1>
				<p className="mt-4 text-lg text-gray-600 uppercase z-20">
					This certificate is awarded to
				</p>
				<div className="z-20">
					<h2 className="text-3xl font-bold text-gray-900 mt-2">
						{studentName}
					</h2>
					<div className="border border-b border-yellow-600 w-[80%] rounded-full mx-auto"></div>
				</div>

				<div className="z-20">
					<p className="mt-4 text-lg text-gray-600">
						For successfully completing a paid online course
					</p>
					<h3 className="text-2xl text-gray-800 font-semibold ">
						{courseName}
					</h3>
				</div>
				<div className="mt-5 z-20">
					<p className=" text-sm text-yellow-600">Provided by</p>
					<p className="text-xl text-stone-800 font-bold">JobMingle</p>
					<p className=" text-sm text-yellow-600">{completionDate}</p>
				</div>

				{/* Decorative Seal Image */}
				<img
					src="/image/logo.png" // Replace with the seal image path in the public folder
					alt="Seal"
					className="absolute bottom-8 right-8 w-24 h-24"
				/>
			</div>

			{/* Generate Button */}
			<button
				onClick={generateCertificate}
				className="mt-4 px-6 py-2 bg-blue-600 text-white font-bold rounded"
			>
				Generate My Certificate
			</button>
		</div>
	);
};

export default CertificateGenerator;
