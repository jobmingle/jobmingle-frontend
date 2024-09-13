import Image from "next/image";
import jobmingle from "@/public/jobmingle.png";
import logo from "@/public/logo.png";

export default function Logo({ path }: any) {
	return (
		<div className="  ">
			<Image src={path} alt="jobmingle" width={60} height={60} />
		</div>
	);
}
