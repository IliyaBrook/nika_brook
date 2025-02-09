import styles from './ScrollBarWrapper.module.scss'
import { ScrollPanel } from 'primereact/scrollpanel'
import React, { ReactNode } from 'react'
import classNames from 'classnames'

interface ScrollBarWrapperProps {
	children: ReactNode
	style?: React.CSSProperties
	height?: string
	className?: string
}

export const ScrollBarWrapper: React.FC<ScrollBarWrapperProps> = ({
	children,
	style,
	height,
	className
}) => {
	return (
		<div
			className={classNames(styles.root, className)}
			style={{
				height: height,
				...style
			}}
		>
			<ScrollPanel
				
				className={styles.scrollPanel}
			>
				{children}
			</ScrollPanel>
		</div>
	)
}
