import type { Metadata } from 'next'
import { Baskervville, Inter, Poppins } from 'next/font/google'

import React from 'react'
import StoreProvider from '@/app/StoreProvider'
import { PrimeReactProvider } from 'primereact/api'
import { primeReactConfig } from '@/app/primeReactConfig'

import styles from './layout.module.scss'
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
	// const session = await getServerSession(authOptions)

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
						<div className={styles.root}>
							<div className={styles.navbar}>
								<Navbar />
							</div>
							<div className={styles.main}>{children}</div>
						</div>
					</StoreProvider>
				</body>
			</html>
		</PrimeReactProvider>
	)
}
