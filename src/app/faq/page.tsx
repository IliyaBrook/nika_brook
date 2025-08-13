import { Metadata } from 'next'
import { baseUrl } from '@/data'
import { StructuredData } from '@/components/StructuredData'
import styles from './faq.module.scss'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - Veronika Brook Opera Singer',
  description: 'Find answers to common questions about Veronika Brook, her opera performances, vocal training, and classical crossover music.',
  keywords: [
    'Veronika Brook FAQ',
    'opera singer questions',
    'coloratura soprano questions',
    'classical music FAQ',
    'Israeli Opera questions'
  ],
  openGraph: {
    title: 'FAQ - Veronika Brook Opera Singer',
    description: 'Answers to frequently asked questions about opera singer Veronika Brook',
    url: baseUrl + '/faq',
    type: 'article'
  },
  alternates: {
    canonical: baseUrl + '/faq'
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What voice type is Veronika Brook?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Veronika Brook is a coloratura soprano, specializing in highly technical operatic roles that require exceptional vocal agility and precision in the highest vocal range."
      }
    },
    {
      "@type": "Question", 
      "name": "What operas has Veronika Brook performed in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Veronika Brook has performed leading roles in major operas including Rigoletto (Gilda), Les Contes d'Hoffmann (Olympia), Die Zauberflöte (Queen of the Night), Alcina, Le nozze di Figaro, Werther, and La sonnambula with The Israeli Opera."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I hear Veronika Brook's music?",
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": "You can listen to Veronika Brook's music on Spotify, Apple Music, YouTube, and other major streaming platforms. She performs both classical opera and original crossover compositions."
      }
    },
    {
      "@type": "Question",
      "name": "What awards has Veronika Brook won?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Veronika Brook has won 1st Prize at the JI Opera Competition, 3rd Prize at Nuovo Canto Milano Competition, and received recognition at the Competizione dell'Opera and Hans Gabor Belvedere Singing Competition."
      }
    },
    {
      "@type": "Question",
      "name": "Where does Veronika Brook perform most frequently?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Veronika Brook is a regular performer with The Israeli Opera in Tel Aviv and performs with major Israeli orchestras. She also performs internationally at opera houses and concert halls worldwide."
      }
    }
  ]
}

export default function FAQ() {
  return (
    <>
      <StructuredData data={faqSchema} />
      <main className={styles.faqContainer}>
        <h1>Frequently Asked Questions About Veronika Brook</h1>
        
        <div className={styles.faqSection}>
          <h2>About Veronika's Voice and Technique</h2>
          
          <div className={styles.questionBlock}>
            <h3>What voice type is Veronika Brook?</h3>
            <p>Veronika Brook is a <strong>coloratura soprano</strong>, specializing in the most technically demanding operatic roles. This voice type is characterized by exceptional vocal agility, the ability to sing complex ornamentations, and mastery of the highest vocal range. Coloratura sopranos like Veronika are rare and highly sought after for roles that require both technical brilliance and dramatic expression.</p>
          </div>
          
          <div className={styles.questionBlock}>
            <h3>What makes a coloratura soprano special?</h3>
            <p>A coloratura soprano possesses extraordinary vocal flexibility and can execute rapid passages, trills, and complex ornamentations with precision. These singers can reach the highest notes in the soprano range while maintaining clarity and beauty of tone. Veronika Brook exemplifies these qualities in her performances of challenging roles like the Queen of the Night in Mozart's Die Zauberflöte.</p>
          </div>
        </div>

        <div className={styles.faqSection}>
          <h2>Opera Performances and Repertoire</h2>
          
          <div className={styles.questionBlock}>
            <h3>What operas has Veronika Brook performed in?</h3>
            <p>Veronika Brook has an extensive operatic repertoire with <strong>The Israeli Opera</strong>, including:</p>
            <ul>
              <li><strong>Rigoletto</strong> by Verdi (as Gilda)</li>
              <li><strong>Les Contes d'Hoffmann</strong> by Offenbach (as Olympia)</li>
              <li><strong>Die Zauberflöte</strong> by Mozart (as Queen of the Night)</li>
              <li><strong>Alcina</strong> by Handel</li>
              <li><strong>Le nozze di Figaro</strong> by Mozart</li>
              <li><strong>Werther</strong> by Massenet</li>
              <li><strong>La sonnambula</strong> by Bellini</li>
            </ul>
          </div>

          <div className={styles.questionBlock}>
            <h3>Which is Veronika Brook's most famous role?</h3>
            <p>Veronika Brook is particularly renowned for her portrayal of the <strong>Queen of the Night</strong> in Mozart's Die Zauberflöte. This role is considered one of the most challenging in the soprano repertoire, requiring extraordinary vocal range and agility. Her interpretation has received critical acclaim for its technical brilliance and dramatic intensity.</p>
          </div>
        </div>

        <div className={styles.faqSection}>
          <h2>Career and Achievements</h2>
          
          <div className={styles.questionBlock}>
            <h3>What awards has Veronika Brook won?</h3>
            <p>Veronika Brook has achieved significant recognition in international vocal competitions:</p>
            <ul>
              <li><strong>1st Prize</strong> at the JI Opera Competition</li>
              <li><strong>3rd Prize</strong> at Nuovo Canto Milano Competition</li>
              <li>Recognition at the <strong>Competizione dell'Opera</strong></li>
              <li>Recognition at the <strong>Hans Gabor Belvedere Singing Competition</strong></li>
            </ul>
          </div>

          <div className={styles.questionBlock}>
            <h3>Where does Veronika Brook perform most frequently?</h3>
            <p>Veronika Brook is a <strong>regular performer with The Israeli Opera in Tel Aviv</strong> and frequently performs with major Israeli orchestras. As a graduate of the prestigious Meitar Young Artist Program, she has become a prominent figure in Israel's opera scene while also maintaining an active international performance schedule.</p>
          </div>
        </div>

        <div className={styles.faqSection}>
          <h2>Music and Recordings</h2>
          
          <div className={styles.questionBlock}>
            <h3>Where can I hear Veronika Brook's music?</h3>
            <p>You can listen to Veronika Brook's music on all major streaming platforms:</p>
            <ul>
              <li><strong>Spotify</strong> - Complete discography and playlists</li>
              <li><strong>Apple Music</strong> - High-quality recordings</li>
              <li><strong>YouTube</strong> - Performance videos and original compositions</li>
              <li><strong>Other platforms</strong> - Available on most digital music services</li>
            </ul>
          </div>

          <div className={styles.questionBlock}>
            <h3>Does Veronika Brook compose her own music?</h3>
            <p>Yes! Besides her opera career, Veronika Brook is an accomplished <strong>classical crossover artist and songwriter</strong>. She creates original compositions that blend classical traditions with contemporary appeal, offering a unique and captivating sound that connects with diverse audiences.</p>
          </div>
        </div>
      </main>
    </>
  )
}