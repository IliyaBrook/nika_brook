import { Metadata } from 'next'
import { baseUrl, spotify, appleMusic, youtube } from '@/data'
import { StructuredData } from '@/components/StructuredData'
import { Accordion, AccordionTab } from 'primereact/accordion'
import Link from 'next/link'
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
    },
    {
      "@type": "Question",
      "name": "Has Veronika Brook performed internationally?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Veronika's artistry extends worldwide. Notable international performances include a 2024 appearance at a special concert organized by Pope Francis' foundation in Rome, and performances at prestigious gala events including The World Opera Stars Gala concerts in France and Belarus."
      }
    },
    {
      "@type": "Question",
      "name": "Who are some notable artists Veronika Brook has collaborated with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In 2021, Veronika collaborated with the celebrated Italian tenor Francesco Meli on the stage of The Israeli Opera. She regularly works with internationally renowned conductors and directors."
      }
    },
    {
      "@type": "Question",
      "name": "What vocal training did Veronika Brook receive?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Veronika Brook is a graduate of the prestigious Meitar Young Artist Program, which launched her career with The Israeli Opera. Her journey began in Estonia where she developed her exceptional coloratura soprano voice."
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
        
        <div className={styles.accordionWrapper}>
          <Accordion className={styles.faqAccordion}>
            <AccordionTab
              header="What voice type is Veronika Brook?" 
              className={styles.accordionTab}
            >
              <div className={styles.answerContent}>
                <p>Veronika Brook is a <span className={styles.highlight}>coloratura soprano</span>, specializing in the most technically demanding operatic roles. This voice type is characterized by exceptional vocal agility, the ability to sing complex ornamentations, and mastery of the highest vocal range. Coloratura sopranos like Veronika are rare and highly sought after for roles that require both technical brilliance and dramatic expression.</p>
              </div>
            </AccordionTab>

            <AccordionTab 
              header="What makes a coloratura soprano special?" 
              className={styles.accordionTab}
            >
              <div className={styles.answerContent}>
                <p>A coloratura soprano possesses extraordinary vocal flexibility and can execute rapid passages, trills, and complex ornamentations with precision. These singers can reach the highest notes in the soprano range while maintaining clarity and beauty of tone. Veronika Brook exemplifies these qualities in her performances of challenging roles like the Queen of the Night in Mozart's Die Zauberflöte.</p>
              </div>
            </AccordionTab>

            <AccordionTab 
              header="What operas has Veronika Brook performed in?" 
              className={styles.accordionTab}
            >
              <div className={styles.answerContent}>
                <p>Veronika Brook has an extensive operatic repertoire with The <Link href="https://archive.israel-opera.co.il/eng/?CategoryID=263&ArticleID=2698" target="_blank" rel="noopener noreferrer" className={styles.operaLink}>Israeli Opera</Link>, including:</p>
                <ul>
                  <li><Link href="https://en.wikipedia.org/wiki/Rigoletto" target="_blank" rel="noopener noreferrer" className={styles.operaLink}>Rigoletto</Link> by Verdi (as Gilda)</li>
                  <li><Link href="https://en.wikipedia.org/wiki/The_Tales_of_Hoffmann" target="_blank" rel="noopener noreferrer" className={styles.operaLink}>Les Contes d'Hoffmann</Link> by Offenbach (as Olympia)</li>
                  <li><Link href="https://en.wikipedia.org/wiki/The_Magic_Flute" target="_blank" rel="noopener noreferrer" className={styles.operaLink}>Die Zauberflöte</Link> by Mozart (as Queen of the Night)</li>
                  <li><Link href="https://en.wikipedia.org/wiki/Alcina" target="_blank" rel="noopener noreferrer" className={styles.operaLink}>Alcina</Link> by Handel</li>
                  <li><Link href="https://en.wikipedia.org/wiki/The_Marriage_of_Figaro" target="_blank" rel="noopener noreferrer" className={styles.operaLink}>Le nozze di Figaro</Link> by Mozart</li>
                  <li><Link href="https://en.wikipedia.org/wiki/Werther" target="_blank" rel="noopener noreferrer" className={styles.operaLink}>Werther</Link> by Massenet</li>
                  <li><Link href="https://en.wikipedia.org/wiki/La_sonnambula" target="_blank" rel="noopener noreferrer" className={styles.operaLink}>La sonnambula</Link> by Bellini</li>
                </ul>
              </div>
            </AccordionTab>

            <AccordionTab 
              header="Which is Veronika Brook's most famous role?" 
              className={styles.accordionTab}
            >
              <div className={styles.answerContent}>
                <p>Veronika Brook is particularly renowned for her portrayal of the <span className={styles.highlight}>Queen of the Night</span> in Mozart's Die Zauberflöte. This role is considered one of the most challenging in the soprano repertoire, requiring extraordinary vocal range and agility. Her interpretation has received critical acclaim for its technical brilliance and dramatic intensity.</p>
              </div>
            </AccordionTab>

            <AccordionTab 
              header="What awards has Veronika Brook won?" 
              className={styles.accordionTab}
            >
              <div className={styles.answerContent}>
                <p>Veronika Brook has achieved significant recognition in international vocal competitions:</p>
                <ul>
                  <li><span className={styles.highlight}>1st Prize</span> at the JI Opera Competition</li>
                  <li><span className={styles.highlight}>3rd Prize</span> at Nuovo Canto Milano Competition</li>
                  <li>Recognition at the <span className={styles.highlight}>Competizione dell'Opera</span></li>
                  <li>Recognition at the <span className={styles.highlight}>Hans Gabor Belvedere Singing Competition</span></li>
                </ul>
              </div>
            </AccordionTab>

            <AccordionTab 
              header="Where does Veronika Brook perform most frequently?" 
              className={styles.accordionTab}
            >
              <div className={styles.answerContent}>
                <p>Veronika Brook is a regular performer with The <Link href="https://archive.israel-opera.co.il/eng/?CategoryID=263&ArticleID=2698" target="_blank" rel="noopener noreferrer" className={styles.operaLink}>Israeli Opera</Link> in Tel Aviv and frequently performs with major Israeli orchestras. As a graduate of the prestigious Meitar Young Artist Program, she has become a prominent figure in Israel's opera scene while also maintaining an active international performance schedule.</p>
              </div>
            </AccordionTab>

            <AccordionTab 
              header="Where can I hear Veronika Brook's music?" 
              className={styles.accordionTab}
            >
              <div className={styles.answerContent}>
                <p>You can listen to Veronika Brook's music on all major streaming platforms:</p>
                <ul>
                  <li><Link href={spotify} target="_blank" rel="noopener noreferrer" className={styles.streamingLink}>Spotify</Link> - Complete discography and playlists</li>
                  <li><Link href={appleMusic} target="_blank" rel="noopener noreferrer" className={styles.streamingLink}>Apple Music</Link> - High-quality recordings</li>
                  <li><Link href={youtube} target="_blank" rel="noopener noreferrer" className={styles.streamingLink}>YouTube</Link> - Performance videos and original compositions</li>
                </ul>
              </div>
            </AccordionTab>

            <AccordionTab 
              header="Does Veronika Brook compose her own music?" 
              className={styles.accordionTab}
            >
              <div className={styles.answerContent}>
                <p>Yes! Besides her opera career, Veronika Brook is an accomplished <span className={styles.highlight}>classical crossover artist and songwriter</span>. She creates original compositions that blend classical traditions with contemporary appeal, offering a unique and captivating sound that connects with diverse audiences.</p>
              </div>
            </AccordionTab>

            <AccordionTab 
              header="Has Veronika Brook performed internationally?" 
              className={styles.accordionTab}
            >
              <div className={styles.answerContent}>
                <p>Yes, Veronika's artistry extends worldwide. Notable international performances include a 2024 appearance at a special concert organized by Pope Francis' foundation in Rome, and performances at prestigious gala events including <span className={styles.highlight}>The World Opera Stars Gala</span> concerts in France and Belarus.</p>
              </div>
            </AccordionTab>

            <AccordionTab 
              header="Who are some notable artists Veronika Brook has collaborated with?" 
              className={styles.accordionTab}
            >
              <div className={styles.answerContent}>
                <p>In 2021, Veronika collaborated with the celebrated Italian tenor <span className={styles.highlight}>Francesco Meli</span> on the stage of The Israeli Opera. She regularly works with internationally renowned conductors and directors, which has solidified her reputation as one of the leading talents in the Israeli opera scene.</p>
              </div>
            </AccordionTab>

            <AccordionTab
              header="What vocal training did Veronika Brook receive?" 
              className={styles.accordionTab}
            >
              <div className={styles.answerContent}>
                <p>Veronika Brook is a graduate of the prestigious <span className={styles.highlight}>Meitar Young Artist Program</span>, which launched her career with The Israeli Opera. Her journey began in Estonia where she developed her exceptional coloratura soprano voice, and she further established herself in Ukraine before moving to Israel.</p>
              </div>
            </AccordionTab>

            <AccordionTab 
              header="How can I book Veronika Brook for performances?" 
              className={styles.accordionTab}
            >
              <div className={styles.answerContent}>
                <p>For booking inquiries regarding private concerts, gala events, and special occasions, please visit the Contact page. Veronika performs both classical opera arias and her original crossover compositions, making her suitable for various event types.</p>
              </div>
            </AccordionTab>
          </Accordion>
        </div>
      </main>
    </>
  )
}