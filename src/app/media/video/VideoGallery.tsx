'use client'
import { lastNumVisibleIndex, totalItems, videos, visibleItems } from '@/app/media/video/data'
import type { VideoGallery } from '@/types/sharable.types.ts.tsx'
import classNames from 'classnames'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './video.module.scss'


const VideoGallery = () => {
	const [selectedVideo, setSelectedVideo] = useState<VideoGallery>(null)
	const [scrollIndex, setScrollIndex] = useState<number>(0)
	const [numVisible, setNumVisible] = useState<number>(totalItems)
	
	const updateNumVisible = () => {
		setNumVisible(window.innerWidth < 768 ? 1 : visibleItems)
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
		if (!selectedVideo) return
		
		const wrapper = document.createElement('div')
		wrapper.className = 'videoIframeWrapper'
		
		wrapper.innerHTML = `
        <button class='closeButton'>
            <img src='/images/icons/close_icon_black.png' alt='Close' />
        </button>
        <iframe
            class='iframeFullScreen'
            width='100%'
            height='100%'
            title='${selectedVideo.alt}'
            src='https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&controls=1&rel=0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
            id='ytPlayer'
        ></iframe>
    `
		
		document.body.appendChild(wrapper)
		const closeButton = wrapper.querySelector('.closeButton')
		const clickListener = () => {
			document.body.removeChild(wrapper)
			setSelectedVideo(null)
		}
		closeButton?.addEventListener('click', clickListener)
		
		return () => {
			if (document.body.contains(wrapper)) {
				document.body.removeChild(wrapper)
				closeButton?.removeEventListener('click', clickListener)
			}
		}
	}, [selectedVideo])
	
	useEffect(() => {
		const keyEventHandler = (event: KeyboardEvent) => {
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
	}, [])
	
	return (
		<div className={styles.carouselContainer}>
			<div className={styles.buttonWrapper}>
				<button
					disabled={scrollIndex === 0}
					className={classNames(styles.prevButton, styles.button, { [styles.buttonDisabled]: scrollIndex === 0 })}
					onClick={goToPrev}
					aria-label='Previous'
				>
					<i className={classNames(styles.icon, 'pi pi-chevron-left')}></i>
				</button>
			</div>
			
			<div className={styles.carousel}>
				{videos.map(video => {
					const index = video.index
					return (
						<div
							key={`carousel-item-${index}`}
							className={styles.carouselItem}
							style={{
								transform: `translateX(-${Math.min(scrollIndex, videos.length - numVisible) * 100}%)`
							}}
						
						></div>
					)
				})}
			</div>
			<div className={styles.buttonWrapper}>
				<button
					className={classNames(styles.button, styles.nextButton, { [styles.buttonDisabled]: scrollIndex === lastNumVisibleIndex })}
					onClick={goToNext}
					aria-label='Next'
				>
					<i className={classNames(styles.icon, 'pi pi-chevron-right')}></i>
				</button>
			</div>
		</div>
	
	)
}

export default VideoGallery