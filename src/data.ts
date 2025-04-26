export const baseUrl = 'https://veronikabrook.com'
// social media links
import type { ImageItem, VideoGallery } from '@/types/sharable.types.ts'
import credit_Eva_Chornaya_10 from '../public/images/mediaPhoto/10_credit_Eva_Chornaya.jpg'
import credit_Eva_Chornaya_11 from '../public/images/mediaPhoto/11_credit_Eva_Chornaya.jpg'
import credit_Eva_Chornaya_12 from '../public/images/mediaPhoto/12_credit_Eva_Chornaya.png'
import credit_Elena_Prosdocimo from '../public/images/mediaPhoto/13_credit_Elena_Prosdocimo.jpg'
import credit_Ivan_Sartoretto_14 from '../public/images/mediaPhoto/14_credit_Ivan_Sartoretto.jpg'
import credit_Ivan_Sartoretto_15 from '../public/images/mediaPhoto/15_credit_Ivan_Sartoretto.jpg'
import credit_Eva_Chornaya_2 from '../public/images/mediaPhoto/2_credit_Eva_Chornaya.jpg'
import credit_Elia_Haizis_6 from '../public/images/mediaPhoto/6_credit_elia_haizis.jpg'
import credit_Eva_Chornaya_9 from '../public/images/mediaPhoto/9_credit_Eva_Chornaya.jpg'
import credit_Maya_Iltus from '../public/images/mediaPhoto/Option_credit_Maya_Iltus.jpg'
import photo10 from '../public/images/mediaPhoto/photo10.jpg'
import photo13 from '../public/images/mediaPhoto/photo13.jpg'
import photo3 from '../public/images/mediaPhoto/photo3.jpg'
import photo9 from '../public/images/mediaPhoto/photo9.jpg'
import WisUpQMax from '../public/images/videoThumbnail/7NKMxWisUpQ.jpg'
import hvR4wjr0x1AMax from '../public/images/videoThumbnail/FhvR4wjr0x1A.jpg'
import JXe6nWdcSdEMax from '../public/images/videoThumbnail/JXe6nWdcSdE.jpg'
import sCQz83uEl0IMax from '../public/images/videoThumbnail/sCQz83uEl0I.jpg'
import U0cRtg16k5MMax from '../public/images/videoThumbnail/U0cRtg16k5M.jpg'
import xAQej1MS5kIMax from '../public/images/videoThumbnail/xAQej1MS5kI.jpg'
import HPGfl_kMax from '../public/images/videoThumbnail/XMV-HPGfl_k.jpg'

export const spotify = 'https://open.spotify.com/artist/2TavyWUW2mjqzm9d4T3CcU?si=r5t67JDJTUqclLsUaewV3A'
export const youtube = 'https://youtube.com/@veronikabrookofficial'
export const appleMusic = 'https://music.apple.com/hu/artist/veronika-brook/1502987264'
export const instagram = 'https://www.instagram.com/vero_nika_brook'
export const facebook = 'https://www.facebook.com/profile.php?id=100004158911717'
export const musixmatch = 'https://www.musixmatch.com/artist/Veronika-Brook-1'

// seo metadata
//structure data schema
export const sameAs = [
	instagram,
	youtube,
	appleMusic,
	spotify,
	facebook,
	musixmatch
]

export const metadataAndOpenGMainImage = baseUrl + '/images/home/bgPortraitDesktop.jpg'

export const defaultTitle = 'Veronika Brook - Opera Singer & Crossover Artist'
export const videos: VideoGallery[] = [
	{
		id: 'video_1',
		youtubeId: '7NKMxWisUpQ',
		alt: 'L’immensità',
		description: 'Veronika Brook - L’immensità',
		thumbnailImageSrc: WisUpQMax,
		thumbnailUrl: 'https://img.youtube.com/vi/7NKMxWisUpQ/maxresdefault.jpg',
		index: 0
	},
	{
		id: 'video_2',
		youtubeId: 'XMV-HPGfl_k',
		alt: 'The Queen of The Night (aria remix)',
		description: 'Veronika Brook - The Queen of The Night (aria remix)',
		thumbnailImageSrc: HPGfl_kMax,
		thumbnailUrl: 'https://img.youtube.com/vi/XMV-HPGfl_k/maxresdefault.jpg',
		index: 1
	},
	{
		id: 'video_3',
		youtubeId: 'sCQz83uEl0I',
		alt: 'Spente le stelle',
		description: 'Veronika Brook - Spente le stelle',
		thumbnailImageSrc: sCQz83uEl0IMax,
		thumbnailUrl: 'https://img.youtube.com/vi/sCQz83uEl0I/maxresdefault.jpg',
		index: 2
	},
	{
		id: 'video_4',
		youtubeId: 'U0cRtg16k5M',
		alt: 'Caro nome (Rigoletto, Verdi)',
		description: 'Verdi - Rigoletto - Caro nome',
		thumbnailImageSrc: U0cRtg16k5MMax,
		thumbnailUrl: 'https://img.youtube.com/vi/U0cRtg16k5M/maxresdefault.jpg',
		index: 3
	},
	{
		id: 'video_5',
		youtubeId: 'hvR4wjr0x1A',
		alt: 'Les oiseaux dans la charmille (Les contes d’Hoffmann, Offenbach)',
		description: 'Offenbach - Les contes d’Hoffmann - Les oiseaux dans la charmille',
		thumbnailImageSrc: hvR4wjr0x1AMax,
		thumbnailUrl: 'https://img.youtube.com/vi/hvR4wjr0x1A/maxresdefault.jpg',
		index: 4
	},
	{
		id: 'video_6',
		youtubeId: 'JXe6nWdcSdE',
		alt: 'Der Hölle Rache (Die Zauberflöte, Mozart)',
		description: 'Mozart - Die Zauberflöte - Der Hölle Rache kocht in meinem Herzen',
		thumbnailImageSrc: JXe6nWdcSdEMax,
		thumbnailUrl: 'https://img.youtube.com/vi/JXe6nWdcSdE/maxresdefault.jpg',
		index: 5
	},
	{
		id: 'video_7',
		youtubeId: 'xAQej1MS5kI',
		alt: 'Où va la jeune Hindoue (Lakmé, Delibes)',
		description: 'Delibes - Lakmé - Où va la jeune Hindoue',
		thumbnailImageSrc: xAQej1MS5kIMax,
		thumbnailUrl: 'https://img.youtube.com/vi/xAQej1MS5kI/maxresdefault.jpg',
		index: 6
	}
]
export const images: Array<ImageItem> = [
	{
		itemImageSrc: credit_Eva_Chornaya_9,
		alt: 'Veronika brook portrait',
		credit: 'Eva Chornaya ©',
		creditColor: 'black',
		id: 'gallery_item_1',
		index: 0
	},
	{
		itemImageSrc: credit_Eva_Chornaya_10,
		alt: 'Veronika brook in blue dress',
		credit: 'Eva Chornaya ©',
		creditColor: 'black',
		id: 'gallery_item_2',
		index: 1
	},
	{
		itemImageSrc: credit_Eva_Chornaya_11,
		alt: 'Veronika brook portrait',
		credit: 'Eva Chornaya ©',
		creditColor: 'black',
		id: 'gallery_item_3',
		index: 2
	},
	{
		itemImageSrc: credit_Eva_Chornaya_12,
		alt: 'Veronika brook photoshoot in a red dress',
		credit: 'Eva Chornaya ©',
		creditColor: 'black',
		id: 'gallery_item_4',
		index: 3
	},
	{
		itemImageSrc: credit_Eva_Chornaya_2,
		alt: 'Veronika brook photoshoot in a black dress',
		credit: 'Eva Chornaya ©',
		creditColor: 'black',
		id: 'gallery_item_5',
		index: 4
	},
	{
		itemImageSrc: credit_Elena_Prosdocimo,
		alt: 'Veronika brook night photoshoot',
		credit: 'Elena Prosdocimo ©',
		creditColor: 'white',
		id: 'gallery_item_6',
		index: 5
	},
	{
		itemImageSrc: credit_Ivan_Sartoretto_14,
		alt: 'Veronika brook black and black photoshoot near a tree',
		credit: 'Ivan Sartoretto ©',
		creditColor: 'white',
		id: 'gallery_item_7',
		index: 6
	},
	{
		itemImageSrc: credit_Ivan_Sartoretto_15,
		alt: 'Veronika brook photo shoot in a dress in a museum room',
		credit: 'Ivan Sartoretto ©',
		creditColor: 'white',
		id: 'gallery_item_8',
		index: 7
	},
	{
		itemImageSrc: photo3,
		alt: 'Veronika brook photo shoot in black',
		credit: 'Ella Dray ©',
		creditColor: 'white',
		id: 'gallery_item_9',
		index: 8
	},
	{
		itemImageSrc: credit_Elia_Haizis_6,
		alt: 'Veronika brook photo shoot at a concert',
		credit: 'Elia Haizis ©',
		creditColor: 'white',
		id: 'gallery_item_10',
		index: 9
	},
	{
		itemImageSrc: credit_Maya_Iltus,
		alt: 'Veronika brook Les contes d’Hoffmann, Olympia\'s aria',
		credit: 'Maya Iltus ©',
		creditColor: 'white',
		id: 'gallery_item_11',
		index: 10
	},
	{
		itemImageSrc: photo9,
		alt: 'Veronika brook portrait',
		credit: 'Uri Elkayam ©',
		creditColor: 'white',
		id: 'gallery_item_12',
		index: 11
	},
	{
		itemImageSrc: photo10,
		alt: 'Veronika brook in black dress',
		credit: 'Ella Dray ©',
		creditColor: 'white',
		id: 'gallery_item_13',
		index: 12
	},
	{
		itemImageSrc: photo13,
		alt: 'Veronika brook portrait',
		credit: 'Doron Letzter ©',
		creditColor: 'white',
		id: 'gallery_item_14',
		index: 13
	}
]

export const botUserAgents = [
	'Googlebot',
	'Bingbot',
	'Slurp',
	'DuckDuckBot',
	'Baiduspider',
	'YandexBot',
	'Sogou',
	'Exabot',
	'facebot',
	'ia_archiver',
	'Applebot',
];

export const screenReaderUserAgents = [
	'NVDA',
	'JAWS',
	'VoiceOver',
	'TalkBack',
	'ChromeVox',
	'Orca',
];