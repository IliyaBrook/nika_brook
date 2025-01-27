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
}

export function ItemTemplate({ index, onLoad, ...item }: ItemTemplateProps) {
	const [loaded, setLoaded] = useState(false)
	const creditInserted = useRef(false)
	// useEffect(() => {
	// 	if (!loaded || creditInserted.current) return
	//
	// 	const creditTo = `
  //     <div class='mediaPhotoCreditToWrapper'>
  //       <div
	//         class='mediaPhotoCreditTo'
	//         style='color: ${item?.creditColor}'
  //     >
  //         ${item?.credit ?? ''}
  //       </div>
  //   </div>
  //   `
	// 	const carouselItems = getElementsByXPath({
	// 		xpath: `//div[contains(@class, 'p-carousel-item') and @aria-label='${index}']`
	// 	})
	//
	// 	if (carouselItems?.length > 0) {
	// 		const carouselItem = carouselItems[0]
	// 		if (carouselItem instanceof HTMLElement) {
	// 			carouselItem.insertAdjacentHTML('beforeend', creditTo)
	// 			carouselItem.style.position = 'relative'
	// 			creditInserted.current = true
	// 		}
	// 	}
	// }, [loaded, index, item])
	
	return (
		<div className={classNames(styles.itemTemplate)}>
			<div className={styles.thumbnailImage}>
				{!loaded && (
					<img
						src='/images/skeleton.svg'
						alt='Loading skeleton'
						className={styles.img}
					/>
				)}
				<PrimeImage
					src={item.itemImageSrc}
					alt={item.alt}
					preview
					aria-labelledby={item?.creditColor}
					loading='eager'
					style={{ display: loaded ? 'block' : 'none' }}
					className={styles.img}
					pt={{
						image: {
							onLoad: () => {
								setTimeout(() => {
									setLoaded(true)
									onLoad?.()
								}, 1000)
							},
						}
					}}
				/>
				{loaded && item.credit && (
					<div className={styles.mediaPhotoCreditToWrapper}>
						<div
							className={styles.mediaPhotoCreditTo}
							style={{ color: item.creditColor }}
						>
							{item.credit}
						</div>
					</div>
				)}
			</div>
		</div>
	)
}