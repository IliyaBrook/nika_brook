import H1SrOnly from '@/components/H1SrOnly/H1SrOnly'
import classNames from 'classnames'
import Head from 'next/head'
import Image from 'next/image'
import bgOfPortrait from '../../public/images/home/bgOfPortrait.jpg'
import bgPortraitDesktop from '../../public/images/home/bgPortraitDesktop.jpg'
import bgPortraitMobileLg from '../../public/images/home/bgPortraitDesktopLg.jpg'
import bgPortraitMobileMd from '../../public/images/home/bgPortraitMobileMd.jpg'
import bgPortraitMobileSm from '../../public/images/home/bgPortraitMobileSm.jpg'
import bgPortraitMobileXl from '../../public/images/home/bgPortraitMobileXl.jpg'
import leftWingIcon from '../../public/images/icons/left_wing.svg'
import rightWingIcon from '../../public/images/icons/right_wing.svg'
import styles from './home.module.scss'


export default async function Home() {
	return (
		<>
			<main className={styles.main}>
				<H1SrOnly>Veronika Brook - Opera Singer & Crossover Artist</H1SrOnly>
				<Image
					fill
					className={styles.bgOfPortrait}
					src={bgOfPortrait}
					alt='Background home page color'
					priority
					loading="lazy"
					placeholder="blur"
				/>
				<div className={styles.bgImageWrapper}>
					{/* mobile sm [width:0px-330px] */}
					<Image
						fill
						className={classNames(styles.bgPortrait, styles.bgPortraitMobileSm)}
						src={bgPortraitMobileSm}
						alt='Background image Veronika Brook'
						priority
						loading='eager'
						placeholder="blur"
					/>
					{/* mobile md [width:330px-398px] */}
					<Image
						fill
						className={classNames(styles.bgPortrait, styles.bgPortraitMobileXl)}
						src={bgPortraitMobileXl}
						alt='Background image Veronika Brook'
						priority
						loading='eager'
						placeholder="blur"
					/>
					{/* mobile md [width:398px-554px] */}
					<Image
						className={classNames(styles.bgPortrait, styles.bgPortraitMobileMd)}
						src={bgPortraitMobileMd}
						alt='Background image Veronika Brook'
						loading='eager'
						placeholder="blur"
					/>
					{/* mobile md [width:554px-1100px] */}
					<Image
						fill
						className={classNames(styles.bgPortrait, styles.bgPortraitMobileLg)}
						src={bgPortraitMobileLg}
						alt='Background image Veronika Brook'
						priority
						loading='eager'
						placeholder="blur"
					/>
					{/* desktop < 1100px */}
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
						<div className={styles.textJutifyWrapper}>
							<div className={styles.line1And2And3Wrapper}>
								<h1 className={styles.line1}>OPERA SINGER</h1>
								<div className={styles.line2Wrapper}>
									<div className={styles.line2WrapperAbsolute}>
										<Image
											src={leftWingIcon}
											alt='left wing icon'
											priority
											loading="lazy"
											width={leftWingIcon.width}
											height={leftWingIcon.height}
											className={styles.wingLeft}
										/>
										<h2 className={styles.line2}>Soprano coloratura</h2>
										<Image
											src={rightWingIcon}
											alt='right wing icon'
											priority
											loading="lazy"
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
			</main>
		</>
	)
}
