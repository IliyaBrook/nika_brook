'use client'
import { ItemTemplate } from '@/app/media/photo/components/ItemTemplate'
import { images } from '@/app/media/photo/data'
import dynamic from 'next/dynamic'
import { CarouselResponsiveOption } from 'primereact/carousel'
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
		{ breakpoint: '1400px', numVisible: 4, numScroll: 1 },
		{ breakpoint: '1199px', numVisible: 3, numScroll: 1 },
		{ breakpoint: '767px', numVisible: 2, numScroll: 1 },
		{ breakpoint: '575px', numVisible: 1, numScroll: 1 }
	]
	
	return (
		<div className={styles.carouselWrapper}>
			<Carousel
				/* @ts-ignore */
				ref={carouselRef}
				value={images}
				circular
				numVisible={3}
				orientation="horizontal"
				verticalViewPortHeight="360px"
				responsiveOptions={responsiveOptions}
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