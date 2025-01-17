import Navbar from '@/components/Navbar/Navbar'
import type { Metadata } from 'next'
import { Baskervville, Poppins, Hedvig_Letters_Serif, Josefin_Sans } from 'next/font/google'

import React from 'react'
import StoreProvider from '@/app/StoreProvider'
import { PrimeReactProvider } from 'primereact/api'
import { primeReactConfig } from '@/app/primeReactConfig'
import { ScrollBarWrapper } from '@/components/Wrappers/ScrollBarWrapper/ScrollBarWrapper'
import styles from './layout.module.scss'
import classNames from 'classnames'
import './shareableStyles/globals.scss'
import 'primereact/resources/themes/lara-light-cyan/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

const poppins = Poppins({ subsets: ['latin'], weight: '300', display: 'swap', variable: '--font-poppins' })
const baskerville = Baskervville({ subsets: ['latin'], weight: '400', display: 'swap', variable: '--font-baskerville' })
const hedvigLettersSerif = Hedvig_Letters_Serif({ subsets: ['latin'], weight: '400', display: 'swap', variable: '--font-hedvig-letters-serif' })
const josefinSans = Josefin_Sans({ subsets: ['latin'], weight: '400', display: 'swap', variable: '--font-josefin-sans' })

export const metadata: Metadata = {
	title: 'Media - Veronika Brook',
	description:
		'Explore media content featuring Veronika Brook, including her roles in various operas like Rigoletto, La traviata, and Die Zauberflote.',
	keywords: [
		'opera',
		'coloratura soprano',
		'music',
		'israel artist'
	],
}

export default async function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<PrimeReactProvider value={primeReactConfig}>
			<html
				lang="en"
				className={classNames(
					poppins.variable,
					baskerville.variable,
					hedvigLettersSerif.variable,
					josefinSans.variable
				)}
			>
				<body>
				<StoreProvider>
					<div className={styles.root}>
						<div className={styles.navbar}>
							<Navbar />
						</div>
						<ScrollBarWrapper className={styles.scrollBar}>
							<div className={styles.main}>{children}</div>
						</ScrollBarWrapper>
					</div>
				</StoreProvider>
				</body>
			</html>
		</PrimeReactProvider>
	)
}
