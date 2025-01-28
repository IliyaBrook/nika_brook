'use cache'
import SocialNavLinks from '@/components/socialNavLinks/socialNavLinks'
import { StructuredData } from '@/components/StructuredData'
import { sameAs } from '@/seoData'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'
import styles from './contact.module.scss'

export const metadata: Metadata = {
	title: 'Contact & Book Veronika Brook - Opera Singer',
	description: 'Reach out to Veronika Brook for bookings, collaborations, and performance inquiries. Contact via email or phone.',
	keywords: [
		'Contact Veronika Brook',
		'Veronika Brook bookings',
		'book opera singer',
		'performance requests',
		'Veronika Brook email',
		'Veronika Brook management'
	],
	openGraph: {
		title: 'Contact & Book Veronika Brook - Opera Singer',
		description: 'Reach out to Veronika Brook for bookings, collaborations, or inquiries.',
		url: 'https://veronikabrook.com/contact',
		type: 'website',
		images: [
			{
				url: 'https://veronikabrook.com/images/contact/elenaProsdocimoC1.jpg',
				width: 1200,
				height: 630,
				alt: 'Veronika Brook Contact Page'
			}
		]
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Contact & Book Veronika Brook - Opera Singer',
		description: 'Reach out to Veronika Brook for bookings, collaborations, or inquiries.',
		images: ['https://veronikabrook.com/images/contact/elenaProsdocimoC1.jpg']
	},
	robots: {
		index: true,
		follow: true
	},
	alternates: {
		canonical: 'https://veronikabrook.com/contact'
	}
}

const biographySchema = {
	'@context': 'https://schema.org',
	'@type': 'ProfilePage',
	name: 'Veronika Brook - Biography',
	url: 'https://veronikabrook.com/biography',
	description: 'Biography of Veronika Brook, an accomplished soprano with a rich operatic repertoire.',
	image: 'https://veronikabrook.com/images/bioPage/bio_sec_1.jpg',
	breadcrumb: {
		'@type': 'BreadcrumbList',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				name: 'Home',
				item: 'https://veronikabrook.com'
			},
			{
				'@type': 'ListItem',
				position: 2,
				name: 'Biography',
				item: 'https://veronikabrook.com/biography'
			}
		]
	},
	mainEntity: {
		'@type': 'Person',
		name: 'Veronika Brook',
		alternateName: 'Veronika Brook Soprano',
		jobTitle: 'Opera Singer',
		nationality: 'Estonian',
		knowsLanguage: ['English', 'Hebrew', 'Russian', 'Italian'],
		sameAs
	}
}

export default async function Contact() {
	return (
		<>
			<StructuredData data={biographySchema} />
			<main className={styles.main}>
				<div className={styles.contactImageWrapper}>
					<Image
						src='/images/contact/elenaProsdocimoC1.jpg'
						alt='Contact page image'
						fill
						priority
						className={styles.contactImage}
						loading='eager'
					/>
				</div>
				<div className={styles.contactDataWrapper}>
					<SocialNavLinks className={styles.socials} />
					<div className={styles.contacts}>
						<p>
							<span>
								<strong>GENERAL MANAGEMENT:</strong>
								<span>
    								<FontAwesomeIcon icon={faPhone} />
    								<a href='tel:+972545255936'>+972 54 5255936</a>
    							</span>
							</span>
						
						</p>
						<p>
							<FontAwesomeIcon icon={faEnvelope} />
							<strong>Email:</strong>
							<a href='mailto:nikaSemagina@gmail.com'>vbrookartist@gmail.com</a>
						</p>
					</div>
				</div>
			</main>
		</>
	)
}
