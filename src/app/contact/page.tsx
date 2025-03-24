'use cache'
import H1SrOnly from '@/components/H1SrOnly/H1SrOnly'
import SocialNavLinks from '@/components/socialNavLinks/socialNavLinks'
import { StructuredData } from '@/components/StructuredData'
import { baseUrl } from '@/data'
import Head from 'next/head'
import faEnvelopeIcon from '../../../public/images/icons/faEnvelopeIcon.svg'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'
import styles from './contact.module.scss'

export const metadata: Metadata = {
	title: 'Contact & Book Veronika Brook - Opera Singer',
	description: 'Reach out to Veronika Brook for bookings, collaborations, and performance inquiries. Contact via email or phone.',
	openGraph: {
		title: 'Contact & Book Veronika Brook - Opera Singer',
		description: 'Reach out to Veronika Brook for bookings, collaborations, or inquiries.',
		url: baseUrl + '/contact',
		type: 'website'
	}
}

const contactSchema = {
	'@context': 'https://schema.org',
	'@type': 'ContactPage',
	'name': 'Contact Veronika Brook',
	'url': baseUrl + '/contact',
	'description': 'Contact Veronika Brook for bookings, collaborations, and inquiries.',
	'image': baseUrl + '/images/contact/elenaProsdocimoC1.jpg',
	'breadcrumb': {
		'@type': 'BreadcrumbList',
		'itemListElement': [
			{
				'@type': 'ListItem',
				'position': 1,
				'name': 'Home',
				'item': baseUrl
			},
			{
				'@type': 'ListItem',
				'position': 2,
				'name': 'Contact',
				'item': baseUrl + '/contact'
			}
		]
	},
	'contactPoint': {
		'@type': 'ContactPoint',
		'contactType': 'Booking Agent',
		'email': 'vbrookartist@gmail.com',
		'telephone': '+972-54-5856-009',
		'availableLanguage': ['English', 'Hebrew', 'Russian', 'Italian']
	}
}

export default async function Contact() {
	return (
		<>
			<Head>
				<title>Contact & Booking for Veronika Brook - Leading Opera Singer</title>
				<meta name="description" content="Contact Veronika Brook, a leading coloratura soprano of the Israeli Opera, for booking inquiries and other messages." />
			</Head>
			<StructuredData data={contactSchema} />
			<main className={styles.main}>
				<H1SrOnly>Contact Veronika Brook - Leading Israel Opera Singer for Bookings</H1SrOnly>
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
						
							<strong>GENERAL MANAGEMENT:</strong>
							<a href='tel:+972545255936'>+972 54 5255936</a>
						</p>
						<p>
							<Image
								src={faEnvelopeIcon}
								alt='Email icon'
								width={17}
								height={17}
							/>
							<strong>Email:</strong>
							<a href='mailto:vbrookartist@gmail.com'>vbrookartist@gmail.com</a>
						</p>
					</div>
				</div>
			</main>
		</>
	)
}
