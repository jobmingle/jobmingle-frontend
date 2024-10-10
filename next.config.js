const { hostname } = require("os");

module.exports = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.jobmingle.co",
				port: "",
				pathname: "/images/**",
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
