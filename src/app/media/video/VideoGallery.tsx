'use client'
import VideoModal from '@/app/media/video/VideoModal'
import { Carousel } from '@/components/Carousel/Carousel'
import { videos } from '@/data'
import type { VideoGallery } from '@/types/sharable.types.ts.tsx'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import styles from './video.module.scss'

const VideoGallery = () => {
	const [selectedVideo, setSelectedVideo] = useState(null)
	const clickPosition = useRef<{ x: number; y: number } | null>(null)
	
	const toggleModal = (video: VideoGallery) => {
		setSelectedVideo(video)
	}
	
	const handleMouseDown = (e: React.MouseEvent<HTMLSpanElement>) => {
		clickPosition.current = { x: e.clientX, y: e.clientY }
	}
	
	const handleMouseUp = (e: React.MouseEvent<HTMLSpanElement>, video: VideoGallery) => {
		if (clickPosition.current) {
			const dx = Math.abs(clickPosition.current.x - e.clientX)
			const dy = Math.abs(clickPosition.current.y - e.clientY)
			
			if (dx < 5 && dy < 5) {
				toggleModal(video)
			}
			clickPosition.current = null
		}
	}
	
	return (
		<>
			<Carousel
				dataItems={videos}
				renderItemAction={(video) => {
					return (
						<div
							onMouseDown={handleMouseDown}
							onMouseUp={(e) => handleMouseUp(e, video)}
						>
							<Image
								src={video.thumbnailImageSrc}
								alt={video.alt}
								fill
								className={styles.thumbnailImage}
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								loading="lazy"
								placeholder="blur"
							/>
							<div className={styles.videoOverlay}>
								<div className={styles.playIcon}>
									<svg width="40" height="40" viewBox="0 0 12 18" xmlns="http://www.w3.org/2000/svg">
										<polygon points="0,0 12,9 0,18" fill="white" />
									</svg>
								</div>
								<div className={styles.videoInfo}>
									<p className={styles.videoDescription}>{video.description}</p>
								</div>
							</div>
						</div>
					)
				}}
			/>
			{selectedVideo && (
				<VideoModal
					video={selectedVideo}
					onClose={() => setSelectedVideo(null)}
				/>
			)}
		</>
	);
};

export default VideoGallery