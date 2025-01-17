import { Metadata } from 'next'
import styles from './video.module.scss'
import { videos } from '@/app/media/video/data'
import React from 'react'
import VideoGallery from './components/VideoGallery'

const video = videos[0]

export const metadata: Metadata = {
	title: 'Media - Veronika Brook',
	description:
		'Explore video content featuring Veronika Brook, including her roles in various operas like Rigoletto, La traviata, and Die Zauberflote.'
}

export const dynamic = 'force-static'

export default function Video() {
	return (
		<div className={styles.main}>
			<title>{video.title}</title>
			<main>
				<VideoGallery />
			</main>
		</div>
	)
}
