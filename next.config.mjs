// const { hostname } = require("os");
/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
	// output: "export",
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.jobmingle.co",
				port: "",
				pathname: "/images/**",
			},
			{
				protocol: "https",
				hostname: "www.rosybrown-spider-442940.hostingersite.com",
				port: "",
				pathname: "/storage/**",
			},
			{
				protocol: "https",
				hostname: "www.netcraft.com",
				port: "",
				pathname: "/wp-content/uploads/2023/04/**",
			},
		],
	},
};

export default nextConfig;
