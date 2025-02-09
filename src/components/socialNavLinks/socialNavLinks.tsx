import LinkIconWithToolTip from '@/components/socialNavLinks/LinkIconWithToolTip'
import { appleMusic, facebook, instagram, musixmatch, spotify, youtube } from '@/data'
import { faApple, faFacebookF, faInstagram, faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons'
import classNames from 'classnames'
import React from 'react'
import musixmatchIcon from '../../../public/images/icons/musixmatch-svgrepo-com.svg'
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
				icon={faFacebookF}
			/>
			<LinkIconWithToolTip
				id='instagramLink'
				href={instagram}
				classNameLink={styles.instagramLink}
				tooltipText='Instagram'
				icon={faInstagram}
			/>
			<LinkIconWithToolTip
				id='youtubeLink'
				href={youtube}
				classNameLink={styles.youtubeLink}
				tooltipText='YoutTube'
				icon={faYoutube}
			/>
			<LinkIconWithToolTip
				id='appleLink'
				href={appleMusic}
				classNameLink={styles.appleLink}
				tooltipText='Apple Music'
				icon={faApple}
			/>
			
			<LinkIconWithToolTip
				id='spotifyLink'
				href={spotify}
				classNameLink={styles.spotifyLink}
				tooltipText='Spotify'
				icon={faSpotify}
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