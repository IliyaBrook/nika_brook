'use client'
import VideoModal from '@/app/media/video/VideoModal'
import { Carousel } from '@/components/Carousel/Carousel'
import { videos } from '@/data'
import type { VideoGallery } from '@/types/sharable.types.ts.tsx'
import Image from 'next/image'
import React, { useState } from 'react'
import styles from './video.module.scss'

const VideoGallery = () => {
	const [selectedVideo, setSelectedVideo] = useState<VideoGallery | null>(null);
	
	return (
		<>
			<Carousel
				dataItems={videos}
				renderItemAction={(video) => {
					return (
						<div onClick={() => setSelectedVideo(video)} className={styles.carouselItem}>
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
				<VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
			)}
		</>
	);
};

export default VideoGallery