import type { CSSProperties } from 'react'

export interface ImageItem {
  itemImageSrc: string
  alt: string
  title?: string
  index: number
  credit: string
  creditColor: CSSProperties['color']
}

export interface VideoItem {
  youtubeId: string
  alt: string
  thumbnailImageSrc: string
  thumbnailImageSrcHd: string
  title: string
  description?: string
}
