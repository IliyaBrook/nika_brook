'use client'
import { ItemTemplate } from '@/app/media/photo/components/ItemTemplate'
import { images } from '@/app/media/photo/data'
import dynamic from 'next/dynamic'
import type { CarouselResponsiveOption } from 'primereact/carousel'
import React, { useRef } from 'react'
import styles from '../photo.module.scss'

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
		{ breakpoint: '842px', numVisible: 3, numScroll: 1 }
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