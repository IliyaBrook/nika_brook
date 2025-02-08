import styles from '@/app/media/photo/photo.module.scss'
import ImageWithCredit from '@/components/ImageWithCredit/ImageWithCredit'
import type { ImageItem } from '@/types/sharable.types.ts'
import NextImage, { ImageProps } from 'next/image'
import React from 'react'
import { createPortal } from 'react-dom'
import CloseIcon from '../../../../public/images/icons/close_icon_white.svg'

interface PreviewProps {
	item: ImageItem;
	togglePreview: () => void;
	previewOpen: boolean;
}

const Preview = ({
	                 item,
	                 togglePreview,
	                 previewOpen
                 }: PreviewProps) => {
	return (
		previewOpen && createPortal(
			<div className={styles.preview} onClick={togglePreview}>
				<NextImage
					src={CloseIcon}
					alt='Close Icon'
					className={styles.closeIcon}
				/>
				<ImageWithCredit<ImageProps>
					creditText=''
					imageProps={{
						src: item.itemImageSrc,
						alt: item.alt,
						loading: 'lazy',
						placeholder: 'blur',
						className: styles.imagePreview,
						sizes: '(max-width: 768px) 60vw, (max-width: 1200px) 80vw, 100vw'
					}}
					ImageComponentInstance={NextImage}
					creditTextColor={item.creditColor}
				/>
			</div>,
			document.body
		)
	)
}

export default Preview