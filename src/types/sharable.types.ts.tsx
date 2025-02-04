import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
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

export interface VideoGallery {
	id:string;
	youtubeId: string;
	alt: string;
	description?: string;
	thumbnailImageSrc:string | StaticImport;
	thumbnailUrl:string,
	index: number;
}

export type DeviceType =
	| 'iOS'
	| 'Android'
	| 'Windows'
	| 'MacOS'
	| 'Linux'
	| 'unknown'