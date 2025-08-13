import { Metadata } from 'next'
import { baseUrl } from '@/data'
import { StructuredData } from '@/components/StructuredData'
import styles from './discography.module.scss'

export const metadata: Metadata = {
  title: 'Veronika Brook Discography - Listen to Opera & Crossover Music',
  description: 'Explore Veronika Brook\'s complete discography including classical opera recordings and original crossover compositions. Available on all streaming platforms.',
  alternates: {
    canonical: baseUrl + '/discography'
  }
}

const musicSchema = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  "name": "Veronika Brook",
  "@id": baseUrl,
  "member": {
    "@type": "Person",
    "name": "Veronika Brook",
    "role": "Vocalist"
  },
  "genre": ["Opera", "Classical", "Classical Crossover"],
  "album": [
    {
      "@type": "MusicAlbum",
      "name": "L'immensità",
      "albumProductionType": "SingleRelease",
      "datePublished": "2024",
      "track": {
        "@type": "MusicRecording",
        "name": "L'immensità",
        "performer": {
          "@type": "Person", 
          "name": "Veronika Brook"
        },
        "genre": "Classical Crossover"
      }
    }
  ],
  "sameAs": [
    "https://open.spotify.com/artist/2TavyWUW2mjqzm9d4T3CcU",
    "https://music.apple.com/hu/artist/veronika-brook/1502987264",
    "https://youtube.com/@veronikabrookofficial"
  ]
}

export default function Discography() {
  return (
    <>
      <StructuredData data={musicSchema} />
      <main className={styles.discographyContainer}>
        <h1>Veronika Brook Discography</h1>
        <p className={styles.intro}>Discover my complete collection of recordings, from classical opera to original crossover compositions.</p>
        
        <section className={styles.streamingSection}>
          <h2>Where to Listen</h2>
          <p>My music is available on all major streaming platforms:</p>
          <div className={styles.platformGrid}>
            <div className={styles.platform}>
              <h3>Spotify</h3>
              <p>Complete discography and curated playlists</p>
            </div>
            <div className={styles.platform}>
              <h3>Apple Music</h3>
              <p>High-quality recordings and exclusive content</p>
            </div>
            <div className={styles.platform}>
              <h3>YouTube</h3>
              <p>Music videos and live performances</p>
            </div>
            <div className={styles.platform}>
              <h3>Amazon Music</h3>
              <p>Digital downloads and streaming</p>
            </div>
          </div>
        </section>
        
        <section className={styles.recordingsSection}>
          <h2>Featured Recordings</h2>
          
          <div className={styles.recording}>
            <h3>L'immensità</h3>
            <div className={styles.recordingDetails}>
              <span className={styles.year}>2024</span>
              <span className={styles.genre}>Classical Crossover</span>
            </div>
            <p>My signature crossover piece that blends classical technique with contemporary appeal. This original composition showcases the versatility of the operatic voice in a modern context, creating a bridge between classical and popular music.</p>
          </div>
          
          <div className={styles.recording}>
            <h3>Queen of the Night Aria - Der Hölle Rache</h3>
            <div className={styles.recordingDetails}>
              <span className={styles.year}>2023</span>
              <span className={styles.genre}>Classical Opera</span>
            </div>
            <p>Mozart's challenging coloratura showcase from Die Zauberflöte, performed with The Israeli Opera. This recording demonstrates the technical demands and dramatic intensity required for one of opera's most famous arias.</p>
          </div>

          <div className={styles.recording}>
            <h3>Caro nome - Rigoletto</h3>
            <div className={styles.recordingDetails}>
              <span className={styles.year}>2023</span>
              <span className={styles.genre}>Classical Opera</span>
            </div>
            <p>Gilda's beautiful aria from Verdi's Rigoletto, showcasing lyric coloratura technique and emotional depth. This performance captures the innocence and vulnerability of the character while demonstrating vocal agility.</p>
          </div>

          <div className={styles.recording}>
            <h3>Les oiseaux dans la charmille - Les Contes d'Hoffmann</h3>
            <div className={styles.recordingDetails}>
              <span className={styles.year}>2022</span>
              <span className={styles.genre}>Classical Opera</span>
            </div>
            <p>Olympia's mechanical doll aria from Offenbach's opera, requiring precise coloratura technique to portray an automaton. This recording highlights the technical precision needed for this unique role.</p>
          </div>
        </section>

        <section className={styles.collaborationsSection}>
          <h2>Notable Collaborations</h2>
          
          <div className={styles.collaboration}>
            <h3>The Israeli Opera Recordings</h3>
            <p>Multiple recordings with The Israeli Opera featuring works by Verdi, Mozart, Offenbach, and other composers. These professional opera house recordings showcase my work in complete operatic productions.</p>
          </div>

          <div className={styles.collaboration}>
            <h3>Orchestra Collaborations</h3>
            <p>Recordings with major Israeli orchestras in concert performances of both operatic arias and classical crossover works, demonstrating versatility across different musical contexts.</p>
          </div>
        </section>

        <section className={styles.upcomingSection}>
          <h2>Upcoming Releases</h2>
          <p>Stay tuned for new recordings featuring both classical repertoire and original compositions. Follow me on social media and streaming platforms to be notified of new releases.</p>
        </section>
      </main>
    </>
  )
}