import LinkIconWithToolTip from '@/components/Navbar/components/socialNetLinks/LinkIconWithToolTip'
import { faApple, faFacebookF, faInstagram, faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons'
import styles from './socialNetLinks.module.scss'


export default function SocialNetLinks() {
	return (
		<div className={styles.socialNetLinks}>
			<LinkIconWithToolTip
				href='https://www.facebook.com/profile.php?id=100004158911717'
				classNameLink={styles.facebookLink}
				tooltipText='Facebook'
				icon={faFacebookF}
			/>
			<LinkIconWithToolTip
				href='https://www.instagram.com/vero_nika_brook'
				classNameLink={styles.instagramLink}
				tooltipText='Instagram'
				icon={faInstagram}
			/>
			<LinkIconWithToolTip
				href='https://www.youtube.com/channel/UCbNqjRLtT6dSh1qCWhIdxNw'
				classNameLink={styles.youtubeLink}
				tooltipText='YoutTube'
				icon={faYoutube}
			/>
			<LinkIconWithToolTip
				href={'https://music.apple.com/hu/artist/veronika-brook/1502987264'}
				classNameLink={styles.appleLink}
				tooltipText='Apple Music'
				icon={faApple}
			/>
			
			<LinkIconWithToolTip
				href={'https://open.spotify.com/artist/0922dzQ9qrAJ1sTf1hf067'}
				classNameLink={styles.spotifyLink}
				tooltipText='Spotify'
				icon={faSpotify}
			/>
		</div>
	)
}