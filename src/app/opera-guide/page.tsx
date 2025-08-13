import { Metadata } from 'next'
import { baseUrl } from '@/data'
import { StructuredData } from '@/components/StructuredData'
import styles from './opera-guide.module.scss'

export const metadata: Metadata = {
  title: 'Complete Guide to Opera: Everything You Need to Know | Veronika Brook',
  description: 'Comprehensive guide to opera for beginners and enthusiasts. Learn about voice types, famous operas, and how to appreciate this beautiful art form.',
  alternates: {
    canonical: baseUrl + '/opera-guide'
  }
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Understand and Appreciate Opera",
  "description": "A beginner's guide to understanding opera, voice types, and what to expect at your first opera performance.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Learn About Voice Types",
      "text": "Understand the different voice types in opera: soprano, mezzo-soprano, tenor, baritone, and bass."
    },
    {
      "@type": "HowToStep", 
      "name": "Familiarize Yourself with Famous Operas",
      "text": "Start with popular operas like La Traviata, Carmen, The Magic Flute, and Rigoletto."
    },
    {
      "@type": "HowToStep",
      "name": "Understand the Structure",
      "text": "Learn about arias, recitatives, ensembles, and how they work together to tell the story."
    }
  ]
}

export default function OperaGuide() {
  return (
    <>
      <StructuredData data={howToSchema} />
      <main className={styles.guideContainer}>
        <h1>The Complete Guide to Opera: Everything You Need to Know</h1>
        
        <section className={styles.introduction}>
          <p>
            Opera is one of the most beautiful and complex art forms, combining music, drama, visual arts, and poetry. 
            As a professional opera singer, I'm excited to share this comprehensive guide to help you understand and 
            appreciate the magnificent world of opera.
          </p>
        </section>

        <section className={styles.voiceTypes}>
          <h2>Understanding Voice Types in Opera</h2>
          
          <div className={styles.voiceType}>
            <h3>Soprano - The Highest Female Voice</h3>
            <p>
              Sopranos sing the highest parts in opera and often play the leading female roles. There are several types:
            </p>
            <ul>
              <li><strong>Coloratura Soprano:</strong> The most agile voice type (like myself), capable of complex ornamentations and the highest notes</li>
              <li><strong>Lyric Soprano:</strong> Beautiful, flowing voice perfect for romantic roles</li>
              <li><strong>Dramatic Soprano:</strong> Powerful voice for intense, emotional roles</li>
            </ul>
          </div>

          <div className={styles.voiceType}>
            <h3>Other Voice Types</h3>
            <ul>
              <li><strong>Mezzo-Soprano:</strong> Lower female voice, often playing mothers, villains, or trouser roles</li>
              <li><strong>Tenor:</strong> Highest male voice, typically the romantic hero</li>
              <li><strong>Baritone:</strong> Middle male voice, often playing fathers or villains</li>
              <li><strong>Bass:</strong> Lowest male voice, usually older characters or authority figures</li>
            </ul>
          </div>
        </section>

        <section className={styles.famousOperas}>
          <h2>Essential Operas Every Beginner Should Know</h2>
          
          <div className={styles.operaRecommendation}>
            <h3>The Magic Flute (Die Zauberflöte) by Mozart</h3>
            <p>
              Perfect for beginners! This opera features beautiful melodies, magical storytelling, and the famous Queen of the Night aria - one of my signature roles. The story is easy to follow and the music is immediately appealing.
            </p>
          </div>

          <div className={styles.operaRecommendation}>
            <h3>La Traviata by Verdi</h3>
            <p>
              A heart-wrenching story of love and sacrifice with some of opera's most beautiful arias. The emotional journey of Violetta resonates with audiences worldwide.
            </p>
          </div>

          <div className={styles.operaRecommendation}>
            <h3>Carmen by Bizet</h3>
            <p>
              Filled with memorable tunes and passionate drama. Carmen's famous "Habanera" and the "Toreador Song" are among opera's most recognizable pieces.
            </p>
          </div>
        </section>

        <section className={styles.attendingOpera}>
          <h2>What to Expect at Your First Opera Performance</h2>
          
          <div className={styles.expectation}>
            <h3>Before You Go</h3>
            <ul>
              <li>Read a synopsis of the story beforehand</li>
              <li>Listen to some of the famous arias</li>
              <li>Check if supertitles will be provided (translations above the stage)</li>
              <li>Dress nicely - opera is often a formal occasion</li>
            </ul>
          </div>

          <div className={styles.expectation}>
            <h3>During the Performance</h3>
            <ul>
              <li>Arrive early to settle in and read your program</li>
              <li>Turn off all electronic devices</li>
              <li>Applaud after arias (when the music clearly stops)</li>
              <li>Save enthusiastic "Bravo!" calls for truly exceptional moments</li>
              <li>Don't leave during music - wait for scene breaks</li>
            </ul>
          </div>
        </section>

        <section className={styles.appreciation}>
          <h2>How to Develop Your Opera Appreciation</h2>
          
          <p>
            Appreciating opera is a journey that deepens over time. Start by focusing on the emotions conveyed through the music, 
            even if you don't understand the language. Notice how the orchestra supports and enhances the singers' emotions. 
            Pay attention to the vocal techniques - the breath control, the way singers shape phrases, and how they use their 
            voices to create character.
          </p>

          <p>
            As a coloratura soprano, I can tell you that every performance is unique. The same aria can feel completely different 
            depending on the singer's interpretation, the conductor's tempo, and even the acoustics of the venue. This is what 
            makes opera a living, breathing art form that continues to captivate audiences after centuries.
          </p>
        </section>
      </main>
    </>
  )
}