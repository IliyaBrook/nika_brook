'use cache'
import SocialNavLinks from '@/components/socialNavLinks/socialNavLinks'
import { StructuredData } from '@/components/StructuredData'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'
import styles from './contact.module.scss'

export const metadata: Metadata = {
	title: "Contact & Book Veronika Brook - Opera Singer",
	description: "Reach out to Veronika Brook for bookings, collaborations, and performance inquiries. Contact via email or phone.",
	openGraph: {
		title: "Contact & Book Veronika Brook - Opera Singer",
		description: "Reach out to Veronika Brook for bookings, collaborations, or inquiries.",
		url: "https://veronikabrook.com/contact",
		type: "website"
	}
};

const contactSchema = {
	"@context": "https://schema.org",
	"@type": "ContactPage",
	"name": "Contact Veronika Brook",
	"url": "https://veronikabrook.com/contact",
	"description": "Contact Veronika Brook for bookings, collaborations, and inquiries.",
	"image": "https://veronikabrook.com/images/contact/elenaProsdocimoC1.jpg",
	"breadcrumb": {
		"@type": "BreadcrumbList",
		"itemListElement": [
			{
				"@type": "ListItem",
				"position": 1,
				"name": "Home",
				"item": "https://veronikabrook.com"
			},
			{
				"@type": "ListItem",
				"position": 2,
				"name": "Contact",
				"item": "https://veronikabrook.com/contact"
			}
		]
	},
	"contactPoint": {
		"@type": "ContactPoint",
		"contactType": "Booking Agent",
		"email": "vbrookartist@gmail.com",
		"telephone": "+972-54-5856-009",
		"availableLanguage": ["English", "Hebrew", "Russian", "Italian"]
	}
};

export default async function Contact() {
	return (
		<>
			<StructuredData data={contactSchema} />
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
							<a href='mailto:vbrookartist@gmail.com'>vbrookartist@gmail.com</a>
						</p>
					</div>
				</div>
			</main>
		</>
	)
}
