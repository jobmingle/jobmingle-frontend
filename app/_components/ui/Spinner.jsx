import spinner from "@/public/image/Spinner.gif";
import Image from "next/image";

export default function Spinner() {
	return (
		<>
			<Image
				src={spinner}
				alt="Loading..."
				style={{
					width: "100px",
					height: "100px",
					margin: "auto",
					// display: "block",
					background: "none",
				}}
			/>
		</>
	);
}
