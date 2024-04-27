import type { Metadata } from 'next'
import { Baskervville, Inter, Poppins } from 'next/font/google'

import React from 'react'
import StoreProvider from '@/app/StoreProvider'
import { PrimeReactProvider } from 'primereact/api'
import { primeReactConfig } from '@/app/primeReactConfig'

import styles from './layout.module.scss'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { AppSessionProvider } from '@/components/AppSessionProvider'
import classNames from 'classnames'
import './shareableStyles/globals.scss'
import 'primereact/resources/themes/lara-light-cyan/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('@/components/Navbar/Navbar'), {
	ssr: false
})
// fonts
const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: '300' })
const baskerville = Baskervville({ subsets: ['latin'], weight: '400' })

export const metadata: Metadata = {
	title: 'Media - Veronika Brook',
	description:
		'Explore media content featuring Veronika Brook, including her roles in various operas like Rigoletto, La traviata, and Die Zauberflote.'
}

export default async function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	const session = await getServerSession(authOptions)
	console.log('LOG ALL ENVS:')
	console.log('DATABASE_URL PRODUCTION:', process.env.NODE_ENV)
	console.log('DATABASE_URL env:', process.env.DATABASE_URL)
	console.log('DATABASE_URL EMAIL:', process.env.EMAIL)
	console.log('NEXT_PUBLIC_API_URL:', process.env.NEXT_PUBLIC_API_URL)
	console.log('SEND_TO_EMAIL:', process.env.SEND_TO_EMAIL)
	console.log('NEXTAUTH_SECRET:', process.env.NEXTAUTH_SECRET)
	console.log('GOOGLE_CLIENT_SECRET:', process.env.GOOGLE_CLIENT_SECRET)
	console.log('GOOGLE_CLIENT_ID:', process.env.GOOGLE_CLIENT_ID)
	console.log('EMAIL_APP_PASSWORD:', process.env.EMAIL_APP_PASSWORD)
	return (
		<PrimeReactProvider value={primeReactConfig}>
			<html lang="en">
				<body
					className={classNames(
						inter.className,
						poppins.className,
						baskerville.className
					)}
				>
					<StoreProvider>
						<AppSessionProvider session={session}>
							<div className={styles.root}>
								<div className={styles.navbar}>
									<Navbar />
								</div>
								<div className={styles.main}>{children}</div>
							</div>
						</AppSessionProvider>
					</StoreProvider>
				</body>
			</html>
		</PrimeReactProvider>
	)
}
