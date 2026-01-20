import type { Slide } from '@/types/slide'

interface TitleSlideProps {
  slide: Slide
  partNumber?: number
}

export function TitleSlide({ slide, partNumber }: TitleSlideProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        textAlign: 'center',
        padding: '0 40px',
      }}
    >
      {partNumber !== undefined && (
        <div
          style={{
            color: 'var(--accent-primary)',
            fontSize: '32px',
            fontWeight: 500,
            marginBottom: '24px',
            letterSpacing: '4px',
            textTransform: 'uppercase',
          }}
        >
          Part {String(partNumber).padStart(2, '0')}
        </div>
      )}
      <h1
        style={{
          fontSize: 'var(--font-title)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          marginBottom: '32px',
          lineHeight: 1.1,
          maxWidth: '1000px',
        }}
      >
        {slide.title}
      </h1>
      {slide.subtitle && (
        <p
          style={{
            fontSize: 'var(--font-body)',
            color: 'var(--text-secondary)',
            maxWidth: '800px',
            lineHeight: 1.5,
          }}
        >
          {slide.subtitle}
        </p>
      )}
    </div>
  )
}
