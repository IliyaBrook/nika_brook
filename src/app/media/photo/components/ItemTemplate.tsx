import styles from '@/app/media/photo/photo.module.scss'
import type { ImageItem } from '@/types/sharable.types.ts'
import getElementsByXPath from '@/utils/getElementsByXPath'
import classNames from 'classnames'
import { Image as PrimeImage } from 'primereact/image'
import React, { useEffect, useRef } from 'react'


export const ItemTemplate = ({ isReady, index,...item }: ImageItem) => {
	const currentElementRendered = useRef(0)
	
	useEffect(() => {
		if (isReady) {
			const creditTo =
				`
				<div
					class='mediaPhotoCreditTo--${item.id}'
					style="color: ${item?.creditColor}"
				>
					${item?.credit ?? ''}
				</div>
			`
			const carouselItems = getElementsByXPath({xpath: `//div[contains(@class, 'p-carousel-item') and @aria-label='${index}']`})
			if (carouselItems?.length > 0) {
				const carouselItem = carouselItems[0]
				if (carouselItem instanceof HTMLElement && currentElementRendered.current === 0) {
					carouselItem.insertAdjacentHTML('beforeend', creditTo)
					currentElementRendered.current++
					carouselItem.style.position = 'relative'
				}
			}
		}
	}, [isReady])
	
	return (
		<div className={classNames(styles.itemTemplate)}>
			<div className={styles.thumbnailImage}>
				{isReady ? <PrimeImage
					src={item?.itemImageSrc}
					alt={item?.alt}
					preview
					loading='lazy'
					className={styles.img}
					
				/> : 	<PrimeImage
					src='/images/skeleton.svg'
					alt='sekelton'
					preview
					loading='eager'
					className={styles.img}
				/>}
			</div>
		</div>
	)
}


