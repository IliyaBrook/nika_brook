import { Metadata } from 'next'
import MediaGalleria from '@/app/media/photo/components/PhotoGalleria'
import styles from './photo.module.scss'
import React from 'react'

export const metadata: Metadata = {
	title: 'Photo Gallery - Veronika Brook',
	description:
		'Explore the photo gallery of Veronika Brook, showcasing her roles in operas like Rigoletto, La Traviata, and more.',
	keywords: [
		'Veronika Brook photos',
		'photo gallery',
		'opera performances',
		'Rigoletto photos',
		'La Traviata photos',
		'classical music photography'
	],
	openGraph: {
		title: 'Photo Gallery - Veronika Brook',
		description: 'Browse photos of Veronika Brook in various opera roles.',
		url: 'https://veronikabrook.com/media/photo',
		type: 'article',
		images: [
			{
				url: 'https://veronikabrook.com/images/mediaPhoto/photo2.jpg',
				width: 1200,
				height: 630,
				alt: 'Veronika Brook in performance'
			},
			{
				url: 'https://veronikabrook.com/images/mediaPhoto/photo10.jpg',
				width: 1200,
				height: 630,
				alt: 'Veronika Brook portrait'
			}
		]
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Photo Gallery - Veronika Brook',
		description: 'Browse photos of Veronika Brook in various opera roles.',
		images: ['https://veronikabrook.com/images/mediaPhoto/photo2.jpg']
	},
	robots: {
		index: true,
		follow: true
	}
};

const photoSchema = {
	'@context': 'https://schema.org',
	'@type': 'ImageGallery',
	name: 'Photo Gallery - Veronika Brook',
	description: 'A collection of photos featuring Veronika Brook in opera roles.',
	image: [
		'https://veronikabrook.com/images/mediaPhoto/photo2.jpg',
		'https://veronikabrook.com/images/mediaPhoto/photo10.jpg',
		'https://veronikabrook.com/images/mediaPhoto/photo12.jpg'
	],
	author: {
		'@type': 'Person',
		name: 'Veronika Brook'
	}
};

export const dynamic = 'force-static'

export default function Photo() {
	return (
		<div className={styles.main}>
			<main>
				<MediaGalleria />
			</main>
		</div>
	)
}
