'use client'
import { videos } from '@/app/media/video/data'
import classNames from 'classnames'
import React, { useEffect, useState } from 'react'
import styles from './carousel.module.scss'

interface ICarousel<T> {
	dataItems: T[];
	renderItemAction: (item: T, onSelect: (item: T) => void) => React.ReactNode;
}

export const Carousel = <T, >({
	                              dataItems,
	                              renderItemAction
                              }: ICarousel<T>
) => {
	'use client'
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
		const maxIndex = Math.max(0, videos.length - numVisible)
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
	
	useEffect(() => {
		const keyEventHandler = (event: KeyboardEvent) => {
			console.log('keyEventHandler:', event.key);
			if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
				return;
			}
			
			switch (event.key) {
				case 'ArrowLeft':
					goToPrev();
					break;
				case 'ArrowRight':
					goToNext();
					break;
			}
		};
		
		document.addEventListener('keydown', keyEventHandler);
		return () => {
			document.removeEventListener('keydown', keyEventHandler);
		};
	}, []);
	
	return (
		<div className={styles.carouselContainer}>
			<div className={styles.buttonWrapper}>
				<button
					disabled={scrollIndex === 0}
					className={classNames(styles.prevButton, styles.button, {
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
						{renderItemAction(item, () => setScrollIndex(index))}
					</div>
				))}
			</div>
			
			<div className={styles.buttonWrapper}>
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
	)
}