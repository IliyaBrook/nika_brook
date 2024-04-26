export interface ImageItem {
  itemImageSrc: string
  thumbnailImageSrc: string
  alt: string
  title?: string
  index: number
}

export interface VideoItem {
  youtubeId: string
  alt: string
  thumbnailImageSrc: string
  thumbnailImageSrcHd: string
  title: string
  description?: string
}
