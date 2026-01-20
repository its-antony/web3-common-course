import type { Presentation as PresentationType } from '@/types/slide'
import { useSlideControl } from '@/hooks/useSlideControl'
import { Slide } from './Slide'
import { SlideNav } from './SlideNav'
import { SlidePreview } from './SlidePreview'
import { SlideRenderer } from './slides'

interface PresentationProps {
  presentation: PresentationType
}

export function Presentation({ presentation }: PresentationProps) {
  const {
    currentSlide,
    totalSlides,
    nextSlide,
    prevSlide,
    toggleFullscreen,
    togglePreview,
    showPreview,
    isFirst,
    isLast,
    progress,
  } = useSlideControl({ totalSlides: presentation.slides.length })

  const nextSlideData = currentSlide < presentation.slides.length - 1
    ? presentation.slides[currentSlide + 1]
    : null

  const handleClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const width = rect.width

    if (x < width / 3) {
      prevSlide()
    } else if (x > (width * 2) / 3) {
      nextSlide()
    }
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: 'var(--bg-primary)',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
      onClick={handleClick}
    >
      {presentation.slides.map((slide, index) => (
        <Slide key={slide.id} isActive={index === currentSlide}>
          <SlideRenderer
            slide={slide}
            partNumber={slide.type === 'title' ? presentation.partNumber : undefined}
          />
        </Slide>
      ))}

      <SlidePreview
        slide={nextSlideData}
        visible={showPreview}
        partNumber={presentation.partNumber}
      />

      <SlideNav
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrev={prevSlide}
        onNext={nextSlide}
        onToggleFullscreen={toggleFullscreen}
        onTogglePreview={togglePreview}
        showPreview={showPreview}
        isFirst={isFirst}
        isLast={isLast}
        progress={progress}
      />
    </div>
  )
}
