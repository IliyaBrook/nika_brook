'use client'
import { ItemTemplate } from '@/app/media/photo/components/ItemTemplate'
import { images } from '@/app/media/photo/data'
import { isDevelopment } from '@/utils/enviroments'
import getElementsByXPath from '@/utils/getElementsByXPath'
import dynamic from 'next/dynamic'
import { Carousel as CarouselComponent, CarouselResponsiveOption } from 'primereact/carousel'
import React, { useEffect, useRef, useState } from 'react'
import styles from '../photo.module.scss'

const Carousel = (dynamic(() => import('primereact/carousel').then(({ Carousel }) => Carousel), { ssr: false }) as typeof CarouselComponent)

export default function PhotoGalleria() {
	const carouselRef = useRef<CarouselComponent>(null)
	
	
	const [isClient, setIsClient] = useState<boolean>(false)
	const [isReady, setReady] = useState<boolean>(false)
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
		setIsClient(true)
	}, [])
	
	
	useEffect(() => {
		
		if (isClient) {
			
			const observer = new MutationObserver(mutationsList => {
				for (const mutation of mutationsList) {
			
					if (mutation.type === 'attributes' && mutation.target instanceof Element) {
						if (mutation.target?.tagName === 'IMG') {
							const imageNumbers = images.length
							const carouselItems = document.querySelectorAll('.p-carousel-item')
							if (carouselItems.length === imageNumbers) {
								setReady(true)
							}
						}
					}
				}
			})
			if (observer) {
				try {
					observer.observe(document, { childList: true, subtree: true, attributes: true })
				} catch (e) {
					console.log("observer error :", e)
					
				}
			}
			
			return () => {
				observer.disconnect()
			}
		}
	}, [isClient])
	
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
	
	// const autoplayInterval = !isDevelopment ? 3000 : undefined
	const autoplayInterval = !isDevelopment ? 3000 : undefined
	
	return (
		<div className={styles.carouselWrapper}>
			<Carousel
				ref={carouselRef}
				value={images}
				numVisible={3}
				autoplayInterval={autoplayInterval}
				orientation='horizontal'
				verticalViewPortHeight='360px'
				itemTemplate={(item) =>  <ItemTemplate {...item} isReady={isReady} />}
				responsiveOptions={responsiveOptions}
			/>
		</div>
	)
}