'use client'
import { images } from '@/app/media/photo/data'
import { isDevelopment } from '@/utils/enviroments'
import dynamic from 'next/dynamic'
import { CarouselResponsiveOption } from 'primereact/carousel'
import React, { useEffect, useRef, useState } from 'react'
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

const ItemTemplate = dynamic(
	() =>
		import('@/app/media/photo/components/ItemTemplate').then(
			({ ItemTemplate }) => ItemTemplate
		),
	{
		ssr: false
	}
)

export default function PhotoGalleria() {
	const carouselRef = useRef<any>(null)
	const [loadedCount, setLoadedCount] = useState(0)
	const handleImageLoad = () => setLoadedCount(prev => prev + 1)
	console.log('loadedCount:', loadedCount)
	
	const responsiveOptions: CarouselResponsiveOption[] = [
		{ breakpoint: '1400px', numVisible: 4, numScroll: 1 },
		{ breakpoint: '1199px', numVisible: 3, numScroll: 1 },
		{ breakpoint: '767px', numVisible: 2, numScroll: 1 },
		{ breakpoint: '575px', numVisible: 1, numScroll: 1 }
	]
	
	useEffect(() => {
		if (loadedCount === images.length) {
			carouselRef.current?.startAutoplay()
		}
	}, [loadedCount])
	
	useEffect(() => {
		carouselRef.current?.stopAutoplay()
	}, [])
	
	
	// const autoplayInterval = !isDevelopment ? 3000 : undefined
	const autoplayInterval = 3000
	
	return (
		<div className={styles.carouselWrapper}>
			
			<Carousel
				/* @ts-ignore */
				ref={carouselRef}
				value={images}
				numVisible={3}
				orientation='horizontal'
				verticalViewPortHeight='360px'
				autoplayInterval={autoplayInterval}
				responsiveOptions={responsiveOptions}
				itemTemplate={(item) => (
					<ItemTemplate
						{...item}
						index={images.indexOf(item)}
						onLoad={handleImageLoad}
					/>
				)}
			/>
		</div>
	)
}