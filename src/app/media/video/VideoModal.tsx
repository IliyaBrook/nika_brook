import styles from '@/app/media/video/video.module.scss'
import type { VideoGallery } from '@/types/sharable.types.ts'
import React from 'react'
import { createPortal } from 'react-dom'

const VideoModal = ({ video, onClose }: { video: VideoGallery; onClose: () => void }) => {
	return createPortal(
		<div className={styles.videoIframeWrapper}>
			<button className={styles.closeButton} onClick={onClose}>
				<img src="/images/icons/close_icon_black.png" alt="Close" />
			</button>
			<iframe
				className={styles.iframeFullScreen}
				width="100%"
				height="100%"
				title={video.alt}
				src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&controls=1&rel=0`}
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				id="ytPlayer"
			></iframe>
		</div>,
		document.body
	);
};

export default VideoModal;