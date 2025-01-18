'use client'
import { type IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { Tooltip } from 'primereact/tooltip'
import React from 'react'
import classNames from 'classnames'
import styles from './socialNetLinks.module.scss'

interface ILinkIconWithToolTip {
	classNameLink: string,
	icon: IconDefinition,
	href: string,
	tooltipText: string
	id?: string
}

const LinkIconWithToolTip: React.FC<ILinkIconWithToolTip> = ({
	                                                             classNameLink,
	                                                             tooltipText,
	                                                             href = '#',
	                                                             icon,
	                                                             id
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
          <FontAwesomeIcon icon={icon} />
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