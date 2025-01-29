import type { CSSProperties } from 'react'

export interface ImageItem {
	id:string;
	itemImageSrc: string;
	alt: string;
	credit: string;
	creditColor: CSSProperties['color'];
	isReady?:boolean;
	index: number;
}

export interface VideoItem {
	id:string;
	youtubeId: string;
	alt: string;
	thumbnailImageSrc: string;
	thumbnailImageSrcHd: string;
	description?: string;
	index: number;
}