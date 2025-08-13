import { Metadata } from 'next'
import { baseUrl } from '@/data'
import Link from 'next/link'
import styles from './blog.module.scss'

export const metadata: Metadata = {
  title: 'Opera Insights & Classical Music Blog - Veronika Brook',
  description: 'Explore opera insights, classical music education, and vocal technique tips from professional coloratura soprano Veronika Brook.',
  alternates: {
    canonical: baseUrl + '/blog'
  }
}

const blogPosts = [
  {
    slug: 'what-is-coloratura-soprano',
    title: 'What is a Coloratura Soprano? Understanding the Most Technical Voice Type',
    excerpt: 'Learn about the coloratura soprano voice type, its unique characteristics, and why these singers are considered the acrobats of opera.',
    date: '2024-01-15'
  },
  {
    slug: 'how-to-prepare-for-opera-auditions',
    title: 'How to Prepare for Opera Auditions: A Professional Singer\'s Guide',
    excerpt: 'Essential tips for opera audition preparation, from repertoire selection to mental preparation and performance techniques.',
    date: '2024-01-10'
  },
  {
    slug: 'queen-of-night-aria-guide',
    title: 'Mastering the Queen of the Night Aria: Technical and Interpretive Challenges',
    excerpt: 'An in-depth look at one of opera\'s most challenging arias, including vocal technique and dramatic interpretation.',
    date: '2024-01-05'
  }
]

export default function Blog() {
  return (
    <main className={styles.blogContainer}>
      <h1>Opera Insights & Classical Music Education</h1>
      <p className={styles.intro}>
        Welcome to my blog where I share insights about opera, vocal technique, and the world of classical music from my experience as a professional coloratura soprano.
      </p>
      
      <div className={styles.postsGrid}>
        {blogPosts.map((post) => (
          <article key={post.slug} className={styles.postCard}>
            <h2>
              <Link href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
            </h2>
            <time className={styles.date}>{post.date}</time>
            <p className={styles.excerpt}>{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className={styles.readMore}>
              Read More →
            </Link>
          </article>
        ))}
      </div>
    </main>
  )
}