import React, { forwardRef, type ReactHTMLElement, type RefObject } from 'react'
import LinkIconWithToolTip from '@/components/Navbar/components/socialNetLinks/LinkIconWithToolTip'
import { faApple, faFacebookF, faInstagram, faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons'
import styles from './socialNetLinks.module.scss'

const SocialNetLinks = forwardRef<HTMLDivElement>(( _props, ref) => {
	
	return (
		<div
			className={styles.socialNetLinks}
			ref={ref}
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
})

export default SocialNetLinks