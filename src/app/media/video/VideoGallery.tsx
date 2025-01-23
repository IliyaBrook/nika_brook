'use client'
import type { VideoItem } from '@/types/sharable.types.ts.tsx'
import dynamic from 'next/dynamic'
import React, { useEffect, useRef, useState } from 'react'
import { Galleria as GalleriaComponent } from 'primereact/galleria'

import styles from './video.module.scss'
import { videos } from '@/app/media/video/data'
import Image from 'next/image'
import classNames from 'classnames'
import 'primeicons/primeicons.css'

const Galleria = (dynamic(
  () => import('primereact/galleria').then(({ Galleria }) => Galleria),
  { ssr: false }
) as typeof GalleriaComponent)


export default function VideoGallery() {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const galleriaRef = useRef<GalleriaComponent>(null)
  const visibleItems = 3
  const [numVisible, setNumVisible] = useState<number>(5)

  const updateNumVisible = () => {
    if (window.innerWidth < 768) {
      setNumVisible(1)
    } else {
      setNumVisible(5)
    }
  }

  useEffect(() => {
    updateNumVisible()
    window.addEventListener('resize', updateNumVisible, { passive: true })
    return () => {
      window.removeEventListener('resize', updateNumVisible)
    }
  }, [])

  const itemTemplate = (item: VideoItem) => {
    return (
      <iframe
        width="100%"
        height="315"
        src={`https://www.youtube.com/embed/${item.youtubeId}`}
        title={item.alt}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    )
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) {
        return
      }

      const galleriaElement = event.target.closest('.p-galleria')

      if (
        !galleriaElement &&
        galleriaRef.current &&
        typeof galleriaRef.current.hide === 'function'
      ) {
        galleriaRef.current.hide()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const thumbnailTemplate = (item: VideoItem) => {
    return (
      <div className={styles.thumbnailTemplate}>
        <Image
          src={item.thumbnailImageSrc}
          alt={item.alt}
          className={styles.img}
          width={80}
          height={80}
          style={{ display: 'block', cursor: 'pointer' }}
          onClick={() => {
            setActiveIndex(
              videos.findIndex((v) => v.youtubeId === item.youtubeId)
            )
            galleriaRef.current.show()
          }}
        />
        <div className={styles.videoTitle}>{item.title}</div>
      </div>
    )
  }

  const goToNext = () => {
    setActiveIndex((prevActiveIndex) => {
      if (prevActiveIndex < videos.length - visibleItems) {
        return prevActiveIndex + 1
      }
      return prevActiveIndex
    })
  }

  const goToPrev = () => {
    setActiveIndex((prevActiveIndex) => {
      if (prevActiveIndex > 0) {
        return prevActiveIndex - 1
      }
      return prevActiveIndex
    })
  }

  const handleShowGalleria = (index: number) => {
    const maxIndex = videos.length - visibleItems
    if (index > maxIndex) {
      index = maxIndex
    }

    setActiveIndex(index)
    galleriaRef.current.show()
  }
  return (
    <>
      <Galleria
        className={styles.galleria}
        ref={galleriaRef}
        value={videos}
        numVisible={numVisible}
        activeIndex={activeIndex}
        onItemChange={(e) => handleShowGalleria(e.index)}
        circular
        fullScreen
        showItemNavigators
        showThumbnails={true}
        item={itemTemplate}
        thumbnail={thumbnailTemplate}
      />

      <div className={styles.carouselContainer}>
        <button
          className={classNames(styles.prevButton, styles.button)}
          onClick={goToPrev}
          aria-label="Previous"
        >
          <i className={classNames(styles.icon, 'pi pi-chevron-left')}></i>
        </button>
        <div className={styles.carousel}>
          {videos.map((video, idx) => (
            <div
              key={idx}
              className={styles.carouselItem}
              style={{
                transform:
                  numVisible !== 1
                    ? `translateX(-${activeIndex * 100}%)`
                    : 'none'
              }}
            >
              <Image
                src={video.thumbnailImageSrcHd}
                alt={video.title}
                fill
                className={styles.thumbnailImage}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
              <div
                className={styles.videoOverlay}
                onClick={() => handleShowGalleria(idx)}
              >
                <div className={styles.playIcon}>
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 12 18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon points="0,0 12,9 0,18" fill="white" />
                  </svg>
                </div>
                <div className={styles.videoInfo}>
                  <h3 className={styles.videoTitle}>{video.title}</h3>
                  <p className={styles.videoDescription}>{video.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className={classNames(styles.button, styles.nextButton)}
          onClick={goToNext}
          aria-label="Next"
        >
          <i className={classNames(styles.icon, 'pi pi-chevron-right')}></i>
        </button>
      </div>
    </>
  )
}
