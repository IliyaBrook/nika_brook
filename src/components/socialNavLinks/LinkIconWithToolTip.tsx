'use client'
import classNames from 'classnames'
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import { Tooltip } from 'primereact/tooltip'
import React from 'react'
import styles from './socialNavLinks.module.scss'

interface ILinkIconWithToolTip {
	classNameLink: string;
	icon: StaticImageData;
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
			aria-label={tooltipText}
		>
      <span
	      className={classNames(styles.icon, classNameTarget)}
	      data-pr-tooltip={tooltipText}
	      data-pr-position='top'
      >
	      
	      <Image
		      src={icon}
		      alt={tooltipText}
		      width={parseInt(width, 10)}
		      height={parseInt(height, 10)}
		      className={styles.musixmatchIcon}
	      />
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