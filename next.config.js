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
				hostname: 'nika-brook-ld-2109784693.il-central-1.elb.amazonaws.com'
			}
		]
	}
}

module.exports = nextConfig
