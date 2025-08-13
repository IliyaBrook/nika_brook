import { primeReactConfig } from '@/app/primeReactConfig'
import { Initializer } from '@/components/Initializer'
import Navbar from '@/components/Navbar/Navbar'
import { StructuredData } from '@/components/StructuredData'
import { ScrollBarWrapper } from '@/components/Wrappers/ScrollBarWrapper/ScrollBarWrapper'
import { baseUrl, defaultTitle, metadataAndOpenGMainImage, sameAs } from '@/data'
import classNames from 'classnames'
import './shareableStyles/globals.scss'
import 'primereact/resources/themes/lara-light-cyan/theme.css'
import 'primereact/resources/primereact.min.css'
import type { Metadata } from 'next'
import { Alex_Brush, Hedvig_Letters_Serif, Josefin_Sans } from 'next/font/google'
import { PrimeReactProvider } from 'primereact/api'

import React from 'react'
import styles from './layout.module.scss'

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

export const metadata: Metadata = {
	title: defaultTitle,
	description:
		"Experience the artistry of Veronika Brook, an internationally acclaimed opera singer and crossover artist. Explore her performances and music career.",
	keywords: [
		'Veronika Brook',
		'veronika brook',
		'Nika Brook',
		'nika brook',
		'Opera Singer',
		'opera singer',
		'Coloratura Soprano',
		'coloratura soprano',
		'Classical Crossover Artist',
		'classical crossover artist',
		'Veronika Brook music',
		'veronika brook music',
		'Veronika Brook performances',
		'veronika brook performances',
		'Vocalist',
		'vocalist',
		'Classical music',
		'classical music',
		'Crossover artist',
		'crossover artist'
	],
	openGraph: {
		title: defaultTitle,
		description:
			"Experience the artistry of Veronika Brook, an internationally acclaimed opera singer and crossover artist. Explore her performances and music career.",
		url: baseUrl,
		images: [
			{
				url: metadataAndOpenGMainImage,
				width: 469,
				height: 700,
				alt: 'Veronika Brook'
			}
		],
		type: 'website'
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Veronika Brook - Opera Singer & Crossover Artist',
		description: 'Experience the artistry of Veronika Brook, an internationally acclaimed opera singer and crossover artist.',
		images: metadataAndOpenGMainImage,
	},
	robots: {
		index: true,
		follow: true
	},
	alternates: {
		canonical: baseUrl
	}
}

const schemaOrgJson = {
	"@context": "https://schema.org",
	"@type": "Person",
	"name": "Veronika Brook",
	"alternateName": ["Nika Brook", "Veronika Brook Soprano"],
	"givenName": "Veronika",
	"familyName": "Brook",
	"voiceType": "Coloratura Soprano",
	"jobTitle": ["Opera Singer", "Classical Crossover Artist", "Soprano"],
	"description": "Veronika Brook is an internationally acclaimed coloratura soprano and classical crossover artist, performing regularly with The Israeli Opera and orchestras worldwide. Known for her technical brilliance and emotional depth in challenging roles like the Queen of the Night.",
	"birthPlace": {
		"@type": "Place",
		"name": "Estonia"
	},
	"nationality": "Estonian",
	"performerIn": [
		{
			"@type": "MusicGroup",
			"name": "The Israeli Opera"
		}
	],
	"knowsLanguage": ["English", "Hebrew", "Russian", "Italian", "German", "French"],
	"award": [
		"1st Prize - JI Opera Competition",
		"3rd Prize - Nuovo Canto Milano Competition",
		"Recognition - Competizione dell'Opera",
		"Recognition - Hans Gabor Belvedere Singing Competition"
	],
	"alumniOf": {
		"@type": "EducationalOrganization", 
		"name": "Meitar Young Artist Program"
	},
	"hasOccupation": {
		"@type": "Occupation",
		"name": "Opera Singer",
		"occupationLocation": {
			"@type": "Place",
			"name": "Israel"
		},
		"skills": [
			"Coloratura Soprano Technique",
			"Opera Performance", 
			"Classical Crossover",
			"Vocal Agility",
			"Dramatic Interpretation"
		]
	},
	"url": baseUrl,
	"sameAs": sameAs,
	"mainEntityOfPage": {
		"@type": "ProfilePage",
		"breadcrumb": {
			"@type": "BreadcrumbList",
			"itemListElement": [
				{
					"@type": "ListItem",
					"position": 1,
					"name": "Opera Singers",
					"item": "https://schema.org/Person"
				},
				{
					"@type": "ListItem", 
					"position": 2,
					"name": "Coloratura Soprano",
					"item": baseUrl
				}
			]
		}
	}
};

const websiteSchema = {
	"@context": "https://schema.org",
	"@type": "WebSite",
	"name": "Veronika Brook Official",
	"alternateName": "Nika Brook",
	"url": baseUrl,
	"potentialAction": {
		"@type": "SearchAction",
		"target": baseUrl + "/?s={search_term_string}",
		"query-input": "required name=search_term_string"
	}
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='en'
			className={classNames(
				hedvigLettersSerif.variable,
				josefinSans.variable,
				alexBrush.variable
			)}
			suppressHydrationWarning
		>
			<head>
				<meta name="referrer" content="no-referrer-when-downgrade" />
				<StructuredData data={websiteSchema} />
				<title>Veronika Brook - Opera Singer</title>
			</head>
			<body>
				<PrimeReactProvider value={primeReactConfig}>
					<div className={styles.root}>
						<div className={styles.navbar}>
							<Navbar />
						</div>
						<ScrollBarWrapper className={styles.scrollBar}>
							<div className={styles.main}>{children}</div>
						</ScrollBarWrapper>
						<Initializer />
					</div>
					<StructuredData data={schemaOrgJson} />
				</PrimeReactProvider>
			</body>
		</html>
	)
}
