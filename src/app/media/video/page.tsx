'use cache'
import H1SrOnly from '@/components/H1SrOnly/H1SrOnly'
import { StructuredData } from '@/components/StructuredData'
import { baseUrl, videos } from '@/data'
import { Metadata } from 'next'
import Head from 'next/head'
import React from 'react'
import styles from './video.module.scss'
import VideoGallery from './VideoGallery'

export async function generateMetadata(): Promise<Metadata> {
	const videoImages = await getVideoImages();
	const twitterImages = await getTwitterImages();
	
	return {
		title: 'Video Gallery - Veronika Brook | Opera Performances',
		description: 'Explore media content featuring Veronika Brook, including her roles in various operas like Rigoletto, La traviata, and Die Zauberflote.',
		openGraph: {
			title: 'Video Gallery - Veronika Brook | Opera Performances',
			description: 'Explore media content featuring Veronika Brook, including her roles in various operas like Rigoletto, La traviata, and Die Zauberflote.',
			url: baseUrl + '/media/video',
			type: 'video.other',
			images: videoImages
		},
		twitter: {
			card: 'summary_large_image',
			title: 'Video Gallery - Veronika Brook',
			description: 'Enjoy a collection of opera performance videos by Veronika Brook.',
			images: twitterImages
		},
		alternates: {
			canonical: baseUrl + '/media/video'
		}
	};
}

async function getVideoImages(): Promise<{ url: string; width: number; height: number; alt: string }[]> {
	return videos.map(video => ({
		url: video.thumbnailUrl,
		width: 1280,
		height: 720,
		alt: video.alt
	}))
}

async function getTwitterImages() {
	return videos.map(video => video.thumbnailUrl)
}

async function getVideoSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'VideoGallery',
		name: 'Video Gallery - Veronika Brook',
		description: 'A collection of opera performance videos featuring Veronika Brook in various roles.',
		url: baseUrl + '/media/video',
		video: videos.map(video => ({
			'@type': 'VideoObject',
			name: video.alt,
			description: video.description,
			thumbnailUrl: video.thumbnailUrl,
			uploadDate: '2024-01-01',
			contentUrl: `https://www.youtube.com/watch?v=${video.youtubeId}`,
			embedUrl: `https://www.youtube.com/embed/${video.youtubeId}`,
			duration: 'PT3M'
		}))
	};
}

export default async function Video() {
	const videoSchema = await getVideoSchema();
	return (
		<>
			<Head>
				<title>Veronika Brook Video Gallery - Exclusive Opera Moments Worldwide</title>
				<meta name="description" content="Browse the photo gallery of Veronika Brook, a coloratura soprano of the Israeli Opera, featuring her performances, rehearsals, and exclusive moments from around the world." />
			</Head>
			<StructuredData data={videoSchema} />
			<main className={styles.photo}>
				<H1SrOnly>Video Gallery of Veronika Brook - Coloratura Soprano | Israel Opera Performances</H1SrOnly>
				<VideoGallery />
			</main>
		</>
	)
}
