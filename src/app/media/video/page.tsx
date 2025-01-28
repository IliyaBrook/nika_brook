import { StructuredData } from '@/components/StructuredData'
import { Metadata } from 'next'
import styles from './video.module.scss'
import { videos } from '@/app/media/video/data'
import React from 'react'
import VideoGallery from './VideoGallery'

const video = videos[0]

export const metadata: Metadata = {
	title: 'Video Gallery - Veronika Brook | Opera Performances',
	description: 'Watch Veronika Brook’s best opera performances in productions like Rigoletto, La Traviata, and Die Zauberflöte.',
	keywords: [
		'Veronika Brook videos',
		'opera singer videos',
		'classical music videos',
		'Verdi Rigoletto performance',
		'Die Zauberflöte video',
		'La Traviata soprano',
		'Veronika Brook performances'
	],
	openGraph: {
		title: 'Video Gallery - Veronika Brook | Opera Performances',
		description: 'Watch Veronika Brook’s best opera performances in productions like Rigoletto, La Traviata, and Die Zauberflöte.',
		url: 'https://veronikabrook.com/media/video',
		type: 'video.other',
		images: videos.map(video => ({
			url: video.thumbnailImageSrcHd,
			width: 1280,
			height: 720,
			alt: video.alt
		}))
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Video Gallery - Veronika Brook',
		description: 'Enjoy a collection of opera performance videos by Veronika Brook.',
		images: videos.map(video => video.thumbnailImageSrcHd)
	},
	robots: {
		index: true,
		follow: true
	},
	alternates: {
		canonical: 'https://veronikabrook.com/media/video'
	}
};

const videoSchema = {
	'@context': 'https://schema.org',
	'@type': 'VideoGallery',
	name: 'Video Gallery - Veronika Brook',
	description: 'A collection of opera performance videos featuring Veronika Brook in various roles.',
	url: 'https://veronikabrook.com/media/video',
	video: videos.map(video => ({
		'@type': 'VideoObject',
		name: video.title,
		description: video.description,
		thumbnailUrl: video.thumbnailImageSrcHd,
		uploadDate: '2024-01-01',
		contentUrl: `https://www.youtube.com/watch?v=${video.youtubeId}`,
		embedUrl: `https://www.youtube.com/embed/${video.youtubeId}`,
		duration: 'PT3M'
	}))
};

export const dynamic = 'force-static'

export default function Video() {
	return (
		<>
			<StructuredData data={videoSchema} />
			<main className={styles.photo}>
				<title>{video.title}</title>
				<main>
					<VideoGallery />
				</main>
			</main>
		</>
	)
}
