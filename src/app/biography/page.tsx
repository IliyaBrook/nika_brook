import ImageWithCredit from '@/components/ImageWithCredit/ImageWithCredit'
import classNames from 'classnames'
import { Metadata, NextPage } from 'next'
import Image, { ImageProps } from 'next/image'
import styles from './biography.module.scss'

export const metadata: Metadata = {
	title: 'Veronika Brook - Soprano',
	description:
		'Biography of Veronika Brook, an accomplished soprano with a rich operatic repertoire.',
	openGraph: {
		title: 'Veronika Brook - Soprano',
		description:
			'Learn about Veronika Brook\'s journey from Estonia to the stages of the world.',
		type: 'profile'
	}
}

export const dynamic = 'force-static'

const Biography: NextPage = () => {
	return (
		<div className={styles.root}>
			<div className={styles.biographyContainer}>
				<div className={styles.bioSection1}>
					<ImageWithCredit<ImageProps>
						ImageComponentInstance={Image}
						className={styles.bioSection1Img}
						creditText='Yossi Zwecker'
						imageProps={{
							src: '/images/bioPage/bio_sec_1.jpg',
							alt: 'Biography page image 1',
							fill: true,
							sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw',
							priority: true,
							className: styles.bioImage
						}}
					/>
					<div className={styles.bioSection1Text}>
						<p>
							<span className={styles.boldText}>Veronika Brook</span> began her career performing a wide range of operatic roles,
							showcasing her versatility and artistry as a coloratura soprano.
							After establishing herself in Ukraine, her career reached new heights upon moving to Israel, where she
							quickly became a prominent figure in the opera scene.
						</p>
						<p>
							As a graduate of the prestigious Meitar Young Artist Program, Veronika Brook has become a regular
							performer with The Israeli Opera in Tel Aviv.
							Her repertoire demonstrates her exceptional range and technical precision in both lyric and dramatic
							coloratura roles. Highlights include Gilda in <span className={styles.cursiveText}>Rigoletto</span> by
							Verdi, Olympia in <span className={styles.cursiveText}>Les Contes d’Hoffmann</span> by Offenbach, and The
							Queen of the Night in <span className={styles.cursiveText}>Die Zauberflöte</span> by Mozart.
							She has also performed in productions of Handel’s <span className={styles.cursiveText}>Alcina</span>,
							Mozart’s <span className={styles.cursiveText}>Le nozze di Figaro</span>,
							Massenet’s <span className={styles.cursiveText}>Werther</span>, and Bellini’s La <span className={styles.cursiveText}>sonnambula</span>.
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
							Veronika’s artistry extends worldwide, with notable performances at international events, including a 2024
							appearance at a special concert organized by Pope Francis’ foundation in Rome. She has also performed at
							prestigious gala events, including <span className={styles.cursiveText}>The World Opera Stars Gala</span>
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
							Her original music combines the elegance of classical traditions with the copntepmporary appeal of modern
							genres, creating a unique and captivating sound.
						</p>
						<p>
							Veronika’s compositions are available on all major streaming platforms and are a highlight of her live
							concert programs, where she blends classical repertoire with her own works. Her crossover performances
							showcase her versatility and bring a fresh perspective to classical music, connecting with a wide range of
							audiences.
						</p>
					</div>
					<div className={styles.bioSection2Imgs}>
						<ImageWithCredit<ImageProps>
							ImageComponentInstance={Image}
							className={styles.bioSection2Img1}
							creditText='Yossi Zwecker'
							imageProps={{
								src: '/images/bioPage/bio_sec_2_1.jpg',
								alt: 'Biography page image section 2.1',
								fill: true,
								sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
								priority: true,
								className: styles.bioImage
							}}
						/>
						<ImageWithCredit<ImageProps>
							className={styles.bioSection2Img2}
							ImageComponentInstance={Image}
							creditText='Yossi Zwecker'
							imageProps={{
								src: '/images/bioPage/bio_sec_2_2.jpg',
								alt: 'Biography page image section 2.2',
								fill: true,
								className: styles.bioImage,
								sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
								priority: true
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
							src: '/images/bioPage/bio_sec_3.jpg',
							alt: 'Biography page image section 3',
							fill: true,
							className: styles.bioImage,
							sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 80vw',
							priority: true
						}}
					/>
				</div>
			</div>
		</div>
	)
}

export default Biography