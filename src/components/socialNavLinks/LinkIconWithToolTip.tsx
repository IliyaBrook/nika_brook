'use client'
import { type IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { Tooltip } from 'primereact/tooltip'
import React from 'react'
import classNames from 'classnames'
import Image, { type StaticImageData } from 'next/image'
import styles from './socialNavLinks.module.scss'

interface ILinkIconWithToolTip {
	classNameLink: string;
	icon: IconDefinition | StaticImageData;
	href: string;
	tooltipText: string;
	id?: string;
	height?: string;
	width?: string;
}

const LinkIconWithToolTip: React.FC<ILinkIconWithToolTip> = ({
	                                                             classNameLink,
	                                                             tooltipText,
	                                                             href = '#',
	                                                             icon,
	                                                             id,
	                                                             height,
	                                                             width
                                                             }) => {
	const classNameTarget = `${styles.icon}_target`
	return (
		<Link
			href={href}
			target='_blank'
			rel='noopener noreferrer'
			className={classNameLink}
			data-text={tooltipText}
			id={id}
		>
      <span
	      className={classNames(styles.icon, classNameTarget)}
	      data-pr-tooltip={tooltipText}
	      data-pr-position='top'
      >
        {'src' in icon ? (
	        <Image
		        src={icon}
		        alt={tooltipText}
		        width={parseInt(width, 10)}
		        height={parseInt(height, 10)}
		        unoptimized
		        className={styles.musixmatchIcon}
	        />
        ) : (
	        <FontAwesomeIcon icon={icon} width={width} height={height} />
        )}
      </span>
			<Tooltip
				target={`.${classNameTarget}`}
				showDelay={1000}
				hideDelay={300}
			/>
		</Link>
	)
}

export default LinkIconWithToolTip