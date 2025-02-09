'use client'
import VideoModal from '@/app/media/video/VideoModal'
import { Carousel } from '@/components/Carousel/Carousel'
import { videos } from '@/data'
import useOnEscapeKey from '@/hooks/useOnEscapeKey'
import useTouches from '@/hooks/useTouches'
import type { VideoGallery } from '@/types/sharable.types.ts'
import Image from 'next/image'
import React, { useState } from 'react'
import styles from './video.module.scss'

const VideoGallery = () => {
	const [selectedVideo, setSelectedVideo] = useState<VideoGallery | null>(null);
	
	const toggleModal = (video: VideoGallery) => {
		setSelectedVideo(video);
	};
	
	const {handleMouseDown, handleTouchStart, handleMouseUp, handleTouchEnd} = useTouches<VideoGallery, VideoGallery>({
		mouseUpCallback: (video) => {
			toggleModal(video)
		},
		touchEndCallback: (video) => {
			toggleModal(video)
		}
	})
	
	useOnEscapeKey(() => {
		setSelectedVideo(null)
	})
	
	return (
		<>
			<Carousel
				dataItems={videos}
				renderItemAction={(video) => {
					return (
						<div
							onMouseDown={handleMouseDown}
							onTouchStart={handleTouchStart}
							onMouseUp={(e) => handleMouseUp(e, video)}
							onTouchEnd={(e) => handleTouchEnd(e, video)}
							style={{ touchAction: 'pan-y' }}
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