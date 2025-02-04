import ImageWithCredit from '@/components/ImageWithCredit/ImageWithCredit'
import { StructuredData } from '@/components/StructuredData'
import { sameAs } from '@/data'
import { getDeviceType } from '@/utils/getDeviceType'
import classNames from 'classnames'
import { Metadata } from 'next'
import Image, { ImageProps } from 'next/image'
import { headers } from 'next/headers'
import styles from './biography.module.scss'
import imageSec1 from '../../../public/images/bioPage/bio_sec_1.jpg'
import imageSec2_1 from '../../../public/images/bioPage/bio_sec_2_1.jpg'
import imageSec2_2 from '../../../public/images/bioPage/bio_sec_2_2.jpg'
import imageSec3 from '../../../public/images/bioPage/bio_sec_3.jpg'


export const metadata: Metadata = {
	title: 'Veronika Brook - Award-Winning Opera Singer & Biography',
	description:
		'Explore the inspiring biography of Veronika Brook, an award-winning coloratura soprano. Follow her journey from Estonia to the grand opera stages worldwide.',
	keywords: [
		'Veronika Brook biography',
		'opera singer biography',
		'coloratura soprano career',
		'Veronika Brook soprano',
		'opera career',
		'international performances',
		'classical music artists'
	],
	openGraph: {
		title: 'Veronika Brook - Award-Winning Opera Singer & Biography',
		description: 'Explore the inspiring biography of Veronika Brook, an award-winning coloratura soprano.',
		url: 'https://veronikabrook.com/biography',
		type: 'profile',
		images: [
			{
				url: 'https://veronikabrook.com/images/bioPage/bio_sec_1.jpg',
				width: 1200,
				height: 800,
				alt: 'Veronika Brook Biography'
			}
		]
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Veronika Brook - Biography & Opera Career',
		description: 'Discover the life and career of Veronika Brook, a world-renowned opera singer.',
		images: ['https://veronikabrook.com/images/bioPage/bio_sec_1.jpg']
	},
	robots: {
		index: true,
		follow: true
	},
	alternates: {
		canonical: 'https://veronikabrook.com/biography'
	}
};

const biographySchema = {
	'@context': 'https://schema.org',
	'@type': 'ProfilePage',
	name: 'Veronika Brook - Biography',
	url: 'https://veronikabrook.com/biography',
	description: 'Biography of Veronika Brook, an accomplished soprano with a rich operatic repertoire.',
	image: 'https://veronikabrook.com/images/bioPage/bio_sec_1.jpg',
	breadcrumb: {
		'@type': 'BreadcrumbList',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				name: 'Home',
				item: 'https://veronikabrook.com'
			},
			{
				'@type': 'ListItem',
				position: 2,
				name: 'Biography',
				item: 'https://veronikabrook.com/biography'
			}
		]
	},
	mainEntity: {
		'@type': 'Person',
		name: 'Veronika Brook',
		alternateName: 'Veronika Brook Soprano',
		jobTitle: 'Opera Singer',
		nationality: 'Estonian',
		birthPlace: 'Estonia',
		knowsLanguage: ['English', 'Hebrew', 'Russian', 'Italian'],
		sameAs
	}
};

export default async function Biography () {
	let deviceType = 'unknown'
	const headerList = await headers()
	const userAgent = headerList.get('user-agent')
	if (userAgent && typeof userAgent === 'string') {
		getDeviceType(userAgent, (d) => deviceType = d)
	}
	
	const isIos = deviceType === 'iOS'
	
	return (
		<>
			<StructuredData data={biographySchema} />
			<main className={classNames(styles.root, { [styles.iosRoot]: isIos })}>
				<div className={styles.biographyContainer}>
					<div className={styles.bioSection1}>
						<ImageWithCredit<ImageProps>
							ImageComponentInstance={Image}
							className={styles.bioSection1Img}
							creditText='Yossi Zwecker'
							imageProps={{
								src: imageSec1,
								alt: 'Biography page image 1',
								fill: true,
								sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw',
								loading:'lazy',
								className: classNames(styles.bioImage , { [styles.iosImg]: isIos }),
								placeholder:'blur'
							}}
						/>
						<div className={styles.bioSection1Text}>
							<p>
								<span className={styles.boldText}>Veronika Brook</span> began her career performing a wide range of
								operatic roles,
								showcasing her versatility and artistry as a coloratura soprano.
								After establishing herself in Ukraine, her career reached new heights upon moving to Israel, where she
								quickly became a prominent figure in the opera scene.
							</p>
							<p>
								As a graduate of the prestigious Meitar Young Artist Program, Veronika Brook has become a regular
								performer with The Israeli Opera in Tel Aviv.
								Her repertoire demonstrates her exceptional range and technical precision in both lyric and dramatic
								coloratura roles. Highlights include Gilda in <span className={styles.cursiveText}>Rigoletto</span> by
								Verdi, Olympia in <span className={styles.cursiveText}>Les Contes d’Hoffmann</span> by Offenbach, and
								The
								Queen of the Night in <span className={styles.cursiveText}>Die Zauberflöte</span> by Mozart.
								She has also performed in productions of Handel’s <span className={styles.cursiveText}>Alcina</span>,
								Mozart’s <span className={styles.cursiveText}>Le nozze di Figaro</span>,
								Massenet’s <span className={styles.cursiveText}>Werther</span>, and Bellini’s La <span
								className={styles.cursiveText}>sonnambula</span>.
							</p>
							<p>
								Veronika’s work with The Israeli Opera has earned her critical acclaim for her technical brilliance,
								dramatic presence, and the emotional depth she brings to her performances. Her collaborations with
								internationally renowned conductors and directors have solidified her reputation as one of the leading
								talents in the Israeli opera scene.
							</p>
						</div>
					</div>
					
					<div className={styles.bioSection2}>
						<div className={styles.bioSection2Text}>
							<p>
								Veronika’s artistry extends worldwide, with notable performances at international events, including a
								2024
								appearance at a special concert organized by Pope Francis’ foundation in Rome. She has also performed at
								prestigious gala events, including <span
								className={styles.cursiveText}>The World Opera Stars Gala</span>
								concerts in France and Belarus.
							</p>
							<p>
								Veronika constantly performs her extensive repertoire with major Israeli orchestras. In 2021, she
								collaborated with the celebrated Italian tenor Francesco Meli on the stage of The Israeli Opera.
							</p>
							<p>
								Veronika has received numerous accolades in international vocal competitions, including 1st Prize at the
								JI Opera Competition,
								3rd Prize at Nuovo Canto Milano Competition and recognition
								at the Competizione dell’Opera and Hans Gabor Belvedere Singing Competition. These achievements reflect
								her exceptional musicality and dedication to her craft.
							</p>
							<p>
								Alongside her opera career, Veronika Brook is an accomplished classical crossover artist and songwriter.
								Her original music combines the elegance of classical traditions with the copntepmporary appeal of
								modern
								genres, creating a unique and captivating sound.
							</p>
							<p>
								Veronika’s compositions are available on all major streaming platforms and are a highlight of her live
								concert programs, where she blends classical repertoire with her own works. Her crossover performances
								showcase her versatility and bring a fresh perspective to classical music, connecting with a wide range
								of
								audiences.
							</p>
						</div>
						<div className={styles.bioSection2Imgs}>
							<ImageWithCredit<ImageProps>
								ImageComponentInstance={Image}
								className={styles.bioSection2Img1}
								creditText='Yossi Zwecker'
								imageProps={{
									src: imageSec2_1,
									alt: 'Biography page image section 2.1',
									fill: true,
									sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
									loading:'lazy',
									className: classNames(styles.bioImage , { [styles.iosImg]: isIos }),
									placeholder:'blur'
								}}
							/>
							<ImageWithCredit<ImageProps>
								className={styles.bioSection2Img2}
								ImageComponentInstance={Image}
								creditText='Yossi Zwecker'
								imageProps={{
									src: imageSec2_2,
									alt: 'Biography page image section 2.2',
									fill: true,
									className: classNames(styles.bioImage , { [styles.iosImg]: isIos }),
									sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
									loading:'lazy',
									placeholder:'blur'
								}}
							/>
						</div>
					</div>
					<div className={styles.bioSection3}>
						<ImageWithCredit<ImageProps>
							className={classNames(styles.bioSection3Img, styles.bioDesktopImage)}
							ImageComponentInstance={Image}
							creditText='Yoel Levy'
							imageProps={{
								src: imageSec3,
								alt: 'Biography page image section 3',
								fill: true,
								className: classNames(styles.bioImage , { [styles.iosImg]: isIos }),
								sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 80vw',
								loading:'lazy',
								placeholder:'blur'
							}}
						/>
					</div>
				</div>
			</main>
		</>
	)
}