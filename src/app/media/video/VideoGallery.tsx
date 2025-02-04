'use client'
import type { VideoItem, VideoThumbnail } from '@/types/sharable.types.ts.tsx'
import dynamic from 'next/dynamic'
import React, { useEffect, useRef, useState } from 'react'
import { Galleria as GalleriaComponent } from 'primereact/galleria'
//0
import WisUpQMin from '../../../../public/images/videoThumbnail/7NKMxWisUpQ/default.jpg'
import WisUpQMax from '../../../../public/images/videoThumbnail/7NKMxWisUpQ/maxresdefault.jpg'
//1
import HPGfl_kMin from '../../../../public/images/videoThumbnail/XMV-HPGfl_k/default.jpg'
import HPGfl_kMax from '../../../../public/images/videoThumbnail/XMV-HPGfl_k/maxresdefault.jpg'
//2
import sCQz83uEl0IMin from '../../../../public/images/videoThumbnail/sCQz83uEl0I/default.jpg'
import sCQz83uEl0IMax from '../../../../public/images/videoThumbnail/sCQz83uEl0I/maxresdefault.jpg'
//3
import U0cRtg16k5MMin from '../../../../public/images/videoThumbnail/U0cRtg16k5M/default.jpg'
import U0cRtg16k5MMax from '../../../../public/images/videoThumbnail/U0cRtg16k5M/maxresdefault.jpg'
//4
import hvR4wjr0x1AMin from '../../../../public/images/videoThumbnail/hvR4wjr0x1A/default.jpg'
import hvR4wjr0x1AMax from '../../../../public/images/videoThumbnail/hvR4wjr0x1A/maxresdefault.jpg'
//5
import JXe6nWdcSdEMin from '../../../../public/images/videoThumbnail/JXe6nWdcSdE/default.jpg'
import JXe6nWdcSdEMax from '../../../../public/images/videoThumbnail/JXe6nWdcSdE/maxresdefault.jpg'
//6
import xAQej1MS5kIMin from '../../../../public/images/videoThumbnail/xAQej1MS5kI/default.jpg'
import xAQej1MS5kIMax from '../../../../public/images/videoThumbnail/xAQej1MS5kI/maxresdefault.jpg'


import styles from './video.module.scss'
import { videos } from '@/app/media/video/data'
import Image from 'next/image'
import classNames from 'classnames'
import 'primeicons/primeicons.css'

const Galleria = (dynamic(
	() => import('primereact/galleria').then(({ Galleria }) => Galleria),
	{ ssr: false }
) as typeof GalleriaComponent)

export const videosThumb: VideoThumbnail[] = [
	{
		id: 'video_1',
		thumbnailImageSrc: WisUpQMin,
		thumbnailImageSrcHd: WisUpQMax,
		index: 0
	},
	{
		id: 'video_2',
		thumbnailImageSrc: HPGfl_kMin,
		thumbnailImageSrcHd: HPGfl_kMax,
		index: 1
	},
	{
		id: 'video_3',
		thumbnailImageSrc: sCQz83uEl0IMin,
		thumbnailImageSrcHd: sCQz83uEl0IMax,
		index: 2
	},
	{
		id: 'video_4',
		thumbnailImageSrc: U0cRtg16k5MMin,
		thumbnailImageSrcHd: U0cRtg16k5MMax,
		index: 3
	},
	{
		id: 'video_5',
		thumbnailImageSrc: hvR4wjr0x1AMin,
		thumbnailImageSrcHd: hvR4wjr0x1AMax,
		index: 4
	},
	{
		id: 'video_6',
		thumbnailImageSrc: JXe6nWdcSdEMin,
		thumbnailImageSrcHd: JXe6nWdcSdEMax,
		index: 5
	},
	{
		id: 'video_7',
		thumbnailImageSrc: xAQej1MS5kIMin,
		thumbnailImageSrcHd: xAQej1MS5kIMax,
		index: 6
	}
]

const VideoGallery = () => {
	const galleriaRef = useRef<GalleriaComponent>(null)
	const [selectedVideoIndex, setSelectedVideoIndex] = useState<number | null>(null)
	const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
	const [scrollIndex, setScrollIndex] = useState<number>(0)
	const visibleItems = 3
	const [numVisible, setNumVisible] = useState<number>(5)
	
	// const updateNumVisible = () => {
	// 	if (window.innerWidth < 768) {
	// 		setNumVisible(1)
	// 	} else {
	// 		setNumVisible(5)
	// 	}
	// }
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
	// useEffect(() => {
	// 	updateNumVisible()
	// 	window.addEventListener('resize', updateNumVisible)
	// 	return () => window.removeEventListener('resize', updateNumVisible)
	// }, [])
	
	// const goToNext = () => {
	// 	const nextIndex = scrollIndex + 1;
	// 	if (nextIndex < videos.length - visibleItems) {
	// 		setScrollIndex(nextIndex);
	// 	}
	// }
	//
	// const goToPrev = () => {
	// 	setScrollIndex((prevIndex) => Math.max(prevIndex - 1, 0))
	// }
	
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
	
	const itemTemplate = (item: VideoItem) => {
		return (
			<iframe
				key={`iframe-video-${item.index}`}
				width='100%'
				height='315'
				src={`https://www.youtube.com/embed/${item.youtubeId}`}
				title={item.alt}
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen
			/>
		)
	}
	
	useEffect(() => {
		const wrapper = document.createElement('div');
		wrapper.className = 'videoIframeWrapper';
		wrapper.innerHTML = `
        <div class="videoIframeWrapper">
	        <button class="closeButton">
	          <img src="/images/icons/close_icon.png" alt="Close" />
			    </button>
	        <iframe
	            class="iframeFullScreen"
	            width="100%"
	            height="100%"
	            src="https://www.youtube.com/embed/${selectedVideo}"
	            title="YouTube video player"
	            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
	            allowfullscreen
	        ></iframe>
        </div>
    `;
		if (selectedVideo) {
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
	}, [selectedVideo])
	
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
						const thumbnail = videosThumb[video.index].thumbnailImageSrcHd
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
									src={thumbnail}
									alt={video.alt}
									fill
									className={styles.thumbnailImage}
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
									loading='lazy'
									placeholder='blur'
								/>
								<div
									className={styles.videoOverlay}
									// onClick={() => {
									// 	handleShowGalleria(index)
									// 	handleScroll(index)
									// }}
									onClick={() => {
										setSelectedVideo(video.youtubeId)
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