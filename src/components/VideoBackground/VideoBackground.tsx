'use client'
import Image from 'next/image'
import classes from './VideoBackground.module.scss'
import { CSSProperties, useEffect, useRef, useState } from 'react'

interface VideoBackgroundProps {
  src: string
  type: string
  styles?: CSSProperties
}
export const VideoBackground = ({
  styles,
  type,
  src
}: VideoBackgroundProps) => {
  const [muted, setMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const toggleMute = () => {
    if (videoRef.current) {
      const currentState = videoRef.current.muted
      videoRef.current.muted = !currentState
      setMuted(!currentState)
      if (currentState && videoRef.current.paused) {
        void videoRef.current.play()
      }
    }
  }

  useEffect(() => {
    if (videoRef.current) {
      setMuted(videoRef.current.muted)
      if (videoRef.current.paused) {
        void videoRef.current.play().catch((error) => {
          console.error('Error at start play video:', error)
        })
      }
    }
  }, [])

  return (
    <div className={classes.root}>
      <div className={classes.videoWrapper}>
        <video style={styles} ref={videoRef} muted={true} loop preload="none">
          <source src={src} type={type} />
          Your browser does not support the video tag.
        </video>
        <div className={classes.volumeButtonWrapper}>
          <button onClick={toggleMute}>
            {muted ? (
              <Image
                src="/icons/volume-mute.svg"
                alt="Mute"
                width={24}
                height={24}
              />
            ) : (
              <Image
                src="/icons/volume.svg"
                alt="Volume"
                width={24}
                height={24}
              />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
