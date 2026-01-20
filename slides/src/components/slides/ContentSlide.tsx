import type { Slide } from '@/types/slide'
import { ContentBlock } from '../ContentBlock'

interface ContentSlideProps {
  slide: Slide
}

export function ContentSlide({ slide }: ContentSlideProps) {
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
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '28px',
          overflow: 'auto',
        }}
      >
        {slide.content?.map((block, index) => (
          <ContentBlock key={index} block={block} />
        ))}
      </div>
    </div>
  )
}
