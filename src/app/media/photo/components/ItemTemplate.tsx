import { ImageItem } from '@/app/media/types.images'
import { Image } from 'primereact/image'
import styles from '@/app/media/photo/photo.module.scss'
import React from 'react'
import classNames from 'classnames'

export const ItemTemplate = (item: ImageItem) => (
  <div className={classNames(styles.itemTemplate)}>
    <div className={styles.thumbnailImage}>
      <Image
        src={item.itemImageSrc}
        alt={item.alt}
        preview
        loading="lazy"
        className={styles.img}
      />
    </div>
  </div>
)
