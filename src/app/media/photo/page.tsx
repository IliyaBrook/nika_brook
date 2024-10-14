import { Metadata } from 'next'
import MediaGalleria from '@/app/media/photo/components/PhotoGalleria'
import styles from './photo.module.scss'
import React from 'react'

export const metadata: Metadata = {
	title: 'Media - Veronika Brook',
	description:
		'Explore photo content featuring Veronika Brook, including her roles in various operas like Rigoletto, La traviata, and Die Zauberflote.',
	openGraph: {
		title: 'Media - Veronika Brook',
		description:
			'Explore photo content featuring Veronika Brook, including her roles in various operas.',
		type: 'article'
	}
}

export default function Photo() {
	return (
		<div className={styles.main}>
			<main>
				<MediaGalleria />
			</main>
		</div>
	)
}
