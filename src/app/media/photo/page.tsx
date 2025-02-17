'use cache'
import { StructuredData } from '@/components/StructuredData'
import { images } from '@/data'
import { Metadata } from 'next'
import MediaGalleria from '@/app/media/photo/PhotoGalleria'
import styles from './photo.module.scss'
import React from 'react'

async function openGraphVideo() {
	return images.map(img => ({
		url: `https://veronikabrook.com${img.itemImageSrc}`,
		width: 1200,
		height: 800,
		alt: img.alt
	}))
}

async function getTwitterVideo() {
	return images.map(img => `https://veronikabrook.com${img.itemImageSrc}`)
}

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Photo Gallery - Veronika Brook | Exclusive Opera Moments',
		description: 'Discover an exclusive collection of Veronika Brook’s opera performances, featuring roles in Rigoletto, La Traviata, and more.',
		openGraph: {
			title: 'Photo Gallery - Veronika Brook | Exclusive Opera Moments',
			description: 'Discover an exclusive collection of Veronika Brook’s opera performances, featuring roles in Rigoletto, La Traviata, and more.',
			url: 'https://veronikabrook.com/media/photo',
			type: 'website',
			images: await openGraphVideo()
		},
		twitter: {
			card: 'summary_large_image',
			title: 'Photo Gallery - Veronika Brook | Exclusive Opera Moments',
			description: 'Discover an exclusive collection of Veronika Brook’s opera performances.',
			images: await getTwitterVideo()
		},
		alternates: {
			canonical: 'https://veronikabrook.com/media/photo'
		}
	};
}

async function getPhotoSchema() {
	const imagesData = images.map(img => `https://veronikabrook.com${img.itemImageSrc}`)
	return {
		'@context': 'https://schema.org',
		'@type': 'ImageGallery',
		name: 'Photo Gallery - Veronika Brook',
		description: 'A collection of high-quality opera performance images featuring Veronika Brook.',
		url: 'https://veronikabrook.com/media/photo',
		image: imagesData,
		author: {
			'@type': 'Person',
			name: 'Veronika Brook'
		}
	}
}

export default async function Photo() {
	const photoSchema = await getPhotoSchema()
	return (
		<>
			<StructuredData data={photoSchema} />
			<main className={styles.photo}>
				<MediaGalleria />
			</main>
		</>
	)
}
