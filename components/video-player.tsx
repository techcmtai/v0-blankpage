"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX, Film } from "lucide-react"

interface VideoPlayerProps {
  src?: string
  poster?: string
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
  fillContainer?: boolean
  fallbackContent?: React.ReactNode
}

export function VideoPlayer({
  src,
  poster,
  autoplay = false,
  muted = true,
  loop = true,
  controls = true,
  fillContainer = false,
  fallbackContent,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoplay)
  const [isMuted, setIsMuted] = useState(muted)
  const [hasError, setHasError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Always show fallback initially until we confirm video can be played
  const [showFallback, setShowFallback] = useState(true)

  useEffect(() => {
    // Safety check - if no source provided, keep showing fallback
    if (!src || src.trim() === "" || src === "/hero-video.mp4" || src === "/placeholder-video.mp4") {
      setShowFallback(true)
      return
    }

    // Try to load the video without playing it
    const testVideo = document.createElement("video")

    // Set up event handlers before setting src
    testVideo.onloadeddata = () => {
      setIsLoaded(true)
      setShowFallback(false)
    }

    testVideo.onerror = () => {
      console.error(`Video preload error: ${testVideo.error?.message || "Unknown error"}`)
      setHasError(true)
      setShowFallback(true)
    }

    // Now set the src and try to load it
    testVideo.src = src
    testVideo.load()

    // Clean up
    return () => {
      testVideo.onloadeddata = null
      testVideo.onerror = null
      testVideo.src = ""
    }
  }, [src])

  useEffect(() => {
    // If we're showing fallback or there's no valid video element, don't try to play
    if (showFallback || !videoRef.current) return

    const videoElement = videoRef.current

    // Handle play/pause
    if (isPlaying) {
      const playPromise = videoElement.play()

      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error("Error playing video:", error.message || "Unknown error")
          setIsPlaying(false)

          // If it's not just an autoplay restriction, show fallback
          if (error.name !== "NotAllowedError") {
            setShowFallback(true)
          }
        })
      }
    } else {
      videoElement.pause()
    }

    // Handle mute state
    videoElement.muted = isMuted

    // Handle looping
    const handleEnded = () => {
      if (loop) {
        videoElement.currentTime = 0
        const restartPromise = videoElement.play()

        if (restartPromise !== undefined) {
          restartPromise.catch(() => {
            console.error("Error restarting video")
          })
        }
      }
    }

    videoElement.addEventListener("ended", handleEnded)

    return () => {
      videoElement.removeEventListener("ended", handleEnded)
    }
  }, [isPlaying, isMuted, loop, showFallback])

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  // Render fallback content
  if (showFallback) {
    // If custom fallback content is provided, use it
    if (fallbackContent) {
      return <div className={`w-full h-full ${fillContainer ? "absolute inset-0" : ""}`}>{fallbackContent}</div>
    }

    // Otherwise use default fallback
    return (
      <div
        className={`bg-gradient-to-b from-gray-800 to-gray-900 w-full h-full flex flex-col items-center justify-center ${
          fillContainer ? "absolute inset-0 object-cover" : ""
        }`}
        aria-label="Video placeholder"
      >
        <Film className="w-10 h-10 text-gray-400 mb-2 opacity-50" />
        <p className="text-gray-400 text-sm text-center px-4">
          {!src || src.trim() === ""
            ? "No video source provided"
            : hasError
              ? "Video could not be loaded"
              : "Loading video..."}
        </p>
      </div>
    )
  }

  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoplay}
        muted={muted}
        playsInline
        preload="metadata"
        className={`${fillContainer ? "absolute inset-0 w-full h-full object-cover" : "w-full h-full"}`}
        style={{
          transition: "none",
          transform: "translateZ(0)",
          willChange: "transform",
        }}
      />

      {controls && !hasError && (
        <>
          {/* Play/Pause Button Overlay */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={togglePlay}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 flex items-center justify-center hover:scale-105 transition-transform"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                <Play className="h-6 w-6 md:h-8 md:w-8 text-white ml-1" />
              </button>
            </div>
          )}

          {/* Video Controls */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <button
                onClick={togglePlay}
                className="p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-colors"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? <Pause className="h-4 w-4 text-white" /> : <Play className="h-4 w-4 text-white ml-0.5" />}
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={toggleMute}
                className="p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-colors"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                {isMuted ? <VolumeX className="h-4 w-4 text-white" /> : <Volume2 className="h-4 w-4 text-white" />}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
