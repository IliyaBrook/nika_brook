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
			<p>
				<strong>
					Cell Phone:
				</strong>
				<a href='tel:+972545856009'>+972 545 856 009</a>
				<br/>
				<strong>
					Email:
				</strong>
				<a href='mailto:nikaSemagina@gmail.com'>nikaSemagina@gmail.com</a>
				<br/>
			</p>
		</main>
	)
}
