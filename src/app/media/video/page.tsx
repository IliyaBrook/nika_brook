import { Metadata } from 'next'
import styles from './video.module.scss'
import { videos } from '@/app/media/video/data'
import React from 'react'
import { Skeleton } from 'primereact/skeleton'
import dynamic from 'next/dynamic'
import { logVisits } from '@/utils/logVisits'
import { ScrollBarWrapper } from '@/components/ScrollBarWrapper/ScrollBarWrapper'

const VideoGallery = dynamic(() => import('./components/VideoGallery'), {
	loading: () => <Skeleton height="40vh" borderRadius="0" />
})

const video = videos[0]

export const metadata: Metadata = {
	title: 'Media - Veronika Brook',
	description:
		'Explore video content featuring Veronika Brook, including her roles in various operas like Rigoletto, La traviata, and Die Zauberflote.'
}

export default function Video() {
	void logVisits('video')
	return (
		<ScrollBarWrapper height="100vh">
			<title>{video.title}</title>
			<main className={styles.main}>
				<VideoGallery />
			</main>
		</ScrollBarWrapper>
	)
}
