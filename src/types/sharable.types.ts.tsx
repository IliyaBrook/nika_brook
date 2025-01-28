import React from 'react'

export type DeviceType =
	| 'iOS'
	| 'Android'
	| 'Windows'
	| 'MacOS'
	| 'Linux'
	| 'unknown'

export type classNameType = {
	[key in DeviceType as `${Capitalize<key>}ClassName`]: React.CSSProperties
}

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
	title: string;
	description?: string;
}