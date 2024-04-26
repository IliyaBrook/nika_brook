import { useState, useEffect } from 'react'

const useImagesPreload = <T extends Record<K, string>, K extends keyof T>(
  images: T[],
  srcKey: K
): boolean => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!images.length) {
      setLoaded(true)
      return
    }

    const loadImage = (image: T) => {
      return new Promise<void>((resolve, reject) => {
        const loadImg = new Image()
        loadImg.src = image[srcKey]
        loadImg.onload = () => resolve()
        loadImg.onerror = (err) => reject(err)
      })
    }

    Promise.all(images.map((image) => loadImage(image)))
      .then(() => setLoaded(true))
      .catch((error) => console.error('Error loading images', error))
  }, [images, srcKey])

  return loaded
}

export default useImagesPreload
