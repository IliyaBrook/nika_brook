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
				hostname: 'master.dvbbjvf57empu.amplifyapp.com'
			}
		]
	}
	// webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
	// 	config.resolve.alias['@'] = path.resolve(__dirname, 'src')
	// 	return config
	// }
}

module.exports = nextConfig
