import classNames from 'classnames'
import { Metadata } from 'next'
import Image from 'next/image'
import styles from './home.module.scss'
import bgPortraitMobile from '../../public/images/home/img_background_mobile.jpg'
import bgPortraitMobileSm from '../../public/images/home/img_background_mobile_sm_3.jpg'
import bgPortraitDesktop from '../../public/images/home/img_background_desktop.jpg'
import bg from '../../public/images/home/bg_desktop_2.jpg'

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
				alt='Background home page color'
				sizes="100vw"
				priority
			/>
			<div className={styles.bgImageWrapper}>
				<Image
					className={classNames(styles.bgPortraitImage, styles.bgPortraitDesktop)}
					src={bgPortraitDesktop}
					alt='Background image Veronika Brook'
					sizes="100vw"
					priority
				/>
				<Image
					className={classNames(styles.bgPortraitImage, styles.bgPortraitMobile)}
					src={bgPortraitMobile}
					alt='Background image Veronika Brook'
					sizes="100vw"
					priority
				/>
				<Image
					className={classNames(styles.bgPortraitImage, styles.bgPortraitMobileSm)}
					src={bgPortraitMobileSm}
					alt='Background image Veronika Brook'
					sizes="100vw"
					priority
				/>
			</div>
			<div className={styles.textWrapper}>
				<h1 className={styles.title}>Veronika Brook</h1>
				<p className={styles.subtitle}>
					<strong>Soprano Coloratura</strong>
					<br/>
					An internationally renowned opera singer
					<br/>
					Classical crossover artist
				</p>
			</div>
		</main>
	)
}
