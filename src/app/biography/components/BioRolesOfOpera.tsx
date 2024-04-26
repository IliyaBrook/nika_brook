/* eslint-disable react/no-unescaped-entities */
import styles from '../biography.module.scss'

export default function BioRolesOfOpera() {
  return (
    <>
      <h2 className={styles.title}>Roles at the Israeli Opera:</h2>
      <ul className={styles.text}>
        <li>Les Contes d'Hoffmann: Olympia (2022)</li>
        <li>Le nozze di Figaro: Barbarina (2022)</li>
        <li>Alcina: Morgana (2022)</li>
        <li>Die Zauberflöte: The Queen of the Night (Upcoming)</li>
        <li>Werther: Sophie</li>
        <li>La sonnambula: Amina</li>
        <li>La finta giardiniera: Sandrina</li>
        <li>The Passenger: Yvette</li>
        <li>The Mothers: God</li>
      </ul>
      <h2 className={styles.title}>Roles at the Meitar Opera Studio:</h2>
      <ul className={styles.text}>
        <li>The Pirates: Doña Aurora (2019)</li>
        <li>Mothers: God (2019)</li>
        <li>La finta giardiniera: Marchioness Violante Onesti (2019)</li>
        <li>La Sonnambula: Amina (2019)</li>
        <li>Le nozze di Figaro: Barbarina</li>
        <li>La clemenza di Tito: Servilia</li>
      </ul>
      <h2 className={styles.title}>Other roles:</h2>
      <ul className={styles.text}>
        <li>Rigoletto: Gilda (Jerusalem Opera Company, 2019)</li>
        <li>La Traviata: Violetta (Jerusalem Summer Festival, 2018)</li>
        <li>Die Zauberflöte: The Queen of the Night (Opera Studio)</li>
        <li>La Cenerentola: Clorinda (Opera Studio)</li>
        <li>Hänsel und Gretel: The Sand and Dew Fairies (Opera Studio)</li>
      </ul>
      <h2 className={styles.title}>Roles in Ukraine:</h2>
      <ul className={styles.text}>
        <li>Carmen: Frasquita</li>
        <li>Les Contes d'Hoffmann: Olympia</li>
        <li>The Tale of Tsar Saltan: The Swan-Bird</li>
        <li>Die Zauberflöte: The Queen of the Night</li>
        <li>Un mari à la porte: Rosita</li>
        <li>Suor Angelica: Suor Genovieffa</li>
        <li>The Golden Cockerel: The Queen of Shemakha</li>
      </ul>
    </>
  )
}
