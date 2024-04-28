import { Metadata, NextPage } from 'next'
import styles from './biography.module.scss'
import BioText from '@/app/biography/components/BioText'
import BioRolesOfOpera from '@/app/biography/components/BioRolesOfOpera'
import Image from 'next/image'
import { logVisits } from '@/utils/logVisits'
import { ScrollBarWrapper } from '@/components/ScrollBarWrapper/ScrollBarWrapper'

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

const Biography: NextPage = () => {
	void logVisits('biography')
	return (
		<ScrollBarWrapper className={styles.root}>
			[test-2]
			<div className={styles.biographyContainer}>
				<div className={styles.imageContainer}>
					<Image
						src="/images/biographyImage.webp"
						alt="Veronika Brook, Soprano"
						quality={75}
						layout="responsive"
						width={800}
						height={600}
						priority
					/>
				</div>
				<div className={styles.bioRolesOfOpera}>
					<BioRolesOfOpera />
				</div>
				<div className={styles.biographyContent}>
					<BioText />
				</div>
			</div>
		</ScrollBarWrapper>
	)
}

export default Biography
