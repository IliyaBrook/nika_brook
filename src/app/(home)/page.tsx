import HomePage from '@/app/(home)/homePage'
import H1SrOnly from '@/components/H1SrOnly/H1SrOnly'
import Head from 'next/head'
import styles from './home.module.scss'


export default function Home() {
	return (
		<>
			<Head>
				<title>Veronika Brook - Leading Coloratura Soprano of the Israeli Opera</title>
				<meta name="description" content="Official website of Veronika Brook, leading coloratura soprano of the Israeli Opera. Biography, repertoire, photos, and videos of performances." />
			</Head>
			<main className={styles.main}>
				<H1SrOnly>Israel Opera Singer Veronika Brook - Coloratura Soprano & Crossover Artist</H1SrOnly>
				<HomePage />
			</main>
		</>
	)
}
