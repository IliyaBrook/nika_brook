import ImageWithCredit from '@/components/ImageWithCredit/ImageWithCredit'
import SocialNavLinks from '@/components/socialNavLinks/socialNavLinks'
import { Metadata } from 'next'
import type { ImageProps } from 'next/image'
import styles from './contact.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faApple, faFacebookF, faInstagram, faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import contactImage from '../../../public/images/contact/elenaProsdocimoC1.jpg'
import React from 'react'

export const metadata: Metadata = {
	title: 'Contact - Veronika Brook',
	description: 'Get in touch with Veronika Brook for bookings, collaborations, or inquiries.'
}

export default function Contact() {
	return (
		<main className={styles.main}>
			<div className={styles.contactImageWrapper}>
				<ImageWithCredit<ImageProps>
					className={styles.contactImage}
					ImageComponentInstance={Image}
					creditText='Elena Prosdocimo'
					imageProps={{
						// src: contactImage,
						src: '/images/contact/elenaProsdocimoC1.jpg',
						alt: 'Contact page image',
						fill: true,
						priority: true,
						className: styles.img,
						loading: 'eager',
					}}
				/>
			</div>
			<div className={styles.contactDataWrapper}>
				<SocialNavLinks className={styles.socials} />
				<div className={styles.contacts}>
					<p>
						<FontAwesomeIcon icon={faPhone} />
						<strong>GENERAL MANAGEMENT:</strong>
						<p>Alex Gold</p>
						<a href='tel:+972545255936'>+972 54 5255936</a>
					</p>
					
					<p>
						<FontAwesomeIcon icon={faEnvelope} />
						<strong>Email:</strong>
						<a href='mailto:nikaSemagina@gmail.com'>nikaSemagina@gmail.com</a>
					</p>
				</div>
			</div>
	
		</main>
	)
}
