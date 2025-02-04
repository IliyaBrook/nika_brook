'use client'
import { videos } from '@/app/media/video/data'
import type { VideoGallery } from '@/types/sharable.types.ts.tsx'
import classNames from 'classnames'
import Image from 'next/image'
import { Galleria as GalleriaComponent } from 'primereact/galleria'
import React, { useEffect, useRef, useState } from 'react'


import styles from './video.module.scss'
import 'primeicons/primeicons.css'


const VideoGallery = () => {
	const galleriaRef = useRef<GalleriaComponent>(null)
	const [selectedVideo, setSelectedVideo] = useState<VideoGallery>(null)
	const [scrollIndex, setScrollIndex] = useState<number>(0)
	const visibleItems = 3
	const [numVisible, setNumVisible] = useState<number>(5)
	
	const updateNumVisible = () => {
		setNumVisible(window.innerWidth < 768 ? 1 : 5)
	}
	
	useEffect(() => {
		updateNumVisible()
		window.addEventListener('resize', updateNumVisible, { passive: true })
		return () => {
			window.removeEventListener('resize', updateNumVisible)
		}
	}, [])
	
	const handleCloseVideo = () => {
		setSelectedVideo(null)
	}
	
	const goToNext = () => {
		const nextIndex = scrollIndex + 1
		if (nextIndex < videos.length - visibleItems) {
			setScrollIndex(nextIndex)
		}
	}
	
	const goToPrev = () => {
		setScrollIndex((prevIndex) => Math.max(prevIndex - 1, 0))
	}
	
	useEffect(() => {
		const wrapper = document.createElement('div');
		wrapper.className = 'videoIframeWrapper';
		if (selectedVideo) {
			wrapper.innerHTML = `
        <div class="videoIframeWrapper">
	        <button class="closeButton">
	          <img src="/images/icons/close_icon.png" alt="Close" />
			    </button>
	        <iframe
	            class="iframeFullScreen"
	            width="100%"
	            height="100%"
	            title="${selectedVideo.alt}"
	            src="https://www.youtube.com/embed/${selectedVideo.youtubeId}"
	            title="YouTube video player"
	            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
	            allowfullscreen
	        ></iframe>
        </div>
    `;
			document.body.appendChild(wrapper);
			const closeButton = wrapper.querySelector('.closeButton');
			closeButton?.addEventListener('click', () => {
				document.body.removeChild(wrapper);
			});
		}else if (!selectedVideo && document.body.contains(wrapper)) {
			if (wrapper){
				document.body.removeChild(wrapper);
			}
		}
	
		return () => {
			if (document.body.contains(wrapper)){
				document.body.removeChild(wrapper);
			}
		}
	}, [selectedVideo?.youtubeId])
	
	useEffect(() => {
		const keyEventHandler = (event: KeyboardEvent) => {
			switch (event.key) {
				case 'Escape':
					handleCloseVideo()
					const frameWrapper = document.querySelector('.videoIframeWrapper')
					if (frameWrapper) {
						document.body.removeChild(frameWrapper)
					}
					break
				case 'ArrowLeft':
					goToPrev()
					break
				case 'ArrowRight':
					goToNext()
					break
			}
		}
		document.addEventListener('keydown', keyEventHandler)
		const handleClickOutside = (event: MouseEvent) => {
			if (!(event.target instanceof Element)) {
				return
			}
			
			const galleriaElement = event.target.closest('.p-galleria')
			
			if (
				!galleriaElement &&
				galleriaRef.current &&
				typeof galleriaRef.current.hide === 'function'
			) {
				galleriaRef.current.hide()
			}
		}
		
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
			document.removeEventListener('keydown', keyEventHandler)
		}
	}, [])
	
	return (
		<>
			<div className={styles.carouselContainer}>
				<div className={styles.buttonWrapper}>
					<button
						className={classNames(styles.prevButton, styles.button)}
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
									transform:
										numVisible !== 1 ? `translateX(-${scrollIndex * 100}%)` : 'none'
								}}
							>
								<Image
									src={video.thumbnailImageSrc}
									alt={video.alt}
									fill
									className={styles.thumbnailImage}
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
									loading='lazy'
									placeholder='blur'
								/>
								<div
									className={styles.videoOverlay}
									onClick={() => {
										setSelectedVideo(video)
									}}
								>
									<div className={styles.playIcon}>
										<svg
											width='40'
											height='40'
											viewBox='0 0 12 18'
											xmlns='http://www.w3.org/2000/svg'
										>
											<polygon points='0,0 12,9 0,18' fill='white' />
										</svg>
									</div>
									<div className={styles.videoInfo}>
										<p className={styles.videoDescription}>{video.description}</p>
									</div>
								</div>
							</div>
						)
					})}
				</div>
				
				<div className={styles.buttonWrapper}>
					<button
						className={classNames(styles.button, styles.nextButton)}
						onClick={goToNext}
						aria-label='Next'
					>
						<i className={classNames(styles.icon, 'pi pi-chevron-right')}></i>
					</button>
				</div>
			</div>
		</>
	)
}

export default VideoGallery