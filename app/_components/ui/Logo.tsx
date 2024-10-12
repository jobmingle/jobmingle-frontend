import Image from "next/image";
import jobmingle from "@/public/jobmingle.png";
import logo from "@/public/logo.png";

export default function Logo({ path, width = 60, height = 60 }: any) {
	return (
		<div className=" items-center ">
			<Image src={path} alt="jobmingle" width={width} height={height} />
		</div>
	);
}
