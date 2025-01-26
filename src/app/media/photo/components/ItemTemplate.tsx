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
	
	return (
		<div className={classNames(styles.itemTemplate)}>
			<div className={styles.thumbnailImage}>
				
				{!loaded && (
					<img
						src="/images/skeleton.svg"
						alt="Loading skeleton"
						className={styles.img}
					/>
				)}
		
				
				<PrimeImage
					src={item.itemImageSrc}
					alt={item.alt}
					preview
					style={{ display: loaded ? 'block' : 'none' }}
					className={styles.img}
					pt={{
						image: {
							onLoad: () => {
								setTimeout(() => {
									setLoaded(true)
									onLoad?.()
								}, 1000)
							}
						}
					}}
				/>
			
			</div>
			{
				loaded && (
					<div
						className={styles.mediaPhotoCreditTo}
						style={{ color: item.creditColor }}
					>
						{item.credit}
					</div>
				)
			}
		</div>
	)
}