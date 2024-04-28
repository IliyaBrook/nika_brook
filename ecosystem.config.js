module.exports = {
	apps: [
		{
			name: 'nika_brook',
			script: 'npm',
			args: 'start-prod',
			cwd: '/var/www/nika-brook'
		}
	]
}

// second variant

module.exports = {
	apps: [
		{
			name: 'nika_brook',
			script: 'npm',
			args: 'run start-prod',
			cwd: '/var/www/nika-brook',
			watch: true,
			restart_delay: 5000,
			env: {
				NODE_ENV: 'production'
			}
		}
	]
}
