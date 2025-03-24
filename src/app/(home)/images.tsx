import styles from '@/app/(home)/home.module.scss'
import classNames from 'classnames'
import Image from 'next/image'
import { JSX } from 'react'
import bgOfPortrait from '../../../public/images/home/bgOfPortrait.jpg'
import bgPortraitDesktop from '../../../public/images/home/bgPortraitDesktop.jpg'
import bgPortraitMobileLg from '../../../public/images/home/bgPortraitDesktopLg.jpg'
import bgPortraitMobileMd from '../../../public/images/home/bgPortraitMobileMd.jpg'
import bgPortraitMobileSm from '../../../public/images/home/bgPortraitMobileSm.jpg'
import bgPortraitMobileXl from '../../../public/images/home/bgPortraitMobileXl.jpg'
import leftWingIcon from '../../../public/images/icons/left_wing.svg'
import rightWingIcon from '../../../public/images/icons/right_wing.svg'

export const BgOfPortrait = (): JSX.Element => <Image
	fill
	className={styles.bgOfPortrait}
	src={bgOfPortrait}
	alt='Background home page color'
	priority
	placeholder='blur'
/>
// profile images for different sizes
export const BgPortraitMobileSm = (): JSX.Element => <Image
	className={classNames(styles.bgPortrait, styles.bgPortraitMobileSm)}
	src={bgPortraitMobileSm}
	alt='Background image Veronika Brook'
	priority
	loading='eager'
	placeholder='blur'
/>

export const BgPortraitMobileXl = (): JSX.Element => <Image
	fill
	className={classNames(styles.bgPortrait, styles.bgPortraitMobileXl)}
	src={bgPortraitMobileXl}
	alt='Background image Veronika Brook'
	priority
	loading='eager'
	placeholder='blur'
/>
export const BgPortraitMobileMd = (): JSX.Element => <Image
	className={classNames(styles.bgPortrait, styles.bgPortraitMobileMd)}
	src={bgPortraitMobileMd}
	alt='Background image Veronika Brook'
	loading='eager'
	placeholder='blur'
/>
export const BgPortraitMobileLg = (): JSX.Element => <Image
	className={classNames(styles.bgPortrait, styles.bgPortraitMobileLg)}
	src={bgPortraitMobileLg}
	alt='Background image Veronika Brook'
	priority
	loading='eager'
	placeholder='blur'
/>
export const BgPortraitDesktop = (): JSX.Element => <Image
	className={classNames(styles.bgPortrait, styles.bgPortraitDesktop)}
	src={bgPortraitDesktop}
	alt='Background image Veronika Brook'
	priority
	loading='eager'
	placeholder='blur'
/>

// for logo image elements

export const LeftWingIcon = (): JSX.Element => <Image
	src={leftWingIcon}
	alt='left wing icon'
	priority
	loading='eager'
	width={leftWingIcon.width}
	height={leftWingIcon.height}
	className={styles.wingLeft}
/>

export const RightWingIcon = (): JSX.Element => <Image
	src={rightWingIcon}
	alt='right wing icon'
	priority
	loading='eager'
	width={rightWingIcon.width}
	height={rightWingIcon.height}
	className={styles.wingRight}
/>