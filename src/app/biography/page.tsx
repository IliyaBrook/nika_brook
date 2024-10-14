import { Metadata, NextPage } from 'next'
import styles from './biography.module.scss'
import BioText from '@/app/biography/components/BioText'
import BioRolesOfOpera from '@/app/biography/components/BioRolesOfOpera'
import Image from 'next/image'
import { DeviceTypeWrapper } from '@/components/Wrappers/DeviceTypeWrapper/DeviceTypeWrapper'

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
	return (
		<div className={styles.root}>
			<div className={styles.biographyContainer}>
				<div className={styles.imageContainer}>
					<Image
						src="/images/mediaPhoto/photo3.jpg"
						alt="Veronika Brook, Soprano"
						quality={75}
						layout="responsive"
						width={800}
						height={600}
						priority
					/>
					<div className={styles.bioRolesOfOpera}>
						<BioRolesOfOpera />
					</div>
				</div>

				<div className={styles.biographyContent}>
					<BioText />
				</div>
				<DeviceTypeWrapper
					WindowsClassName={{ display: 'none' }}
					AndroidClassName={{ display: 'none' }}
					IOSClassName={{ marginBottom: '6rem' }}
				/>
			</div>
		</div>
	)
}

export default Biography
