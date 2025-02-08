'use client'
import { images } from '@/app/media/photo/data'
import Preview from '@/app/media/photo/preview'
import { Carousel } from '@/components/Carousel/Carousel'
import classNames from 'classnames'
import NextImage from 'next/image'
import React, { useState } from 'react'
import EyeIcon from '../../../../public/images/icons/eye_icons.svg'
import styles from './photo.module.scss'

export const PhotoGalleria = () => {
	const [previewOpen, setPreviewOpen] = useState(false)
	const togglePreview = () => setPreviewOpen(prev => !prev)
	
	return (
		<div className={styles.carouselWrapper}>
			<Carousel
				dataItems={images}
				// classNameImgElements={styles.elementsContainer}
				renderItemAction={(image) => (
					<div className={classNames(styles.itemTemplate)}>
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