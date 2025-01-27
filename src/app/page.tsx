import classNames from 'classnames'
import { Metadata } from 'next'
import Image from 'next/image'
import styles from './home.module.scss'
import bgOfPortrait from '../../public/images/home/bgOfPortrait.jpg'
import leftWingIcon from '../../public/images/icons/left_wing.svg'
import rightWingIcon from '../../public/images/icons/right_wing.svg'
import bgPortraitMobileSm from '../../public/images/home/bgPortraitMobileSm.jpg'
import bgPortraitMobileMd from '../../public/images/home/bgPortraitMobileMd.jpg'
import bgPortraitMobileXl from '../../public/images/home/bgPortraitMobileXl.jpg'
import bgPortraitMobileLg from '../../public/images/home/bgPortraitDesktopLg.jpg'
import bgPortraitDesktop from '../../public/images/home/bgPortraitDesktop.jpg'


export const metadata: Metadata = {
	title: 'Home - Veronika Brook',
	description:
		'Enjoy the art of Veronika Brook captured in performances and interviews.'
}

export const dynamic = 'force-static'

export default function Home() {
	
	return (
		<main className={styles.main}>
			{/* background image of image portrait */}
			<Image
				className={styles.bgOfPortrait}
				src={bgOfPortrait}
				alt='Background home page color'
				priority
				loading="eager"
			/>
			<div className={styles.bgImageWrapper}>
				{/* mobile sm [width:0px-330px] */}
				<Image
					className={classNames(styles.bgPortrait, styles.bgPortraitMobileSm)}
					src={bgPortraitMobileSm}
					alt='Background image Veronika Brook'
					priority
					loading="eager"
				/>
				{/* mobile md [width:330px-398px] */}
				<Image
					className={classNames(styles.bgPortrait, styles.bgPortraitMobileXl)}
					src={bgPortraitMobileXl}
					alt='Background image Veronika Brook'
					priority
					loading="eager"
				/>
				{/* mobile md [width:398px-554px] */}
				<Image
					className={classNames(styles.bgPortrait, styles.bgPortraitMobileMd)}
					src={bgPortraitMobileMd}
					alt='Background image Veronika Brook'
					loading="eager"
				/>
				{/* mobile md [width:554px-1100px] */}
				<Image
					className={classNames(styles.bgPortrait, styles.bgPortraitMobileLg)}
					src={bgPortraitMobileLg}
					alt='Background image Veronika Brook'
					priority
					loading="eager"
				/>
				{/* desktop < 1100px */}
				<Image
					className={classNames(styles.bgPortrait, styles.bgPortraitDesktop)}
					src={bgPortraitDesktop}
					alt='Background image Veronika Brook'
					priority
					loading="eager"
				/>
			</div>
			<div className={styles.textWrapper}>
				<div className={styles.innerTextWrapper}>
					<div className={styles.textJutifyWrapper}>
						<div className={styles.line1And2Wrapper} >
							<h1 className={styles.line1}>
								OPERA SINGER
							</h1>
							<div className={styles.line2Wrapper}>
								<div className={styles.line2WrapperAbsolute}>
									<Image
										className={styles.wingLeft}
										src={leftWingIcon}
										alt='left wing icon'
										priority
										loading="eager"
									/>
									<h2 className={styles.line2}>
										Soprano coloratura
									</h2>
									<Image
										className={styles.wingRight}
										src={rightWingIcon}
										alt='right wing icon'
										priority
										loading="eager"
									/>
								</div>
							</div>
						</div>
						<h2 className={styles.line3}>
							CLASSICAL CROSSOVER ARTIST
						</h2>
					</div>
				</div>
			</div>
		</main>
	)
}
