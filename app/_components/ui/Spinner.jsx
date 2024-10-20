import spinner from "@/public/image/Spinner.gif";
import Image from "next/image";

export default function Spinner({ width = 100, height = 100 }) {
	return (
		<>
			<Image
				src={spinner}
				alt="Loading..."
				style={{
					width: `${width}px`,
					height: `${height}px`,
					margin: "auto",
					// display: "block",
					background: "none",
				}}
			/>
		</>
	);
}
