import { primeReactConfig } from '@/app/primeReactConfig'
import Navbar from '@/components/Navbar/Navbar'
import { StructuredData } from '@/components/StructuredData'
import { ScrollBarWrapper } from '@/components/Wrappers/ScrollBarWrapper/ScrollBarWrapper'
import classNames from 'classnames'
import './shareableStyles/globals.scss'
import 'primereact/resources/themes/lara-light-cyan/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import type { Metadata } from 'next'
import { Alex_Brush, Hedvig_Letters_Serif, Josefin_Sans } from 'next/font/google'
import { PrimeReactProvider } from 'primereact/api'

import React from 'react'
import styles from './layout.module.scss'
import 'primeflex/primeflex.css'

const hedvigLettersSerif = Hedvig_Letters_Serif({
	subsets: ['latin'],
	weight: '400',
	display: 'swap',
	variable: '--font-hedvig-letters-serif'
})
const josefinSans = Josefin_Sans({
	subsets: ['latin'],
	weight: '400',
	display: 'swap',
	variable: '--font-josefin-sans'
})
const alexBrush = Alex_Brush({ subsets: ['latin'], weight: '400', display: 'swap', variable: '--font-alex-brush' })
// const alexBrush = localFont({
// 	src: '../../public/fonts/google/Alex_Brush/AlexBrush-Regular.ttf',
// 	display: 'swap',
// 	variable: '--font-alex-brush',
// });

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
	openGraph: {
		title: 'Media - Veronika Brook',
		description: 'Explore media content featuring Veronika Brook.',
		url: 'https://veronikabrook.com',
		images: [
			{
				url: 'https://veronikabrook.com/images/mediaPhoto/photo3.jpg',
				width: 469,
				height: 700,
				alt: 'Veronika Brook'
			}
		],
		type: 'website'
	},
	robots: {
		index: true,
		follow: true
	}
}

const schemaOrgJson = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: 'Veronika Brook',
	voiceType: 'Soprano',
	jobTitle: 'Opera Singer',
	birthPlace: 'Estonia',
	description: 'An accomplished soprano opera singer with a rich operatic repertoire...',
	url: 'https://veronikabrook.com',
	sameAs: [
		'https://www.instagram.com/vero_nika_brook',
		'https://www.youtube.com/channel/UCbNqjRLtT6dSh1qCWhIdxNw',
		'https://music.apple.com/hu/artist/veronika-brook/1502987264',
		'https://open.spotify.com/artist/0922dzQ9qrAJ1sTf1hf067'
	]
}

export default function RootLayout({
	                                   children
                                   }: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<PrimeReactProvider value={primeReactConfig}>
			<html
				lang='en'
				className={classNames(
					hedvigLettersSerif.variable,
					josefinSans.variable,
					alexBrush.variable
				)}
			>
				<body>
					<div className={styles.root}>
						<div className={styles.navbar}>
							<Navbar />
						</div>
						<ScrollBarWrapper className={styles.scrollBar}>
							<div className={styles.main}>{children}</div>
						</ScrollBarWrapper>
					</div>
					<StructuredData data={schemaOrgJson} />
				</body>
			</html>
		</PrimeReactProvider>
	)
}
