import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube, faApple, faSpotify } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import styles from './socialNetLinks.module.scss';

export default function SocialNetLinks() {
	return (
		<div className={styles.socialNetLinks}>
			<Link href="#" target="_blank" rel="noopener noreferrer" className={styles.facebookLink}>
				<FontAwesomeIcon icon={faFacebookF} className={styles.icon}/>
			</Link>
			<Link href="#" target="_blank" rel="noopener noreferrer" className={styles.instagramLink} data-text="Instagram">
				<FontAwesomeIcon icon={faInstagram} className={styles.icon}/>
			</Link>
			<Link href="#" target="_blank" rel="noopener noreferrer" className={styles.youtubeLink}>
				<FontAwesomeIcon icon={faYoutube} className={styles.icon}/>
			</Link>
			<Link href="#" target="_blank" rel="noopener noreferrer" className={styles.appleLink}>
				<FontAwesomeIcon icon={faApple} className={styles.icon} />
			</Link>
			<Link href="#" target="_blank" rel="noopener noreferrer" className={styles.spotifyLink}>
				<FontAwesomeIcon icon={faSpotify} className={styles.icon}/>
			</Link>
		</div>
	);
}