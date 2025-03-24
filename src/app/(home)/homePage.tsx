import classNames from 'classnames'
import Image from 'next/image'
import type { ReactElement } from 'react'
import bgOfPortrait from '../../../public/images/home/bgOfPortrait.jpg'
import bgPortraitDesktop from '../../../public/images/home/bgPortraitDesktop.jpg'
import bgPortraitMobileLg from '../../../public/images/home/bgPortraitDesktopLg.jpg'
import bgPortraitMobileMd from '../../../public/images/home/bgPortraitMobileMd.jpg'
import bgPortraitMobileSm from '../../../public/images/home/bgPortraitMobileSm.jpg'
import bgPortraitMobileXl from '../../../public/images/home/bgPortraitMobileXl.jpg'
import leftWingIcon from '../../../public/images/icons/left_wing.svg'
import rightWingIcon from '../../../public/images/icons/right_wing.svg'
import styles from './home.module.scss'

const HomePage = (): ReactElement => {
	return (
		<div className={styles.root}>
			<Image
				fill
				className={styles.bgOfPortrait}
				src={bgOfPortrait}
				alt='Background home page color'
				priority
				placeholder="blur"
			/>
			<div className={styles.bgImageWrapper}>
				<Image
					fill
					className={classNames(styles.bgPortrait, styles.bgPortraitMobileSm)}
					src={bgPortraitMobileSm}
					alt='Background image Veronika Brook'
					priority
					loading='eager'
					placeholder="blur"
				/>
				<Image
					fill
					className={classNames(styles.bgPortrait, styles.bgPortraitMobileXl)}
					src={bgPortraitMobileXl}
					alt='Background image Veronika Brook'
					priority
					loading='eager'
					placeholder="blur"
				/>
				<Image
					className={classNames(styles.bgPortrait, styles.bgPortraitMobileMd)}
					src={bgPortraitMobileMd}
					alt='Background image Veronika Brook'
					loading="eager"
					placeholder="blur"
				/>
				<Image
					fill
					className={classNames(styles.bgPortrait, styles.bgPortraitMobileLg)}
					src={bgPortraitMobileLg}
					alt='Background image Veronika Brook'
					priority
					loading='eager'
					placeholder="blur"
				/>
				<Image
					className={classNames(styles.bgPortrait, styles.bgPortraitDesktop)}
					src={bgPortraitDesktop}
					alt='Background image Veronika Brook'
					priority
					loading='eager'
					placeholder="blur"
				/>
			</div>
			<div className={styles.textWrapper}>
				<div className={styles.innerTextWrapper}>
					<div className={styles.textJustifyWrapper}>
						<div className={styles.line1And2And3Wrapper}>
							<h1 className={styles.line1}>OPERA SINGER</h1>
							<div className={styles.line2Wrapper}>
								<div className={styles.line2WrapperAbsolute}>
									<Image
										src={leftWingIcon}
										alt='left wing icon'
										priority
										loading='eager'
										width={leftWingIcon.width}
										height={leftWingIcon.height}
										className={styles.wingLeft}
									/>
									<h2 className={styles.line2}>Soprano coloratura</h2>
									<Image
										src={rightWingIcon}
										alt='right wing icon'
										priority
										loading='eager'
										width={rightWingIcon.width}
										height={rightWingIcon.height}
										className={styles.wingRight}
									/>
								</div>
							</div>
							<h2 className={styles.line3}>
								CLASSICAL CROSSOVER ARTIST
							</h2>
						</div>
					</div>
				</div>
			</div>
		
		</div>
	)
}

export default HomePage