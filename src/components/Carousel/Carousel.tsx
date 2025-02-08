'use client'
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
}

export const Carousel = <T, >({
	                              dataItems,
	                              renderItemAction,
	                              withIndicators = true,
	                              classNameContainer,
	                              classNameIndicators,
	                              classNameImgElements
                              }: ICarousel<T>
) => {
	const totalItems = dataItems.length
	const [scrollIndex, setScrollIndex] = useState<number>(0)
	const [numVisible, setNumVisible] = useState<number>(totalItems)
	
	const updateNumVisible = () => {
		setNumVisible(window.innerWidth < 768 ? 1 : 3)
	}
	
	useEffect(() => {
		updateNumVisible()
		window.addEventListener('resize', updateNumVisible, { passive: true })
		return () => {
			window.removeEventListener('resize', updateNumVisible)
		}
	}, [])
	
	const goToNext = () => {
		const maxIndex = Math.max(0, totalItems - numVisible)
		if (scrollIndex < maxIndex) {
			setScrollIndex(scrollIndex + 1)
		}
	}
	
	const goToPrev = () => {
		const previousIndex = scrollIndex - 1
		if (previousIndex >= 0) {
			setScrollIndex(previousIndex)
		}
	}
	
	const handleIndicatorClick = (index: number) => {
		setScrollIndex(index)
	}
	
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
	
	return (
		<div className={classNames(styles.carouselContainer, classNameContainer)}>
			<div
				className={classNames(styles.elementsWrapper, classNameImgElements)}
				style={{ height: withIndicators ? '65%' : '100%' }}
			>
				<div className={classNames(styles.buttonWrapper, styles.prevButton)}>
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
								transform: `translateX(-${Math.min(scrollIndex, dataItems.length - numVisible) * 100}%)`
							}}
						>
							{renderItemAction(item)}
						</div>
					))}
				</div>
				
				<div className={classNames(styles.buttonWrapper, styles.nextButton)}>
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
						{dataItems.map((_, index) => (
							<li
								key={`indicator-${index}`}
								data-p-highlight={scrollIndex === index}
							>
								<button
									type='button'
									tabIndex={scrollIndex === index ? 0 : -1}
									aria-label={`Page ${index + 1}`}
									aria-current={scrollIndex === index ? 'page' : undefined}
									onClick={() => handleIndicatorClick(index)}
									className={classNames({ [styles.active]: scrollIndex === index })}
								
								>
                  <span
	                  role='presentation'
	                  aria-hidden='true'
	                  style={{ height: '32px', width: '32px' }}
                  />
								</button>
							</li>
						))}
					</ul>
				</div>
			}
		</div>
	)
}