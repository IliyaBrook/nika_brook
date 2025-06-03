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
		dynamicIO: true,
		useCache: true,
		optimisticClientCache: true,
		webpackMemoryOptimizations: true,
		serverComponentsHmrCache: true
	},
	async headers() {
		return [
			{
				source: '/(.*)',
				headers: [
					{
						key: 'Content-Security-Policy',
						value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.youtube.com https://youtube.com; style-src 'self' 'unsafe-inline'; img-src 'self' https: data:; connect-src 'self' https://www.youtube.com https://youtube.com; font-src 'self'; frame-src 'self' https://www.youtube.com https://youtube.com; media-src 'self' https://www.youtube.com https://youtube.com;"
					},
					{
						key: 'X-Content-Type-Options',
						value: 'nosniff',
					},
					{
						key: 'X-Frame-Options',
						value: 'SAMEORIGIN',
					},
					{
						key: 'X-XSS-Protection',
						value: '1; mode=block',
					},
					{
						key: 'Referrer-Policy',
						value: 'no-referrer-when-downgrade',
					},
					{
						key: 'Strict-Transport-Security',
						value: 'max-age=31536000; includeSubDomains; preload',
					},
					{
						key: 'Cross-Origin-Opener-Policy',
						value: 'same-origin',
					},
				],
			},
		];
	},
}

module.exports = nextConfig
