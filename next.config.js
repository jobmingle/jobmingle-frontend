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
		],
	},
};
