import styles from '@/app/media/photo/photo.module.scss'
import ImageWithCredit from '@/components/ImageWithCredit/ImageWithCredit'
import type { ImageItem } from '@/types/sharable.types.ts'
import classNames from 'classnames'
import NextImage, {ImageProps} from 'next/image'
import React, { useState } from 'react'
import { createPortal } from 'react-dom';
import EyeIcon from '../../../../../public/images/icons/eye_icons.svg'
import CloseIcon from '../../../../../public/images/icons/close_icon_white.svg'

interface ItemTemplateProps extends ImageItem {
	item: ImageItem
	index: number
	onLoad?: () => void
	setIsPreviewOpen: (state: boolean) => void
}

export function ItemTemplate({ index, ...item }: ItemTemplateProps) {
	const [previewOpen, setPreviewOpen] = useState(false)
	const togglePreview = () => setPreviewOpen(prev => !prev)
	
	const renderPreview = (
		previewOpen &&
		createPortal(
			<div className={styles.preview} onClick={togglePreview}>
				<NextImage
					src={CloseIcon}
					alt="Close Icon"
					className={styles.closeIcon}
				/>
				
				<ImageWithCredit<ImageProps>
					creditText=""
					imageProps={{
						src: item.itemImageSrc,
						alt: item.alt,
						loading: 'lazy',
						placeholder: 'blur',
						className: styles.imagePreview,
						sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw',
					}}
					ImageComponentInstance={NextImage}
					creditTextColor={item.creditColor}
				/>
			</div>,
			document.body
		)
	)
	
	return (
		<div className={classNames(styles.itemTemplate)}>
			<div className={styles.thumbnailImage}>
				<div className="p-carousel-item p-carousel-item-active">
	        <span
	          className={classNames(
	            styles.imageWrapper
	          )}
	          onClick={togglePreview}
	          aria-labelledby='white'
	          data-pc-name='image'
	          data-pc-section='root'
	        >
		        <ImageWithCredit<ImageProps>
			        creditText={item.credit}
			        imageProps={{
				        src: item.itemImageSrc,
				        alt: item.alt,
				        loading:'lazy',
				        placeholder:'blur',
				        className: styles.img
			        }}
			        ImageComponentInstance={NextImage}
			        creditTextColor={item.creditColor}
		        />
		        <NextImage
			        src={EyeIcon}
			        alt="eye icon"
			        className={classNames(styles.eyeIcon, styles.eyeIconShow)}
		        />
	        </span>
					
				</div>
			</div>
			{renderPreview}
		</div>
	)
}