module.exports = {
	apps: [
		{
			name: 'veronika',
			script: 'yarn',
			args: 'start-prod',
			cwd: '/var/www/nika-brook',
			watch: true,
			restart_delay: 5000,
			env: {
				NODE_ENV: 'production'
			}
		}
	]
}
