import type { Slide } from '@/types/slide'

interface StepsSlideProps {
  slide: Slide
}

export function StepsSlide({ slide }: StepsSlideProps) {
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
          gap: '20px',
        }}
      >
        {slide.steps?.map((step, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '20px',
              padding: '20px 24px',
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: '12px',
              border: '1px solid var(--bg-tertiary)',
            }}
          >
            <div
              style={{
                minWidth: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'var(--bg-tertiary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                fontWeight: 600,
                color: 'var(--text-primary)',
              }}
            >
              {index + 1}
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '6px',
                }}
              >
                {step.title}
              </div>
              <div
                style={{
                  fontSize: '16px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5,
                }}
              >
                {step.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
