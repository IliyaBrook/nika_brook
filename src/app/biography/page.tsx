import { Metadata, NextPage } from 'next'
import styles from './biography.module.scss'
import BioText from '@/app/biography/components/BioText'
import BioRolesOfOpera from '@/app/biography/components/BioRolesOfOpera'
import Image from 'next/image'
import { logVisits } from '@/utils/logVisits'
import { ScrollBarWrapper } from '@/components/ScrollBarWrapper/ScrollBarWrapper'
import BiographyImage from '../../../public/images/biographyImage.jpg'

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
			[test-1]
			<div className={styles.biographyContainer}>
				<div className={styles.imageContainer}>
					<Image
						src={BiographyImage}
						// src="/images/photo4_bio.jpg"
						alt="Veronika Brook, Soprano"
						quality={50}
						fill
						priority
						sizes="(max-width: 768px) 100vw, (min-width: 768px) 50vw"
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
