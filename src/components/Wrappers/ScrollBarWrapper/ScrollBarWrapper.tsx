'use client'
import styles from './ScrollBarWrapper.module.scss'
import { ScrollPanel } from 'primereact/scrollpanel'
import React, { ReactNode, useEffect, useState } from 'react'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'

interface ScrollBarWrapperProps {
	children: ReactNode
	style?: React.CSSProperties
	height?: string
	className?: string
}

export const ScrollBarWrapper: React.FC<ScrollBarWrapperProps> = ({
	children,
	style,
	height = '100%',
	className
}) => {
	const pathname = usePathname()
	const isHomeDefault = pathname === '/'
	const [isHome, setIsHome] = useState(isHomeDefault)
	useEffect(() => {
		setIsHome(isHomeDefault)
	}, [isHomeDefault])

	return (
		<div
			className={classNames(styles.root, className)}
		>
			<ScrollPanel
				className={styles.scrollPanel}
				style={{
					...style,
					height: !isHome ? height : '100vh',
				}}
			>
				{children}
			</ScrollPanel>
		</div>
	)
}
