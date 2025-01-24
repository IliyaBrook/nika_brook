import classNames from 'classnames'
import { Metadata } from 'next'
import Image from 'next/image'
import styles from './home.module.scss'
import bgPortraitMobile from '../../public/images/home/img_background_mobile.jpg'
import bgPortraitMobileSm from '../../public/images/home/img_background_mobile_sm_3.jpg'
import bgPortraitDesktop from '../../public/images/home/img_background_desktop.jpg'
import bg from '../../public/images/home/bg_desktop_2.jpg'
import leftWingIcon from '../../public/images/icons/left_wing.svg'
import rightWingIcon from '../../public/images/icons/right_wing.svg'

export const metadata: Metadata = {
	title: 'Home - Veronika Brook',
	description:
		'Enjoy the art of Veronika Brook captured in performances and interviews.'
}

export const dynamic = 'force-static'

export default function Home() {
	
	return (
		<main className={styles.main}>
			<Image
				className={styles.bg}
				src={bg}
				alt='Background home page color'
				sizes='100vw'
				priority
			/>
			<div className={styles.bgImageWrapper}>
				<Image
					className={classNames(styles.bgPortraitImage, styles.bgPortraitDesktop)}
					src={bgPortraitDesktop}
					alt='Background image Veronika Brook'
					sizes='100vw'
					priority
				/>
				<Image
					className={classNames(styles.bgPortraitImage, styles.bgPortraitMobile)}
					src={bgPortraitMobile}
					alt='Background image Veronika Brook'
					sizes='100vw'
					priority
				/>
				<Image
					className={classNames(styles.bgPortraitImage, styles.bgPortraitMobileSm)}
					src={bgPortraitMobileSm}
					alt='Background image Veronika Brook'
					sizes='100vw'
					priority
				/>
			</div>
			<div className={styles.textWrapper}>
				<div className={styles.innerTextWrapper}>
					<div className={styles.line1And2Wrapper}>
						<h1 className={styles.line1}>
							OPERA SINGER
						</h1>
						<div className={styles.line2Wrapper}>
							<div className={styles.line2WrapperAbsolute}>
								<Image className={styles.wingLeft} src={leftWingIcon} alt='left wing icon' />
								<h2 className={styles.line2}>
									Soprano coloratura
								</h2>
								<Image className={styles.wingRight} src={rightWingIcon} alt='right wing icon' />
							</div>
						</div>
					</div>
					<h2 className={styles.line3}>
						CLASSICAL CROSSOVER ARTIST
					</h2>
				</div>
			</div>
		</main>
	)
}
