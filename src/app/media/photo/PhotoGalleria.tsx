'use client'
import { ItemTemplate } from '@/app/media/photo/ItemTemplate'
import { images } from '@/app/media/photo/data'
import dynamic from 'next/dynamic'
import type { CarouselResponsiveOption } from 'primereact/carousel'
import React, { useRef } from 'react'
import styles from './photo.module.scss'

const Carousel = dynamic(
	() =>
		import('primereact/carousel').then(
			({ Carousel }) => Carousel
		),
	{
		ssr: false
	}
)

export const PhotoGalleria = () =>  {
	const carouselRef = useRef<any>(null)
	
	const responsiveOptions: CarouselResponsiveOption[] = [
		{ breakpoint: '1200px', numVisible: 4, numScroll: 1 },
		{ breakpoint: '986px', numVisible: 3, numScroll: 1 },
		{ breakpoint: '770px', numVisible: 2, numScroll: 1 },
		{ breakpoint: '420px', numVisible: 1, numScroll: 1 },
	]
	
	return (
		<div className={styles.carouselWrapper}>
			<Carousel
				/* @ts-ignore */
				ref={carouselRef}
				value={images}
				circular
				numVisible={5}
				responsiveOptions={responsiveOptions}
				orientation="horizontal"
				verticalViewPortHeight="360px"
				itemTemplate={(item) => {
					return <ItemTemplate
						{...item}
						index={item.index}
					/>
				}}
			/>
		</div>
	)
}

export default PhotoGalleria