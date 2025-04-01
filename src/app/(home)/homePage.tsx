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
import { useGetDeviceType } from '@/hooks/useGetDeviceType'
import useWaitDomStable from '@/hooks/useWaitDomStable'
import useWindowSize from '@/hooks/useWindowSize'
import { type ReactElement, useEffect, useState } from 'react'
import styles from './home.module.scss'

const HomePage = (): ReactElement => {
	const { screenWidth, screenHeight } = useWindowSize()
	// const [isReady, setIsReady] = useState(false)
	// const deviceType = useGetDeviceType()
	const isReady = useWaitDomStable()
	
	// useEffect(() => {
	// 	if (deviceType) {
	// 		if (deviceType === 'iOS') {
	// 			setIsReady(true)
	// 		}else {
	// 			if (isDomStable) {
	// 				setIsReady(true)
	// 			}
	// 		}
	// 	}
	// }, [isDomStable, deviceType])
	if (!isReady) return null
	return (
		<div>
			{isReady && <BgOfPortrait />}
			<div className={styles.bgImageWrapper}>
				{isReady && <BgOfPortraitBlur />}
				{screenWidth > 398 && screenWidth < 784 && (
					<>
						{isReady && <BgPortraitMobileMd />}
					</>
				)}
				{screenHeight < 858 && (
					// max-height: 858px
					<>
						{screenWidth > 1199 && (
							<>
								{isReady && <BgPortraitDesktop />}
							</>
						)}
						
						{screenWidth > 784 && screenWidth < 1199 && (
							<>
								{isReady && <BgPortraitMobileLg />}
							</>
						)}
						
						{screenWidth < 330 && (
							<>
								{isReady && <BgPortraitMobileSm />}
							</>
						)}
						{screenWidth > 330 && screenWidth < 398 && (
							<>
								{isReady && <BgPortraitMobileXl />}
							</>
						)}
					</>
				)}
			</div>
			{isReady && <div className={styles.textWrapper}>
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
		</div>
	)
}

export default HomePage