import type { Slide } from '@/types/slide'

interface QuoteSlideProps {
  slide: Slide
}

export function QuoteSlide({ slide }: QuoteSlideProps) {
  // 优先使用 slide.quote，兼容旧的 content 格式
  const quoteText = slide.content?.find(b => b.type === 'text' || b.type === 'highlight')
  const text = slide.quote ?? (quoteText && ('value' in quoteText) ? quoteText.value : undefined)
  const attribution = slide.attribution ?? slide.subtitle

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        textAlign: 'center',
        padding: '0 60px',
      }}
    >
      <div style={{ maxWidth: '1000px' }}>
        {slide.title && (
          <h2
            style={{
              fontSize: 'var(--font-body)',
              fontWeight: 600,
              color: 'var(--text-muted)',
              marginBottom: '32px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
            }}
          >
            {slide.title}
          </h2>
        )}
        <svg
          style={{
            width: '80px',
            height: '80px',
            color: 'var(--accent-primary)',
            opacity: 0.4,
            marginBottom: '40px',
          }}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p
          style={{
            fontSize: 'var(--font-heading)',
            fontWeight: 500,
            color: 'var(--text-primary)',
            lineHeight: 1.4,
          }}
        >
          {text}
        </p>
        {attribution && (
          <p
            style={{
              fontSize: 'var(--font-small)',
              color: 'var(--text-secondary)',
              marginTop: '40px',
            }}
          >
            — {attribution}
          </p>
        )}
      </div>
    </div>
  )
}
