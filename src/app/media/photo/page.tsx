'use cache'
import H1SrOnly from '@/components/H1SrOnly/H1SrOnly'
import { StructuredData } from '@/components/StructuredData'
import { baseUrl, images } from '@/data'
import { Metadata } from 'next'
import MediaGalleria from '@/app/media/photo/PhotoGalleria'
import styles from './photo.module.scss'
import React from 'react'

async function openGraphVideo() {
	return images.map(img => ({
		url: `${baseUrl}/${img.itemImageSrc}`,
		width: 1200,
		height: 800,
		alt: img.alt
	}))
}

async function getTwitterVideo() {
	return images.map(img => `${baseUrl}/${img.itemImageSrc}`)
}

export async function generateMetadata(): Promise<Metadata> {
	return {
		title: 'Photo Gallery - Veronika Brook | Exclusive Opera Moments',
		description: 'Discover an exclusive collection of Veronika Brook’s opera performances, featuring roles in Rigoletto, La Traviata, and more.',
		openGraph: {
			title: 'Photo Gallery - Veronika Brook | Exclusive Opera Moments',
			description: 'Discover an exclusive collection of Veronika Brook’s opera performances, featuring roles in Rigoletto, La Traviata, and more.',
			url: baseUrl + '/media/photo',
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
			canonical: baseUrl + '/media/photo'
		}
	};
}

async function getPhotoSchema() {
	const imagesData = images.map(img => `${baseUrl}/${img.itemImageSrc}`)
	return {
		'@context': 'https://schema.org',
		'@type': 'ImageGallery',
		name: 'Photo Gallery - Veronika Brook',
		description: 'A collection of high-quality opera performance images featuring Veronika Brook.',
		url: baseUrl + '/media/photo',
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
				<H1SrOnly>Photo Gallery - Veronika Brook | Exclusive Opera Moments</H1SrOnly>
				<MediaGalleria />
			</main>
		</>
	)
}
