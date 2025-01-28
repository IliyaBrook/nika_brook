'use client'
import classNames from 'classnames'
import React, { type ComponentType, type CSSProperties } from 'react'
import styles from './ImageWithCredit.module.scss'

interface IImageWithCredit <TImageProps extends Record<string, any>> extends React.HTMLAttributes<HTMLDivElement>  {
	creditTextPosition?: 'left' | 'right';
	creditOnTop?: boolean;
	creditText: string;
	creditTextProps?: React.HTMLAttributes<HTMLDivElement>;
	creaditTextSpacing?: string;
	creditTextColor?: CSSProperties['color'];
	imageProps: TImageProps;
	ImageComponentInstance: ComponentType<TImageProps>;
}


const ImageWithCredit = <ImageProps extends Record<string, any>>({
	                                                                   imageProps,
	                                                                   creditText,
																																		 creditOnTop = false,
	                                                                   creditTextPosition = 'right',
	                                                                   creditTextProps,
	                                                                   creaditTextSpacing = '1vw',
	                                                                   creditTextColor = 'white',
	                                                                   ImageComponentInstance,
	
	                                                                   ...rest
                                                                   }: IImageWithCredit<ImageProps>) => {
	return (
		<div className={styles.imageWithCredit} {...rest}>
			<ImageComponentInstance
				{...imageProps}
				className={classNames(imageProps.className, styles.image)}
			/>
			<div
				{...creditTextProps}
				className={classNames(styles.credit, creditTextProps?.className)}
				style={{
					[creditTextPosition]: creaditTextSpacing,
					color: creditTextColor,
					top: creditOnTop ? '10px' : 'unset',
					bottom: creditOnTop ? 'unset' : '10px',
				}}
			>
				{`${creditText} ©`}
			</div>
		</div>
	);
};

export default ImageWithCredit;