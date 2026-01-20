import { useState, useEffect, useCallback } from 'react'

interface UseSlideControlOptions {
  totalSlides: number
  initialSlide?: number
}

export function useSlideControl({ totalSlides, initialSlide = 0 }: UseSlideControlOptions) {
  const [currentSlide, setCurrentSlide] = useState(initialSlide)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showPreview, setShowPreview] = useState(false)

  const togglePreview = useCallback(() => {
    setShowPreview(prev => !prev)
  }, [])

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index)
    }
  }, [totalSlides])

  const nextSlide = useCallback(() => {
    goToSlide(currentSlide + 1)
  }, [currentSlide, goToSlide])

  const prevSlide = useCallback(() => {
    goToSlide(currentSlide - 1)
  }, [currentSlide, goToSlide])

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case ' ':
          e.preventDefault()
          nextSlide()
          break
        case 'ArrowLeft':
        case 'ArrowUp':
          e.preventDefault()
          prevSlide()
          break
        case 'f':
        case 'F':
          e.preventDefault()
          toggleFullscreen()
          break
        case 'Escape':
          if (isFullscreen) {
            setIsFullscreen(false)
          }
          break
        case 'p':
        case 'P':
          e.preventDefault()
          togglePreview()
          break
        case 'Home':
          e.preventDefault()
          goToSlide(0)
          break
        case 'End':
          e.preventDefault()
          goToSlide(totalSlides - 1)
          break
      }
    }

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    window.addEventListener('keydown', handleKeyDown)
    document.addEventListener('fullscreenchange', handleFullscreenChange)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
    }
  }, [nextSlide, prevSlide, toggleFullscreen, togglePreview, goToSlide, totalSlides, isFullscreen])

  return {
    currentSlide,
    totalSlides,
    isFullscreen,
    showPreview,
    goToSlide,
    nextSlide,
    prevSlide,
    toggleFullscreen,
    togglePreview,
    isFirst: currentSlide === 0,
    isLast: currentSlide === totalSlides - 1,
    progress: totalSlides > 1 ? currentSlide / (totalSlides - 1) : 1,
  }
}
