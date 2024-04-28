import { Metadata } from 'next'
import styles from './contact.module.scss'
import dynamic from 'next/dynamic'
import { logVisits } from '@/utils/logVisits'

const ContactForm = dynamic(() => import('./contactForm'), { ssr: false })

export const metadata: Metadata = {
	title: 'Contact - Veronika Brook',
	description:
		'Get in touch with Veronika Brook for bookings, collaborations, or inquiries.'
}

export default function Contact() {
	void logVisits('contact')
	return (
		<main className={styles.main}>
			<ContactForm />
		</main>
	)
}
