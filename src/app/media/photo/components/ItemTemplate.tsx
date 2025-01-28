import styles from '@/app/media/photo/photo.module.scss'
import type { ImageItem } from '@/types/sharable.types.ts'
import getElementsByXPath from '@/utils/getElementsByXPath'
import classNames from 'classnames'
import { Image as PrimeImage } from 'primereact/image'
import React, { useEffect, useRef, useState } from 'react'


interface ItemTemplateProps extends ImageItem {
	item: ImageItem
	index: number
	onLoad?: () => void
	setIsPreviewOpen: (state: boolean) => void
}

export function ItemTemplate({ index, ...item }: ItemTemplateProps) {
	const [loaded, setLoaded] = useState(false)
	const creditInserted = useRef(false)
	const [hasError, setHasError] = useState(false)
	
	useEffect(() => {
		const img = new Image()
		img.src = item.itemImageSrc
		img.onload = () => {
			setLoaded(true)
		}
		img.onerror = () => setHasError(true)
	}, [item.itemImageSrc])
	
	useEffect(() => {
		if (!loaded || creditInserted.current) return
		
		const creditTo = `
			<div class='mediaPhotoCreditTo' style='color: ${item?.creditColor}'>
				${item?.credit ?? ''}
			</div>
		`
		const carouselItems = getElementsByXPath({
			xpath: `//div[contains(@class, 'p-carousel-item') and @aria-label='${index}']`
		})
		
		if (carouselItems?.length > 0) {
			const carouselItem = carouselItems[0]
			if (carouselItem instanceof HTMLElement) {
				const pImage = carouselItem?.childNodes?.[0]?.childNodes?.[0]?.childNodes[0]
				if (pImage instanceof HTMLElement) {
					pImage.insertAdjacentHTML('beforeend', creditTo)
					creditInserted.current = true
				}
			}
		}
	}, [loaded, item])

	
	return (
		<div className={classNames(styles.itemTemplate)}>
			<div className={styles.thumbnailImage}>
				{(!loaded || hasError) && (
					<img
						src="/images/skeleton.svg"
						alt="Loading skeleton"
						className={styles.img}
					/>
				)}
				{!hasError && (
					<PrimeImage
						src={item.itemImageSrc}
						alt={item.alt}
						preview
						aria-labelledby={item?.creditColor}
						loading="eager"
						style={{ display: loaded ? 'block' : 'none' }}
						className={styles.img}
						onError={() => setHasError(true)}
						pt={{
							image: {
								onLoad: () => {
									setLoaded(true)
								},
								title: item.alt,
							},
						}}
					/>
				)}
			</div>
		</div>
	)
}