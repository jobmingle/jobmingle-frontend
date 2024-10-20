import React from "react";
import AdminNav from "./NavUtils/AdminNav";

const page = () => {
	return (
		<div className="flex justify-normal w-full">
			{/* Main Content */}
			<main className="flex-grow">
				<iframe
					src="https://lookerstudio.google.com/embed/reporting/fe6ac380-9e5f-42ce-950d-3bc8a0d11b9a/page/nxdBE"
					// frameBorder={0}
					className="overflow-hidden h-[128vh] md:h-screen"
					style={{ border: "0", width: "100%" }}
					allowFullScreen
					sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
				></iframe>
			</main>
		</div>
	);
};

export default page;
