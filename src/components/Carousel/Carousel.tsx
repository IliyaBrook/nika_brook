'use client'
import useWindowSize from '@/hooks/useWindowSize'
import type { CarouselResponsiveOption } from '@/types/sharable.types.ts'
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import styles from './Carousel.module.scss'

interface ICarousel<T> {
	dataItems: T[];
	renderItemAction: (item: T) => React.ReactNode;
	withIndicators?: boolean;
	classNameContainer?: string;
	classNameImgElements?: string;
	classNameIndicators?: string;
	classNameNavBtns?: string;
	responsiveOptions?: CarouselResponsiveOption[]
}

export const Carousel = <T, >({
	                              dataItems,
	                              renderItemAction,
	                              withIndicators = true,
	                              classNameContainer,
	                              classNameIndicators,
	                              classNameImgElements,
	                              classNameNavBtns,
	                              responsiveOptions
                              }: ICarousel<T>
) => {
	const totalItems = dataItems.length
	const [scrollIndex, setScrollIndex] = useState<number>(0)
	const [numVisible, setNumVisible] = useState<number>(totalItems)
	const [numScroll, setNumScroll] = useState<number>(1);
	const [activeIndicator, setActiveIndicator] = useState<number>(0)
	const {screenWidth} = useWindowSize()
	
	useEffect(() => {
		if (screenWidth && screenWidth !== 0) {
			if (responsiveOptions && responsiveOptions.length > 0) {
				const matchedOption = responsiveOptions
					.sort((a, b) => b.breakpoint - a.breakpoint)
					.find(option => screenWidth >= option.breakpoint) || responsiveOptions[0];
				
				if (matchedOption) {
					setNumVisible(matchedOption.numVisible);
					setNumScroll(matchedOption.numScroll);
				} else {
					setNumVisible(3);
					setNumScroll(1);
				}
			} else {
				setNumVisible(screenWidth < 768 ? 1 : 3);
				setNumScroll(1);
			}
		}
	}, [screenWidth])
	
	const goToNext = () => {
		const maxIndex = Math.max(0, totalItems - numVisible);
		const newIndex = Math.min(scrollIndex + 1, maxIndex);
		setScrollIndex(newIndex);
		setActiveIndicator(newIndex);
	};
	
	const goToPrev = () => {
		const newIndex = Math.max(scrollIndex - 1, 0);
		setScrollIndex(newIndex);
		setActiveIndicator(newIndex);
	};
	
	const handleIndicatorClick = (index: number) => {
		setScrollIndex(index);
		setActiveIndicator(index);
	};
	
	useEffect(() => {
		const keyEventHandler = (event: KeyboardEvent) => {
			if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
				return
			}
			
			switch (event.key) {
				case 'ArrowLeft':
					goToPrev()
					break
				case 'ArrowRight':
					goToNext()
					break
			}
		}
		
		document.addEventListener('keydown', keyEventHandler)
		return () => {
			document.removeEventListener('keydown', keyEventHandler)
		}
	}, [goToNext, goToPrev])
	
	const indicatorItems = Array.from({ length: Math.ceil((dataItems.length - numVisible + (numScroll)) / numScroll) })

	
	return (
		<div className={classNames(styles.carouselContainer, classNameContainer)}>
			<div
				className={classNames(styles.elementsWrapper, classNameImgElements)}
				style={{ height: withIndicators ? '65%' : '100%' }}
			>
				<div className={classNames(styles.buttonWrapper, styles.prevButton, classNameNavBtns)}>
					<button
						disabled={scrollIndex === 0}
						className={classNames(styles.button, {
							[styles.buttonDisabled]: scrollIndex === 0
						})}
						onClick={goToPrev}
						aria-label='Previous'
					>
						<i className={classNames(styles.icon, 'pi pi-chevron-left')}></i>
					</button>
				</div>
				<div className={styles.carouselItemsWrapper}>
					{dataItems.map((item, index) => (
						<div
							key={`carousel-item-${index}`}
							className={styles.carouselItem}
							style={{
								transform: `translateX(-${Math.min(scrollIndex, dataItems.length ) * 100}%)`,
								flex: `0 0 ${100 / numVisible}%`,
								maxWidth: `${100 / numVisible}%`,
							}}
						>
							{renderItemAction(item)}
						</div>
					))}
				</div>
				
				<div className={classNames(styles.buttonWrapper, styles.nextButton, classNameNavBtns)}>
					<button
						className={classNames(styles.button, styles.nextButton, {
							[styles.buttonDisabled]: scrollIndex >= dataItems.length - numVisible
						})}
						onClick={goToNext}
						aria-label='Next'
					>
						<i className={classNames(styles.icon, 'pi pi-chevron-right')}></i>
					</button>
				</div>
			</div>
			{
				withIndicators &&
				<div className={classNames(styles.carouselIndicators, classNameIndicators)}>
					<ul>
						{dataItems.map((_, index) => {
							const isActive = activeIndicator === index;
							
							return (
								<li key={`indicator-${index}`}>
									<button
										type="button"
										tabIndex={isActive ? 0 : -1}
										aria-label={`Page ${index + 1}`}
										aria-current={isActive ? "page" : undefined}
										onClick={() => handleIndicatorClick(index)}
										className={classNames({ [styles.active]: isActive })}
									>
            <span
	            role="presentation"
	            aria-hidden="true"
	            style={{ height: '32px', width: '32px' }}
            />
									</button>
								</li>
							);
						})}
					</ul>
				</div>
			}
		</div>
	)
}