'use client'
import classNames from 'classnames'
import React, { type CSSProperties } from 'react'
import Image, { ImageProps } from 'next/image'
import styles from './ImageWithCredit.module.scss'


interface IImageWithCredit extends React.HTMLAttributes<HTMLDivElement> {
	creditTextPosition?: 'left' | 'right',
	creditText: string,
	creditTextProps?: React.HTMLAttributes<HTMLDivElement>,
	imageProps: ImageProps;
	creaditTextSpacing?: string,
	creditTextColor?: CSSProperties['color']
}

const ImageWithCredit: React.FC<IImageWithCredit> = ({
	                                                     imageProps,
	                                                     creditText,
	                                                     creditTextPosition = 'right',
	                                                     creditTextProps,
	                                                     creaditTextSpacing = '1vw',
	                                                     creditTextColor = 'white',
	                                                     ...rest
                                                     }) => {
	return (
		<div
			className={styles.imageWithCredit}
			{...rest}
		>
			<Image
				{...imageProps}
				className={classNames(
					imageProps.className,
					styles.image
				)}
			/>
			<div
				{...creditTextProps}
				className={styles.credit}
				style={{
					[creditTextPosition]: creaditTextSpacing,
					color: creditTextColor
				}}
			>
				{`${creditText} ©`}
			</div>
		</div>
	)
}

export default ImageWithCredit