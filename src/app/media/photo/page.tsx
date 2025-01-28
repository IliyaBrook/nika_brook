import { images } from '@/app/media/photo/data'
import { StructuredData } from '@/components/StructuredData'
import { Metadata } from 'next'
import MediaGalleria from '@/app/media/photo/components/PhotoGalleria'
import styles from './photo.module.scss'
import React from 'react'

export const metadata: Metadata = {
	title: 'Photo Gallery - Veronika Brook | Exclusive Opera Moments',
	description: 'Discover an exclusive collection of Veronika Brook’s opera performances, featuring roles in Rigoletto, La Traviata, and more.',
	keywords: [
		'Veronika Brook photos',
		'photo gallery',
		'opera singer photos',
		'classical music photography',
		'Rigoletto opera images',
		'La Traviata photos',
		'Veronika Brook exclusive photos',
		'stage performance pictures'
	],
	openGraph: {
		title: 'Photo Gallery - Veronika Brook | Exclusive Opera Moments',
		description: 'Discover an exclusive collection of Veronika Brook’s opera performances, featuring roles in Rigoletto, La Traviata, and more.',
		url: 'https://veronikabrook.com/media/photo',
		type: 'website',
		images: images.map(img => ({
			url: `https://veronikabrook.com${img.itemImageSrc}`,
			width: 1200,
			height: 800,
			alt: img.alt
		}))
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Photo Gallery - Veronika Brook | Exclusive Opera Moments',
		description: 'Discover an exclusive collection of Veronika Brook’s opera performances.',
		images: images.map(img => `https://veronikabrook.com${img.itemImageSrc}`)
	},
	robots: {
		index: true,
		follow: true
	},
	alternates: {
		canonical: 'https://veronikabrook.com/media/photo'
	}
};

const photoSchema = {
	'@context': 'https://schema.org',
	'@type': 'ImageGallery',
	name: 'Photo Gallery - Veronika Brook',
	description: 'A collection of high-quality opera performance images featuring Veronika Brook.',
	url: 'https://veronikabrook.com/media/photo',
	image: images.map(img => `https://veronikabrook.com${img.itemImageSrc}`),
	author: {
		'@type': 'Person',
		name: 'Veronika Brook'
	}
};

export default function Photo() {
	return (
		<>
			<StructuredData data={photoSchema} />
			<main className={styles.photo}>
				<MediaGalleria />
			</main>
		</>
	)
}
