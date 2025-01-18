'use client'
import React from 'react'
import styles from './BioBorderedContainer.module.scss'

interface IBioBorderedContainer {
	children?: React.ReactNode
}

export const BioBorderedContainer: React.FC<IBioBorderedContainer> = ({children}) => {
	return (
		<div className={styles.bioBorderedContainer}>
			{children}
		</div>
	)
}