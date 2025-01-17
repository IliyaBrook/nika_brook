'use client'
import React from 'react'
import styles from '../photo.module.scss'
import { ItemTemplate } from '@/app/media/photo/components/ItemTemplate'
import { Carousel, CarouselResponsiveOption } from 'primereact/carousel'
import { images } from '@/app/media/photo/data'
import useImagesPreload from '@/hooks/useImagesPreload'
import { Skeleton } from 'primereact/skeleton'

export default function PhotoGalleria() {
  const imagesLoaded = useImagesPreload(images, 'itemImageSrc')
  const skeletonItems = new Array(3).fill({})
  const dataImages = imagesLoaded ? images : skeletonItems

  const responsiveOptions: CarouselResponsiveOption[] = [
    {
      breakpoint: '1400px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '1199px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '575px',
      numVisible: 1,
      numScroll: 1
    }
  ]

  return (
    <div className={styles.carouselWrapper}>
      {imagesLoaded ? <>
        <Carousel
          value={dataImages}
          numVisible={3}
          style={{ display: imagesLoaded ? 'flex' : 'none' }}
          orientation="horizontal"
          verticalViewPortHeight="360px"
          circular
          itemTemplate={ItemTemplate}
          responsiveOptions={responsiveOptions}
        />
      </> : (
        <>
          <div className={styles.skeletonWrapper}>
            <Skeleton height="70%" borderRadius="0" />
          </div>
        </>
        )}
    </div>
  )
}
