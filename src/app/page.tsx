import styles from './home.module.scss'
import { VideoBackground } from '@/components/VideoBackground/VideoBackground'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Home - Veronika Brook',
	description:
		'Enjoy the art of Veronika Brook captured in performances and interviews.'
}

export default async function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.videoContainer}>
				<VideoBackground src="home_bg_video.mp4" type="video/mp4" />
			</div>
		</main>
	)
}
