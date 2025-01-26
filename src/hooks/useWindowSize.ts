'use client'
import { useEffect, useState } from 'react'

interface WindowSizeReturn {
  screenWidth: number
  screenHeight: number
}
const useWindowSize = (): WindowSizeReturn => {
  const [size, setSize] = useState<WindowSizeReturn>({
    screenWidth: 0,
    screenHeight: 0,
  })
  useEffect(() => {
    const handleResize = () => {
      setSize({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return size
}

export default useWindowSize
