import styles from '@/app/media/photo/photo.module.scss'
import type { ImageItem } from '@/types/sharable.types.ts'
import getElementsByXPath from '@/utils/getElementsByXPath'
import classNames from 'classnames'
import { Image as PrimeImage } from 'primereact/image'
import React, { useEffect, useRef, useState } from 'react'


interface ItemTemplateProps extends ImageItem{
	item: ImageItem
	index: number
	onLoad?: () => void
}

export function ItemTemplate({ index, onLoad, ...item }: ItemTemplateProps) {
	const [loaded, setLoaded] = useState(false)
	const primeImgRef = useRef<PrimeImage>(null)
	const creditInserted = useRef(false)
	
	useEffect(() => {
		const primeImageInstance = primeImgRef.current
		if (!primeImageInstance) return
		
		const rawImageEl = primeImageInstance.getImage()
		if (!rawImageEl) return
		
		const handleLoad = () => {
			setLoaded(true)
			onLoad?.()
		}
		
		rawImageEl.addEventListener('load', handleLoad)
		return () => {
			rawImageEl.removeEventListener('load', handleLoad)
		}
	}, [primeImgRef.current])
	
	useEffect(() => {
		if (loaded && !creditInserted.current) {
			const creditTo = `
        <div
          class='mediaPhotoCreditTo--${item.id}'
          style='color: ${item?.creditColor}'
        >
          ${item?.credit ?? ''}
        </div>
      `
			
			const carouselItems = getElementsByXPath({
				xpath: `//div[contains(@class, 'p-carousel-item') and @aria-label='${index}']`
			})
			
			if (carouselItems?.length > 0) {
				const carouselItem = carouselItems[0]
				if (carouselItem instanceof HTMLElement) {
					carouselItem.insertAdjacentHTML('beforeend', creditTo)
					carouselItem.style.position = 'relative'
					creditInserted.current = true
				}
			}
		}
	}, [loaded, index, item])
	
	return (
		<div className={classNames(styles.itemTemplate)}>
			<div className={styles.thumbnailImage}>
				<div className={styles.imageItemWrapper}>
					
					{!loaded && (
						<img
							src="/images/skeleton.svg"
							alt="Loading skeleton"
							className={`${styles.img} ${styles.galleryImgSkeleton}`}
						/>
					)}
					
					<PrimeImage
						ref={primeImgRef}
						src={item.itemImageSrc}
						alt={item.alt}
						preview
						className={`${styles.img} galleryImageItem`}
						style={{ display: loaded ? 'block' : 'none' }}
					/>
				</div>
			</div>
		</div>
	)
}