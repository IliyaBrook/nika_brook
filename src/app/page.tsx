import { StructuredData } from '@/components/StructuredData'
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


export const metadata: Metadata  = {
	title: 'Veronika Brook - Opera Singer & Crossover Artist',
	description:
		'Experience the artistry of Veronika Brook, an internationally acclaimed opera singer and crossover artist. Explore her performances and music career.',
	keywords: [
		'Veronika Brook',
		'opera singer',
		'coloratura soprano',
		'classical crossover artist',
		'Veronika Brook music',
		'Veronika Brook performances',
		'vocalist',
		'classical music'
	],
	openGraph: {
		title: 'Veronika Brook - Opera Singer & Crossover Artist',
		description: 'Experience the artistry of Veronika Brook, an internationally acclaimed opera singer and crossover artist.',
		url: 'https://veronikabrook.com',
		type: 'website',
		images: [
			{
				url: 'https://veronikabrook.com/images/home/bgPortraitDesktop.jpg',
				width: 1200,
				height: 800,
				alt: 'Veronika Brook - Opera Singer'
			}
		]
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Veronika Brook - Opera Singer & Crossover Artist',
		description: 'Experience the artistry of Veronika Brook, an internationally acclaimed opera singer and crossover artist.',
		images: ['https://veronikabrook.com/images/home/bgPortraitDesktop.jpg']
	},
	robots: {
		index: true,
		follow: true
	},
	alternates: {
		canonical: 'https://veronikabrook.com'
	}
};

const websiteSchema = {
	'@context': 'https://schema.org',
	'@type': 'WebSite',
	name: 'Veronika Brook Official',
	url: 'https://veronikabrook.com',
	potentialAction: {
		'@type': 'SearchAction',
		target: 'https://veronikabrook.com/?s={search_term_string}',
		'query-input': 'required name=search_term_string'
	}
};

export default async function Home() {
	
	return (
		<>
			<StructuredData data={websiteSchema} />
			<main className={styles.main}>
				{/* background image of image portrait */}
				<Image
					className={styles.bgOfPortrait}
					src={bgOfPortrait}
					alt='Background home page color'
					priority
					placeholder="blur"
				/>
				<div className={styles.bgImageWrapper}>
					{/* mobile sm [width:0px-330px] */}
					<Image
						className={classNames(styles.bgPortrait, styles.bgPortraitMobileSm)}
						src={bgPortraitMobileSm}
						alt='Background image Veronika Brook'
						priority
						loading='eager'
						placeholder="blur"
					/>
					{/* mobile md [width:330px-398px] */}
					<Image
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
											loading='eager'
										/>
										<h2 className={styles.line2}>
											Soprano coloratura
										</h2>
										<Image
											className={styles.wingRight}
											src={rightWingIcon}
											alt='right wing icon'
											priority
											loading='eager'
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
