'use client'
import {
	BgOfPortrait, BgPortraitDesktop,
	BgPortraitMobileLg,
	BgPortraitMobileMd,
	BgPortraitMobileSm,
	BgPortraitMobileXl, LeftWingIcon, RightWingIcon
} from '@/app/(home)/images'
import H1SrOnly from '@/components/H1SrOnly/H1SrOnly'
import useWindowSize from '@/hooks/useWindowSize'
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
	const {screenWidth, screenHeight} = useWindowSize()
	
	return (
		<>
			{/* grey background */}
			<BgOfPortrait/>
			<div className={styles.bgImageWrapper}>
				<BgPortraitMobileSm/>
				<BgPortraitMobileXl/>
				<BgPortraitMobileMd/>
				<BgPortraitMobileLg/>
				<BgPortraitDesktop/>
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