import React from 'react'
import styles from './medialayout.module.scss'

export default function MediaLayout({
	                                   children,
                                   }: {
	children: React.ReactNode
}) {
	return <section className={styles.mediaLayout}>{children}</section>
}