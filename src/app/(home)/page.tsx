import H1SrOnly from '@/components/H1SrOnly/H1SrOnly'
import styles from './home.module.scss'
import HomePage from './homePage'


export default async function Home() {
	return (
		<main className={styles.main}>
			<H1SrOnly>Veronika Brook - Opera Singer & Crossover Artist</H1SrOnly>
			<HomePage/>
		</main>
	)
}
