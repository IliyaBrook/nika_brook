import type { ImageItem, MediaElementSekelton } from '@/types/sharable.types.ts'

export const images: Array<ImageItem> = [
  {
    itemImageSrc: '/images/mediaPhoto/10_credit_Eva_Chornaya.JPG',
    alt: 'Photo 10',
    credit: 'Eva Chornaya',
    creditColor: 'white',
    id: 'gallery_item_1',
    index: 0
  },
  {
    itemImageSrc: '/images/mediaPhoto/11_credit_Eva_Chornaya.JPG',
    alt: 'Photo 11',
    credit: 'Eva Chornaya',
    creditColor: 'white',
    id: 'gallery_item_1',
    index: 1
  },
  {
    itemImageSrc: '/images/mediaPhoto/12_credit_Eva_Chornaya.png',
    alt: 'Photo 12',
    credit: 'Eva Chornaya',
    creditColor: 'white',
    id: 'gallery_item_2',
    index: 2
  },
  {
    itemImageSrc: '/images/mediaPhoto/13_credit_Elena_Prosdocimo.JPG',
    alt: 'Photo 13',
    credit: 'Elena Prosdocimo',
    creditColor: 'white',
    id: 'gallery_item_3',
    index: 3
  },
  {
    itemImageSrc: '/images/mediaPhoto/14_credit_Ivan_Sartoretto.JPG',
    alt: 'Photo 14',
    credit: 'Ivan Sartoretto',
    creditColor: 'white',
    id: 'gallery_item_4',
    index: 4
  },
  {
    itemImageSrc: '/images/mediaPhoto/15_credit_Ivan_Sartoretto.JPG',
    alt: 'Photo 15',
    credit: 'Ivan Sartoretto',
    creditColor: 'white',
    id: 'gallery_item_5',
    index: 5
  },
  {
    itemImageSrc: '/images/mediaPhoto/2 _credit_Eva_Chornaya.jpg',
    alt: 'Photo 2',
    credit: 'Eva Chornaya',
    creditColor: 'white',
    id: 'gallery_item_6',
    index: 6
  },
  {
    itemImageSrc: '/images/mediaPhoto/5_credit_Yoel_Levy.JPG',
    alt: 'Photo 5',
    credit: 'Yoel Levy',
    creditColor: 'white',
    id: 'gallery_item_7',
    index: 7
  },
  {
    itemImageSrc: '/images/mediaPhoto/6_credit_Elia_Haizis.JPG',
    alt: 'Photo 6',
    credit: 'Elia Haizis',
    creditColor: 'white',
    id: 'gallery_item_8',
    index: 8
  },
  {
    itemImageSrc: '/images/mediaPhoto/7_credit_Elia_Haizis.jpg',
    alt: 'Photo 7',
    credit: 'Elia Haizis',
    creditColor: 'white',
    id: 'gallery_item_9',
    index: 9
  },
  {
    itemImageSrc: '/images/mediaPhoto/9_credit_Eva_Chornaya.JPG',
    alt: 'Photo 9',
    credit: 'Eva Chornaya',
    creditColor: 'white',
    id: 'gallery_item_10',
    index: 10
  },
  {
    itemImageSrc: '/images/mediaPhoto/Option - credit Elena Prosdocimo.JPG',
    alt: 'Option: Elena Prosdocimo',
    credit: 'Elena Prosdocimo',
    creditColor: 'white',
    id: 'gallery_item_11',
    index: 11
  },
  {
    itemImageSrc: '/images/mediaPhoto/Option - credit_Ivan_Sartoretto.JPG',
    alt: 'Option: Ivan Sartoretto',
    credit: 'Ivan Sartoretto',
    creditColor: 'white',
    id: 'gallery_item_12',
    index: 12
  },
  {
    itemImageSrc: '/images/mediaPhoto/Option_credit_Maya_Iltus.JPG',
    alt: 'Option: Maya Iltus',
    credit: 'Maya Iltus',
    creditColor: 'white',
    id: 'gallery_item_13',
    index: 13
  },
  {
    itemImageSrc: '/images/mediaPhoto/4_credit_Yossi_Zwecker.jpg',
    alt: 'Option: Yossi Zwecker',
    credit: 'Yossi Zwecker',
    creditColor: 'white',
    id: 'gallery_item_14',
    index: 14
  },
  {
    itemImageSrc: '/images/mediaPhoto/Option_credit_Yossi_Zwecker.jpg',
    alt: 'Option: Yossi Zwecker',
    credit: 'Yossi Zwecker',
    creditColor: 'white',
    id: 'gallery_item_15',
    index: 15
  },
  {
    itemImageSrc: '/images/mediaPhoto/photo10.jpg',
    alt: 'Photo 10',
    credit: 'Not exit',
    creditColor: 'white',
    id: 'gallery_item_16',
    index: 16
  },
  {
    itemImageSrc: '/images/mediaPhoto/photo13.jpg',
    alt: 'Photo 13',
    credit: 'Not exit',
    creditColor: 'white',
    id: 'gallery_item_17',
    index: 17
  },
  {
    itemImageSrc: '/images/mediaPhoto/photo14.jpg',
    alt: 'Photo 14',
    credit: 'Not exit',
    creditColor: 'white',
    id: 'gallery_item_18',
    index: 18
  },
  {
    itemImageSrc: '/images/mediaPhoto/photo3.jpg',
    alt: 'Photo 3',
    credit: 'Not exit',
    creditColor: 'white',
    id: 'gallery_item_19',
    index: 19
  },
  {
    itemImageSrc: '/images/mediaPhoto/photo6.jpg',
    alt: 'Photo 6',
    credit: 'Not exit',
    creditColor: 'white',
    id: 'gallery_item_20',
    index: 20
  },
  {
    itemImageSrc: '/images/mediaPhoto/photo7.jpg',
    alt: 'Photo 7',
    credit: 'Not exit',
    creditColor: 'white',
    id: 'gallery_item_21',
    index: 21
  },
  {
    itemImageSrc: '/images/mediaPhoto/photo8.jpg',
    alt: 'Photo 8',
    credit: 'Not exit',
    creditColor: 'white',
    id: 'gallery_item_22',
    index: 22
  },
  {
    itemImageSrc: '/images/mediaPhoto/photo9.jpg',
    alt: 'Photo 9',
    credit: 'Not exit',
    creditColor: 'white',
    id: 'gallery_item_23',
    index: 23
  }
]

export const skeletonImages:MediaElementSekelton[] = [
  {
    itemImageSrc: '/images/skeleton.svg',
    alt: 'loader 1',
    id: '0',
    index: 0
  },
  {
    itemImageSrc: '/images/skeleton.svg',
    alt: 'loader 2',
    id: '1',
    index: 1
  },
  {
    itemImageSrc: '/images/skeleton.svg',
    alt: 'loader 3',
    id: '2',
    index: 2
  },
]