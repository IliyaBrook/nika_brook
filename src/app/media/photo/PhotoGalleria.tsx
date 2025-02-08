'use client'
import { images } from '@/app/media/photo/data'
import Preview from '@/app/media/photo/preview'
import { Carousel } from '@/components/Carousel/Carousel'
import type { CarouselResponsiveOption } from '@/types/sharable.types.ts'
import classNames from 'classnames'
import NextImage from 'next/image'
import React, { useState } from 'react'
import EyeIcon from '../../../../public/images/icons/eye_icons.svg'
import styles from './photo.module.scss'

export const PhotoGalleria = () => {
	const [previewOpen, setPreviewOpen] = useState(false)
	const togglePreview = () => setPreviewOpen(prev => !prev)
	
	const responsiveOptions: CarouselResponsiveOption[] = [
		{ breakpoint: 1200, numVisible: 4, numScroll: 4 },
		{ breakpoint: 986, numVisible: 3, numScroll: 3 },
		{ breakpoint: 770, numVisible: 2, numScroll: 2 },
		{ breakpoint: 420, numVisible: 1, numScroll: 1 },
	]
	
	return (
		<div className={styles.carouselWrapper}>
			<Carousel
				responsiveOptions={responsiveOptions}
				dataItems={images}
				classNameImgElements={styles.elementsContainer}
				classNameNavBtns={styles.navBtns}
				renderItemAction={(image) => (
					<div
						className={classNames(styles.itemTemplate)}
					>
							<div className={styles.thumbnailImage}>
								<div className={styles.creditTextWrapper}>
			            <span
				            className={styles.creditText}
				            style={{ color: image.creditColor }}
			            >
			              {image.credit}
			            </span>
								</div>
								
								<span
									className={styles.imageWrapper}
									onClick={togglePreview}
									aria-labelledby="white"
									data-pc-name="image"
									data-pc-section="root"
								>
			            <NextImage
				            src={image.itemImageSrc}
				            alt={image.alt}
				            className={styles.img}
				            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 70vw, 100vw"
				            loading="lazy"
				            placeholder="blur"
			            />
			
			            <div className={styles.eyeIconBg}>
			                <NextImage
				                src={EyeIcon}
				                alt='eye icon'
				                className={classNames(styles.eyeIcon, styles.eyeIconShow)}
			                />
			            </div>
		            </span>
							</div>
							
							<Preview
								item={image}
								previewOpen={previewOpen}
								togglePreview={togglePreview}
							/>
					</div>
				)}
			/>
		</div>
	)
}

export default PhotoGalleria