'use client'
import { ItemTemplate } from '@/app/media/photo/components/ItemTemplate'
import { images, skeletonImages } from '@/app/media/photo/data'
import { isDevelopment } from '@/utils/enviroments'
import getElementsByXPath from '@/utils/getElementsByXPath'
import dynamic from 'next/dynamic'
import { CarouselResponsiveOption, Carousel as CarouselComponent } from 'primereact/carousel'
import React, { useEffect, useState } from 'react'
import styles from '../photo.module.scss'

const Carousel = (dynamic(() => import('primereact/carousel').then(({ Carousel }) => Carousel), { ssr: false }) as typeof CarouselComponent)

export default function PhotoGalleria() {
	const [isReady, setReady] = useState<boolean>(false)
	const carouselRef = React.useRef<CarouselComponent>(null)
	
	const responsiveOptions: CarouselResponsiveOption[] = [
		{
			breakpoint: '1400px',
			numVisible: 4,
			numScroll: 1
		},
		{
			breakpoint: '1199px',
			numVisible: 3,
			numScroll: 1
		},
		{
			breakpoint: '767px',
			numVisible: 2,
			numScroll: 1
		},
		{
			breakpoint: '575px',
			numVisible: 1,
			numScroll: 1
		}
	]

	useEffect(() => {
		const observer = new MutationObserver(mutationsList => {
			for (const mutation of mutationsList) {
				if (mutation.type === 'attributes') {
					if ((mutation?.target as Element)?.getAttribute('carousel-data-ready') === 'true') {
						setReady(true)
					}
				}
			}
		})
		if (observer) {
			try {
				observer.observe(document, { attributes: true, childList: true, subtree: true })
			} catch  {}
		}
		return () => {
			observer.disconnect()
		}
	}, [])
	
	useEffect(() => {
		const imageButton = getElementsByXPath({xpath: "//div[@class='p-carousel-items-content']//button"})
		if (imageButton && imageButton.length > 0 && isReady) {
			
			const handleMouseEnter = () => {
				carouselRef.current.stopAutoplay()
			};
			
			const handleMouseLeave = () => {
				carouselRef.current.startAutoplay()
			};
			for (const btn of imageButton) {
				btn.addEventListener('mouseenter', handleMouseEnter);
				btn.addEventListener('mouseleave', handleMouseLeave);
			}
			
			return () => {
				for (const btn of imageButton) {
					btn.removeEventListener('mouseenter', handleMouseEnter);
					btn.removeEventListener('mouseleave', handleMouseLeave);
				}
			};
		}
	}, [isReady])
	
	const autoplayInterval = !isDevelopment ? 3000 : undefined
	
	return (
		<div className={styles.carouselWrapper}>
			<Carousel
				ref={carouselRef}
				id='photo_galleria_carousel'
				value={isReady ? images : skeletonImages}
				numVisible={3}
				autoplayInterval={autoplayInterval}
				orientation='horizontal'
				verticalViewPortHeight='360px'
				carousel-data-ready={'false'}
				itemTemplate={(item) => <ItemTemplate {...item} />}
				responsiveOptions={responsiveOptions}
			/>
		</div>
	)
}