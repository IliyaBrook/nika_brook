'use client'
import {
	BgOfPortrait,
	BgPortraitDesktop,
	BgPortraitMobileLg,
	BgPortraitMobileMd,
	BgPortraitMobileSm,
	BgPortraitMobileXl,
	LeftWingIcon,
	RightWingIcon
} from '@/app/(home)/images'
import useWindowSize from '@/hooks/useWindowSize'
import type { ReactElement } from 'react'
import styles from './home.module.scss'


const HomePage = (): ReactElement => {
	const {screenWidth, screenHeight} = useWindowSize()
	
	return (
		<>
			<BgOfPortrait/>
			<div className={styles.bgImageWrapper}>
				{ screenHeight > 858 ? (
					// max-height: 858px
					<>
						<BgPortraitMobileMd/>
					</>
				) : (
					// min-height: 858px
					<>
				
						<BgPortraitMobileXl/>
						<BgPortraitDesktop/>
						<BgPortraitMobileLg/>
						{screenWidth < 398 && (
							<>
								<BgPortraitMobileSm />
							</>
						)}
					</>
				)}
			
			</div>
			<div className={styles.textWrapper}>
				<div className={styles.innerTextWrapper}>
					<div className={styles.textJustifyWrapper}>
						<div className={styles.line1And2And3Wrapper}>
							<h1 className={styles.line1}>OPERA SINGER</h1>
							<div className={styles.line2Wrapper}>
								<div className={styles.line2WrapperAbsolute}>
									<LeftWingIcon/>
									<h2 className={styles.line2}>Soprano coloratura</h2>
									<RightWingIcon/>
								</div>
							</div>
							<h2 className={styles.line3}>
								CLASSICAL CROSSOVER ARTIST
							</h2>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default HomePage