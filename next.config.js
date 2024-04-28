const path = require('path')

// noinspection JSUnusedLocalSymbols
/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'img.youtube.com'
			},
			{
				protocol: 'http',
				hostname: 'ec2-51-17-85-31.il-central-1.compute.amazonaws.com'
			},
			{
				protocol: 'https',
				hostname: 'ec2-51-17-138-117.il-central-1.compute.amazonaws.com/api'
			}
		]
	},
	env: {}
}

module.exports = nextConfig
