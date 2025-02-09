'use client'
import Preview from '@/app/media/photo/preview'
import { Carousel } from '@/components/Carousel/Carousel'
import { images } from '@/data'
import useOnEscapeKey from '@/hooks/useOnEscapeKey'
import useTouches from '@/hooks/useTouches'
import type { CarouselResponsiveOption, ImageItem, VideoGallery } from '@/types/sharable.types.ts'
import classNames from 'classnames'
import NextImage from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import EyeIcon from '../../../../public/images/icons/eye_icons.svg'
import styles from './photo.module.scss'

export const PhotoGalleria = () => {
	const responsiveOptions: CarouselResponsiveOption[] = [
		{ breakpoint: 1200, numVisible: 4, numScroll: 4 },
		{ breakpoint: 986, numVisible: 3, numScroll: 3 }
	]
	
	const [previewOpen, setPreviewOpen] = useState(false)
	const [selectedImage, setSelectedImage] = useState(null);
	const togglePreview = (image: ImageItem) => {
		setSelectedImage(image);
		setPreviewOpen((prev) => !prev);
	};
	
	const {handleMouseDown, handleTouchStart, handleMouseUp, handleTouchEnd} = useTouches<ImageItem, ImageItem>({
		mouseUpCallback: (image) => {
			togglePreview(image);
		},
		touchEndCallback: (image) => {
			togglePreview(image);
		}
	})
	
	useOnEscapeKey(() => {
		setPreviewOpen(false);
	})
	
	return (
		<div
			className={styles.carouselWrapper}
		>
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
								onMouseDown={handleMouseDown}
								onTouchStart={handleTouchStart}
								onTouchEnd={(e) => handleTouchEnd(e, image)}
								onMouseUp={(e) => handleMouseUp(e, image)}
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
				                width={20}
				                height={20}
				                className={classNames(styles.eyeIcon, styles.eyeIconShow)}
			                />
			            </div>
		            </span>
						</div>
						
						<Preview
							item={selectedImage}
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