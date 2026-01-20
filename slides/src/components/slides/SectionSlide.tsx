import type { Slide } from '@/types/slide'

interface SectionSlideProps {
  slide: Slide
}

export function SectionSlide({ slide }: SectionSlideProps) {
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
      <div
        style={{
          width: '120px',
          height: '4px',
          backgroundColor: 'var(--accent-primary)',
          marginBottom: '48px',
          borderRadius: '2px',
        }}
      />
      <h2
        style={{
          fontSize: 'var(--font-section)',
          fontWeight: 600,
          color: 'var(--text-primary)',
          marginBottom: '24px',
          lineHeight: 1.2,
          maxWidth: '900px',
        }}
      >
        {slide.title}
      </h2>
      {slide.subtitle && (
        <p
          style={{
            fontSize: 'var(--font-small)',
            color: 'var(--text-secondary)',
            maxWidth: '700px',
            lineHeight: 1.6,
          }}
        >
          {slide.subtitle}
        </p>
      )}
      <div
        style={{
          width: '120px',
          height: '4px',
          backgroundColor: 'var(--accent-primary)',
          marginTop: '48px',
          borderRadius: '2px',
        }}
      />
    </div>
  )
}
