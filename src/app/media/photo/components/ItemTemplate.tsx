import styles from '@/app/media/photo/photo.module.scss'
import type { ImageItem } from '@/types/sharable.types.ts'
import getElementsByXPath from '@/utils/getElementsByXPath'
import classNames from 'classnames'
import { Image as PrimeImage, ImageProps } from 'primereact/image'
import React, { type FC, useEffect, useRef } from 'react'


export const ItemTemplate = ({ isReady, index,...item }: ImageItem) => {
	const currentElementRendered = useRef(0)
	
	// useEffect(() => {
	// 	if (isReady) {
	// 		const creditTo =
	// 			`
	// 			<div
	// 				class='mediaPhotoCreditTo'
	// 				style="color: ${item?.creditColor}"
	// 			>
	// 				${item?.credit ?? ''}
	// 			</div>
	// 	`
	// 		//]
	// 		const courseItemSelector = getElementsByXPath({xpath: `//div[contains(@class, 'p-carousel-item') and @aria-label='${item.index}']//div[contains(@class, 'photo_thumbnailImage')`})
	// 		if (courseItemSelector.length > 0 && courseItemSelector[0] instanceof HTMLElement) {
	// 			console.log("courseItemSelector:", courseItemSelector)
	// 		}
	//
	//
	// 		// if (imageSelectors?.length > 0 && currentElementRendered.current === 0) {
	// 		// 	if (imageSelectors[0] instanceof HTMLElement) {
	// 		// 		imageSelectors[0].insertAdjacentHTML('beforeend', creditTo)
	// 		// 		currentElementRendered.current++
	// 		// 	}
	// 		// }
	// 	}
	//
	// }, [isReady])
	
	

	useEffect(() => {
		const creditTo = `
			<div class='mediaPhotoCreditTo--${item.id}' style="color: ${item?.creditColor}">${item?.credit ?? ''}</div>
		`
		const imageSelectors = getElementsByXPath({xpath: `//div[contains(@class, 'p-carousel-item') and @aria-label='${index}']//div[contains(@class, 'photo_thumbnailImage')]`})
		const carouselItem = getElementsByXPath({xpath: `//div[contains(@class, 'p-carousel-item') and @aria-label='${index}']`})
		if (imageSelectors?.length > 0) {
			if (imageSelectors[0] instanceof HTMLElement && currentElementRendered.current === 0) {
				imageSelectors[0].insertAdjacentHTML('afterend', creditTo)
				currentElementRendered.current++
				console.log("add credit to currentElementRendered:", currentElementRendered.current)
			}
		}
	}, [])
	//
	// useEffect(() => {
	// 	if (isReady) {
	// 		const creditTo =
	// 			`
	// 				<div
	// 					class='mediaPhotoCreditTo'
	// 					style="color: ${item?.creditColor}"
	// 				>
	// 					${item?.credit ?? ''}
	// 				</div>
	// 		`
	// 		const imageSelectors = getElementsByXPath({xpath: `//div[contains(@class, 'p-carousel-item') and @aria-label='${index}']//div[contains(@class, 'photo_thumbnailImage')]`})
	// 		const courseItemSelector = getElementsByXPath({xpath: `//div[contains(@class, 'p-carousel-item') and @aria-label='${index}']`})
	// 		const courseItemAriaLabel = courseItemSelector?.[0].attributes.getNamedItem('aria-label')?.value
	// 		console.log("test:", imageSelectors?.[5])
	//
	// 		if (imageSelectors?.length > 0 && courseItemAriaLabel === index.toString()) {
	// 			console.log("imageSelectors:", imageSelectors)
	//
	// 			if (imageSelectors[0] instanceof HTMLElement) {
	// 				imageSelectors[0].insertAdjacentHTML('afterend', creditTo)
	//
	// 			}
	// 		}
	// 	}
	// }, [isReady])
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
					loading='lazy'
					className={styles.img}
				/>}
			</div>
		</div>
	)
}


