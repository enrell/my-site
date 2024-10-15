/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "standalone", // mine worked fine without this line
	reactStrictMode: true,
	images: {
		domains: ["dev-to-uploads.s3.amazonaws.com", "cdn.jsdelivr.net"],
	},
};

export default nextConfig;
