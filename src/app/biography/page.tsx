import { Metadata, NextPage } from 'next'
import Image from 'next/image'
import styles from './biography.module.scss'

export const metadata: Metadata = {
	title: 'Veronika Brook - Soprano',
	description:
		'Biography of Veronika Brook, an accomplished soprano with a rich operatic repertoire.',
	openGraph: {
		title: 'Veronika Brook - Soprano',
		description:
			"Learn about Veronika Brook's journey from Estonia to the stages of the world.",
		type: 'profile'
	}
}

export const dynamic = 'force-static'

const Biography: NextPage = () => {
	return (
		<div className={styles.root}>
			<div className={styles.biographyContainer}>
				<div className={styles.bioSection1}>
					<div className={styles.bioSection1Img}>
						<Image
							src='/images/bioPage/bio_sec_1.jpg'
							alt='Biography page image 1'
							fill
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw'
							priority
					
						/>
					</div>
					<div className={styles.bioSection1Text}>
						<p>
							Veronika Brook began her career performing a wide range of operatic roles, showcasing her versatility and artistry as a coloratura soprano.
							After establishing herself in Ukraine, her career reached new heights upon moving to Israel, where she quickly became a prominent figure in the opera scene.
						</p>
						<p>
							As a graduate of the prestigious Meitar Young Artist Program, Veronika Brook has become a regular performer with The Israeli Opera in Tel Aviv.
							Her repertoire demonstrates her exceptional range and technical precision in both lyric and dramatic coloratura roles. Highlights include Gilda in Rigoletto by Verdi, Olympia in Les Contes d’Hoffmann by Offenbach, and The
							Queen of the Night in Die Zauberflöte by Mozart. She has also performed in productions of Handel’s Alcina, Mozart’s Le nozze di Figaro, Massenet’s Werther, and Bellini’s La sonnambula.
						</p>
						<p>
							Veronika’s work with The Israeli Opera has earned her critical acclaim for her technical brilliance, dramatic presence, and the emotional depth she brings to her performances. Her collaborations with internationally renowned conductors and directors have solidified her reputation as one of the leading talents in the Israeli opera scene.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Biography