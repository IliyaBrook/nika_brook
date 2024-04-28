// noinspection JSUnusedLocalSymbols
/** @type {import('next').NextConfig} */
const nextConfig = {
	typescript: {
		ignoreBuildErrors: true
	},
	eslint: {
		ignoreDuringBuilds: true
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'img.youtube.com'
			},
			{
				protocol: 'http',
				hostname: 'ec2-51-17-138-117.il-central-1.compute.amazonaws.com/api'
			}
		]
	}
}

module.exports = nextConfig
