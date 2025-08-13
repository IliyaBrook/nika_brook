import { Metadata } from 'next'
import { baseUrl } from '@/data'
import { StructuredData } from '@/components/StructuredData'
import { notFound } from 'next/navigation'
import styles from '../blog.module.scss'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  
  const post = await getPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }
  
  return {
    title: `${post.title} | Veronika Brook Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `${baseUrl}/blog/${slug}`
    }
  }
}

async function getPostBySlug(slug: string) {
  const posts = {
    'what-is-coloratura-soprano': {
      title: 'What is a Coloratura Soprano? Understanding the Most Technical Voice Type',
      excerpt: 'Learn about the coloratura soprano voice type, its unique characteristics, and why these singers are considered the acrobats of opera.',
      content: `
        <h2>Definition and Characteristics</h2>
        <p>A <strong>coloratura soprano</strong> is the highest and most agile female voice type in opera. The term "coloratura" comes from the Italian word meaning "coloring," referring to the elaborate vocal ornamentations and decorative passages that characterize this voice type.</p>
        
        <h2>What Makes Coloratura Sopranos Special</h2>
        <p>Coloratura sopranos possess several unique qualities that set them apart from other voice types:</p>
        <ul>
          <li><strong>Extraordinary vocal agility</strong> - The ability to execute rapid runs, scales, and complex ornamentations with precision</li>
          <li><strong>Extended high range</strong> - Can comfortably sing notes above high C, often reaching F or even higher</li>
          <li><strong>Vocal flexibility</strong> - Capable of dramatic changes in dynamics, tempo, and articulation</li>
          <li><strong>Technical precision</strong> - Master complex vocal techniques including trills, mordents, and cadenzas</li>
        </ul>
        
        <h2>Famous Coloratura Soprano Roles</h2>
        <p>Some of the most challenging and beloved roles in opera are written for coloratura sopranos:</p>
        <ul>
          <li><strong>Queen of the Night</strong> in Mozart's "Die Zauberflöte" - featuring the famous "Der Hölle Rache" aria</li>
          <li><strong>Gilda</strong> in Verdi's "Rigoletto" - showcasing lyric coloratura qualities</li>
          <li><strong>Olympia</strong> in Offenbach's "Les Contes d'Hoffmann" - a mechanical doll requiring precise, doll-like vocal delivery</li>
          <li><strong>Lucia</strong> in Donizetti's "Lucia di Lammermoor" - famous for the challenging Mad Scene</li>
        </ul>
        
        <h2>My Journey as a Coloratura Soprano</h2>
        <p>As a professional coloratura soprano, I can attest to both the challenges and rewards of this voice type. Every performance requires meticulous preparation, not just of the music but of the technical demands each role presents. The Queen of the Night, for instance, requires not only vocal agility but also dramatic intensity to portray this complex character.</p>
        
        <p>What I find most rewarding about being a coloratura soprano is the opportunity to showcase the full range of human vocal capability. Each performance is a athletic and artistic feat that connects with audiences on a visceral level.</p>
      `,
      date: '2024-01-15'
    },
    'how-to-prepare-for-opera-auditions': {
      title: 'How to Prepare for Opera Auditions: A Professional Singer\'s Guide',
      excerpt: 'Essential tips for opera audition preparation, from repertoire selection to mental preparation and performance techniques.',
      content: `
        <h2>Repertoire Selection</h2>
        <p>Choosing the right repertoire is crucial for audition success. Your selections should showcase your voice type, technical abilities, and artistic maturity.</p>
        
        <h2>Technical Preparation</h2>
        <p>Ensure your vocal technique is solid before any audition. This includes proper breath support, clear diction, and confident high notes.</p>
        
        <h2>Mental Preparation</h2>
        <p>Auditions can be nerve-wracking, but proper mental preparation can help you perform at your best when it matters most.</p>
      `,
      date: '2024-01-10'
    },
    'queen-of-night-aria-guide': {
      title: 'Mastering the Queen of the Night Aria: Technical and Interpretive Challenges',
      excerpt: 'An in-depth look at one of opera\'s most challenging arias, including vocal technique and dramatic interpretation.',
      content: `
        <h2>Technical Challenges</h2>
        <p>The Queen of the Night aria "Der Hölle Rache" is one of the most technically demanding pieces in the soprano repertoire.</p>
        
        <h2>Dramatic Interpretation</h2>
        <p>Beyond the technical demands, the aria requires intense dramatic commitment to portray the Queen's rage and desperation.</p>
        
        <h2>Performance Tips</h2>
        <p>Based on my experience performing this role, here are key strategies for success with this challenging aria.</p>
      `,
      date: '2024-01-05'
    }
  }
  
  return posts[slug as keyof typeof posts] || null
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  
  if (!post) {
    notFound()
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "author": {
      "@type": "Person",
      "name": "Veronika Brook"
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "description": post.excerpt,
    "publisher": {
      "@type": "Person",
      "name": "Veronika Brook"
    }
  }

  return (
    <>
      <StructuredData data={articleSchema} />
      <article className={styles.articleContainer}>
        <h1>{post.title}</h1>
        
        <div className={styles.articleMeta}>
          <time>{post.date}</time>
          <span>By Veronika Brook</span>
        </div>

        <div 
          className={styles.articleContent}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </>
  )
}