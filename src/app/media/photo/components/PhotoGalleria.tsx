'use client'
import { images } from '@/app/media/photo/data'
import { isDevelopment } from '@/utils/enviroments'
import getElementsByXPath from '@/utils/getElementsByXPath'
import dynamic from 'next/dynamic'
import { CarouselResponsiveOption } from 'primereact/carousel'
import React, { useCallback, useEffect, useRef, useState } from 'react'
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
	const [isPreviewOpen, setIsPreviewOpen] = useState(false)
	const handleImageLoad = () => setLoadedCount(prev => prev + 1)
	
	const responsiveOptions: CarouselResponsiveOption[] = [
		{ breakpoint: '1400px', numVisible: 4, numScroll: 1 },
		{ breakpoint: '1199px', numVisible: 3, numScroll: 1 },
		{ breakpoint: '767px', numVisible: 2, numScroll: 1 },
		{ breakpoint: '575px', numVisible: 1, numScroll: 1 }
	]
	
	const startAutoplay = () => {
		if (carouselRef.current  && !isPreviewOpen){
			carouselRef.current.startAutoplay()
		}
	}
	
	const stopAutoplay = () => {
		if (carouselRef.current){
			carouselRef.current.stopAutoplay()
		}
	}
	
	useEffect(() => {
		if (loadedCount === images.length) {
			startAutoplay()
		}
	}, [loadedCount])
	
	useEffect(() => {
		if (isPreviewOpen) {
			stopAutoplay()
		} else {
			startAutoplay()
		}
	}, [isPreviewOpen])
	
	useEffect(() => {
		const imageButton = getElementsByXPath({xpath: "//div[@class='p-carousel-items-content']//button"})
		if (imageButton && imageButton.length > 0 && loadedCount > 0) {
			for (const btn of imageButton) {
				btn.addEventListener('mouseenter', stopAutoplay);
				btn.addEventListener('mouseleave', startAutoplay);
			}

			return () => {
				for (const btn of imageButton) {
					btn.removeEventListener('mouseenter', stopAutoplay);
					btn.removeEventListener('mouseleave', startAutoplay);
				}
			};
		}
	}, [loadedCount])
	
	
	// const autoplayInterval = !isDevelopment ? 5000 : undefined
	const autoplayInterval = 5000
	
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
						setIsPreviewOpen={setIsPreviewOpen}
					/>
				)}
			/>
		</div>
	)
}