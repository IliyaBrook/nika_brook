import styles from '@/app/media/photo/photo.module.scss'
import { ImageItem } from '@/app/media/types.images'
import classNames from 'classnames'
import { Image as PrimeImage } from 'primereact/image'
import React, { type FC, useRef } from 'react'


export const ItemTemplate: FC<ImageItem> = (items: ImageItem) => {
	const imagesCounter = useRef(0)
	const isMounted = useRef(false)
	return (
		<div className={classNames(styles.itemTemplate)}>
			<div className={styles.thumbnailImage}>
				<PrimeImage
					src={items?.itemImageSrc}
					alt={items?.alt}
					preview
					loading='eager'
					className={styles.img}
					pt={{
						hooks: {
							useMountEffect() {
								imagesCounter.current++
								if (imagesCounter.current >= 3 && isMounted.current === false) {
									isMounted.current = true
		
									const photoCarouselState = document.querySelector('[carousel-data-ready="false"]')
									if (photoCarouselState) {
										photoCarouselState.setAttribute('carousel-data-ready', 'true')
									}
								}
							}
						}
					}}
				/>
			</div>
		</div>
	)
}


