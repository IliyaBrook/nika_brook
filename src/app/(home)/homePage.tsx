'use client'

import BgOfPortraitBlur, {
	BgOfPortrait,
	BgPortraitDesktop,
	BgPortraitMobileLg,
	BgPortraitMobileMd,
	BgPortraitMobileSm,
	BgPortraitMobileXl,
	LeftWingIcon,
	RightWingIcon
} from '@/app/(home)/images'
import useWaitDomStable from '@/hooks/useWaitDomStable'
import useWindowSize from '@/hooks/useWindowSize'
import dynamic from 'next/dynamic'
import { type ReactElement } from 'react'
import styles from './home.module.scss'

const HomePage = (): ReactElement => {
	const { screenWidth, screenHeight } = useWindowSize()
	const isDomStable = useWaitDomStable()
	if (!isDomStable) return null
	return (
		<>
			{isDomStable && <BgOfPortrait />}
			<div className={styles.bgImageWrapper}>
				{isDomStable && <BgOfPortraitBlur />}
				{screenWidth > 398 && screenWidth < 784 && (
					<>
						{isDomStable && <BgPortraitMobileMd />}
					</>
				)}
				{screenHeight < 858 && (
					// max-height: 858px
					<>
						{screenWidth > 1199 && (
							<>
								{isDomStable && <BgPortraitDesktop />}
							</>
						)}
						
						{screenWidth > 784 && screenWidth < 1199 && (
							<>
								{isDomStable && <BgPortraitMobileLg />}
							</>
						)}
						
						{screenWidth < 398 && (
							<>
								{isDomStable && <BgPortraitMobileSm />}
							</>
						)}
						{screenWidth > 330 && screenWidth < 398 && (
							<>
								{isDomStable && <BgPortraitMobileXl />}
							</>
						)}
					</>
				)}
			</div>
			{isDomStable && <div className={styles.textWrapper}>
				<div className={styles.innerTextWrapper}>
					<div className={styles.textJustifyWrapper}>
						<div className={styles.line1And2And3Wrapper}>
							<h1 className={styles.line1}>OPERA SINGER</h1>
							<div className={styles.line2Wrapper}>
								<div className={styles.line2WrapperAbsolute}>
									<LeftWingIcon />
									<h2 className={styles.line2}>Soprano coloratura</h2>
									<RightWingIcon />
								</div>
							</div>
							<h2 className={styles.line3}>
								CLASSICAL CROSSOVER ARTIST
							</h2>
						</div>
					
					</div>
				</div>
			</div>}
		</>
	)
}

export default HomePage