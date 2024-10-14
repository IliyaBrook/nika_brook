import type { Metadata } from 'next'
import { Baskervville, Inter, Poppins, Romanesco, Gideon_Roman, Luxurious_Roman, Open_Sans, Hedvig_Letters_Sans, Hedvig_Letters_Serif } from 'next/font/google'

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
import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('@/components/Navbar/Navbar'), {
	ssr: false
})
// fonts
const poppins = Poppins({ subsets: ['latin'], weight: '300', display: 'swap', variable: '--font-poppins' })
const baskerville = Baskervville({ subsets: ['latin'], weight: '400', display: 'swap', variable: '--font-baskerville' })
const hedvigLettersSerif = Hedvig_Letters_Serif({ subsets: ['latin'], weight: '400', display: 'swap', variable: '--font-hedvig-letters-serif' })

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
	return (
		<PrimeReactProvider value={primeReactConfig}>
			<html
				lang="en"
				className={classNames(
					poppins.variable,
					baskerville.variable,
					hedvigLettersSerif.variable
				)}
			>
				<body>
				<StoreProvider>
					<div className={styles.root}>
						<div className={styles.navbar}>
							<Navbar />
						</div>
						<ScrollBarWrapper height='100vh'>
							<div className={styles.main}>{children}</div>
						</ScrollBarWrapper>
					</div>
				</StoreProvider>
				</body>
			</html>
		</PrimeReactProvider>
	)
}
