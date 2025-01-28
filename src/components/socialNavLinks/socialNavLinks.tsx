import LinkIconWithToolTip from '@/components/socialNavLinks/LinkIconWithToolTip'
import { faApple, faFacebookF, faInstagram, faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons'
import classNames from 'classnames'
import React from 'react'
import styles from './socialNavLinks.module.scss'

interface ISocialNavLinks {
	className?: string;
	style?: React.CSSProperties;
	iconSize?: string;
}
const SocialNavLinks:React.FC<ISocialNavLinks> = ({className, style}) => {
	
	return (
		<div
			className={classNames(styles.socialNavLinks, className)}
			style={style}
			id="socialNavLinksContainer"
		>
			<LinkIconWithToolTip
				id='facebookLink'
				href='https://www.facebook.com/profile.php?id=100004158911717'
				classNameLink={styles.facebookLink}
				tooltipText='Facebook'
				icon={faFacebookF}
			/>
			<LinkIconWithToolTip
				id='instagramLink'
				href='https://www.instagram.com/vero_nika_brook'
				classNameLink={styles.instagramLink}
				tooltipText='Instagram'
				icon={faInstagram}
			/>
			<LinkIconWithToolTip
				id='youtubeLink'
				href='https://www.youtube.com/channel/UCbNqjRLtT6dSh1qCWhIdxNw'
				classNameLink={styles.youtubeLink}
				tooltipText='YoutTube'
				icon={faYoutube}
			/>
			<LinkIconWithToolTip
				id='appleLink'
				href={'https://music.apple.com/hu/artist/veronika-brook/1502987264'}
				classNameLink={styles.appleLink}
				tooltipText='Apple Music'
				icon={faApple}
			/>
			
			<LinkIconWithToolTip
				id='spotifyLink'
				href={'https://open.spotify.com/artist/0922dzQ9qrAJ1sTf1hf067'}
				classNameLink={styles.spotifyLink}
				tooltipText='Spotify'
				icon={faSpotify}
			/>
		</div>
	)
}

export default SocialNavLinks