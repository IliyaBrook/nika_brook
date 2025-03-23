import LinkIconWithToolTip from '@/components/socialNavLinks/LinkIconWithToolTip'
import { appleMusic, facebook, instagram, musixmatch, spotify, youtube } from '@/data'
import classNames from 'classnames'
import React from 'react'
import FacebookIcon from '../../../public/images/icons/faFacebookF.svg'
import InstagramIcon from '../../../public/images/icons/faInstagram.svg'
import YoutubeIcon from '../../../public/images/icons/faYoutube.svg'
import AppleIcon from '../../../public/images/icons/faApple.svg'
import SpotifyIcon from '../../../public/images/icons/faSpotify.svg'
import musixmatchIcon from '../../../public/images/icons/musixmatch.svg'
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
				href={facebook}
				classNameLink={styles.facebookLink}
				tooltipText='Facebook'
				icon={FacebookIcon}
			/>
			<LinkIconWithToolTip
				id='instagramLink'
				href={instagram}
				classNameLink={styles.instagramLink}
				tooltipText='Instagram'
				icon={InstagramIcon}
			/>
			<LinkIconWithToolTip
				id='youtubeLink'
				href={youtube}
				classNameLink={styles.youtubeLink}
				tooltipText='YoutTube'
				icon={YoutubeIcon}
			/>
			<LinkIconWithToolTip
				id='appleLink'
				href={appleMusic}
				classNameLink={styles.appleLink}
				tooltipText='Apple Music'
				icon={AppleIcon}
			/>
			
			<LinkIconWithToolTip
				id='spotifyLink'
				href={spotify}
				classNameLink={styles.spotifyLink}
				tooltipText='Spotify'
				icon={SpotifyIcon}
			/>
			
			<LinkIconWithToolTip
				id='musixmatch'
				href={musixmatch}
				classNameLink={styles.musixmatchLink}
				tooltipText='Musixmatch'
				icon={musixmatchIcon}
				width="17px"
				height="17px"
			/>
		</div>
	)
}

export default SocialNavLinks