import type { Slide } from '@/types/slide'

interface SummarySlideProps {
  slide: Slide
}

export function SummarySlide({ slide }: SummarySlideProps) {
  // 优先使用 slide.items，兼容旧的 content.bullets 格式
  const bulletContent = slide.content?.find(b => b.type === 'bullets')
  const items = slide.items ?? (bulletContent && bulletContent.type === 'bullets' ? bulletContent.items : [])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <h2
        style={{
          fontSize: 'var(--font-heading)',
          fontWeight: 600,
          color: 'var(--text-primary)',
          marginBottom: '48px',
          textAlign: 'center',
        }}
      >
        {slide.title || '本节要点'}
      </h2>
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ul style={{ listStyle: 'none', maxWidth: '1000px', width: '100%' }}>
          {items.map((item, index) => (
            <li
              key={index}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '24px',
                fontSize: 'var(--font-body)',
                color: 'var(--text-primary)',
                marginBottom: '24px',
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-success)',
                  color: 'white',
                  marginTop: '4px',
                }}
              >
                <svg style={{ width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span style={{ lineHeight: 1.4 }}>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
