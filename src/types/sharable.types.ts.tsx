import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
import type { StaticImageData } from 'next/image'
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
	description?: string;
	index: number;
}

export interface VideoThumbnail {
	id:string;
	thumbnailImageSrcHd:string | StaticImport;
	thumbnailImageSrc: string | StaticImport;
	index: number;
}

export type DeviceType =
	| 'iOS'
	| 'Android'
	| 'Windows'
	| 'MacOS'
	| 'Linux'
	| 'unknown'