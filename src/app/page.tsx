import styles from './home.module.scss'
import { VideoBackground } from '@/components/VideoBackground/VideoBackground'
import { logVisits } from '@/utils/logVisits'
import { ScrollBarWrapper } from '@/components/ScrollBarWrapper/ScrollBarWrapper'
import { Metadata } from 'next'
import { headers } from 'next/headers'

export const metadata: Metadata = {
	title: 'Home - Veronika Brook',
	description:
		'Enjoy the art of Veronika Brook captured in performances and interviews.'
}

export default async function Home() {
	const headerList = headers()
	const hostname = headerList.get('host')
	console.log('Home app hostname:', hostname)

	void logVisits('home')
	return (
		<ScrollBarWrapper>
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<h1>domain: {hostname}</h1>
			</div>
			<main className={styles.main}>
				<div className={styles.videoContainer}>
					<VideoBackground src="home_bg_video.mp4" type="video/mp4" />
				</div>
			</main>
		</ScrollBarWrapper>
	)
}
