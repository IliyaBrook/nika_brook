import { Metadata } from 'next'
import Image from 'next/image'
import styles from './home.module.scss'
import bgPortraitImage from '../../public/images/home/img_background_desktop_1.jpg'
import bg from '../../public/images/home/bg_desktop.jpg'

export const metadata: Metadata = {
	title: 'Home - Veronika Brook',
	description:
		'Enjoy the art of Veronika Brook captured in performances and interviews.'
}

export const dynamic = 'force-static'

export default async function Home() {
	return (
		<main className={styles.main}>
			<Image
				className={styles.bg}
				src={bg}
				alt='Background image Veronika Brook'
				sizes="50vw"
				priority
			/>
			<div className={styles.bgImageWrapper}>
				<Image
					className={styles.bgPortraitImage}
					src={bgPortraitImage}
					alt='Background image Veronika Brook'
					sizes="100vw"
					priority
				/>
			</div>
		</main>
	)
}
