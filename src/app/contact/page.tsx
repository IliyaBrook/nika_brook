import ContactForm from '@/app/contact/contactForm'
import { Metadata } from 'next'
import styles from './contact.module.scss'

export const metadata: Metadata = {
	title: 'Contact - Veronika Brook',
	description:
		'Get in touch with Veronika Brook for bookings, collaborations, or inquiries.'
}

export default function Contact() {
	return (
		<main className={styles.main}>
			<ContactForm />
		</main>
	)
}
