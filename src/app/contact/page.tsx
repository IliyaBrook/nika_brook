import { Metadata } from 'next';
import styles from './contact.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faFacebookF, faInstagram, faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

export const metadata: Metadata = {
	title: 'Contact - Veronika Brook',
	description: 'Get in touch with Veronika Brook for bookings, collaborations, or inquiries.',
};

export default function Contact() {
	return (
		<main className={styles.main}>
			<div className={styles.contactWrapper}>
				<p>
					<FontAwesomeIcon icon={faPhone} />
					<strong>Cell Phone:</strong>
					<a href='tel:+972545856009'>+972 54 5856009</a>
				</p>
				<p>
					<FontAwesomeIcon icon={faEnvelope} />
					<strong>Email:</strong>
					<a href='mailto:nikaSemagina@gmail.com'>nikaSemagina@gmail.com</a>
				</p>
			</div>
			<div className={styles.socials}>
				<a href="https://www.facebook.com/profile.php?id=100004158911717" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faFacebookF} />
				</a>
				<a href="https://www.instagram.com/vero_nika_brook" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faInstagram} />
				</a>
				<a href="https://www.youtube.com/channel/UCbNqjRLtT6dSh1qCWhIdxNw" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faYoutube} />
				</a>
				<a href="https://music.apple.com/hu/artist/veronika-brook/1502987264" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faApple} />
				</a>
				<a href="https://open.spotify.com/artist/0922dzQ9qrAJ1sTf1hf067" target="_blank" rel="noopener noreferrer">
					<FontAwesomeIcon icon={faSpotify} />
				</a>
			</div>
		</main>
	);
}
