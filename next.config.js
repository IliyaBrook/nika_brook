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
			}
		]
	},
	experimental: {
		dynamicIO: true
	}
}

module.exports = nextConfig
