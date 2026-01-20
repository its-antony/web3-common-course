import type { Slide } from '@/types/slide'
import { ContentBlock } from '../ContentBlock'

interface DiagramSlideProps {
  slide: Slide
}

export function DiagramSlide({ slide }: DiagramSlideProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      {slide.title && (
        <h2
          style={{
            fontSize: 'var(--font-heading)',
            fontWeight: 600,
            color: 'var(--text-primary)',
            marginBottom: '40px',
            textAlign: 'center',
          }}
        >
          {slide.title}
        </h2>
      )}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {slide.content?.map((block, index) => (
          <ContentBlock key={index} block={block} />
        ))}
      </div>
    </div>
  )
}
