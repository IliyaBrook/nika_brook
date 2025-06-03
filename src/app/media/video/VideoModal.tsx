import styles from '@/app/media/video/video.module.scss'
import type { VideoGallery } from '@/types/sharable.types.ts'
import React, { useCallback, useState } from 'react'
import { createPortal } from 'react-dom'

const VideoModal = ({ video, onClose }: { video: VideoGallery; onClose: () => void }) => {
	const [hasError, setHasError] = useState(false)
	
	const handleEscapeKey = useCallback((e: KeyboardEvent) => {
		if (e.key === 'Escape') {
			onClose()
		}
	}, [onClose])

	React.useEffect(() => {
		document.addEventListener('keydown', handleEscapeKey)
		document.body.style.overflow = 'hidden'
		
		return () => {
			document.removeEventListener('keydown', handleEscapeKey)
			document.body.style.overflow = 'unset'
		}
	}, [handleEscapeKey])

	const handleIframeError = () => {
		setHasError(true)
	}

	return createPortal(
		<div className={styles.videoIframeWrapper} onClick={onClose}>
			<button className={styles.closeButton} onClick={onClose}>
				<img src="/images/icons/close_icon_black.png" alt="Close" />
			</button>
			<div onClick={(e) => e.stopPropagation()}>
				{hasError ? (
					<div className={styles.errorFallback}>
						<h3>Видео временно недоступно</h3>
						<p>Попробуйте открыть видео напрямую на YouTube:</p>
						<a 
							href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
							target="_blank"
							rel="noopener noreferrer"
							className={styles.youtubeLink}
						>
							Открыть на YouTube
						</a>
					</div>
				) : (
					<iframe
						className={styles.iframeFullScreen}
						width="100%"
						height="100%"
						title={video.alt}
						src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&controls=1&rel=0&modestbranding=1&fs=1&cc_load_policy=0&iv_load_policy=3&autohide=0&showinfo=0`}
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						onError={handleIframeError}
						id="ytPlayer"
					></iframe>
				)}
			</div>
		</div>,
		document.body
	);
};

export default VideoModal;