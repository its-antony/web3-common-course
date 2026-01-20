import type { Slide } from '@/types/slide'
import { ContentBlock } from '../ContentBlock'

interface ComparisonSlideProps {
  slide: Slide
}

export function ComparisonSlide({ slide }: ComparisonSlideProps) {
  // 检查是否使用新的 leftTitle/leftItems/rightTitle/rightItems 格式
  const hasComparisonData = slide.leftTitle || slide.leftItems || slide.rightTitle || slide.rightItems

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
        }}
      >
        {hasComparisonData ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '40px',
            }}
          >
            {/* Left column */}
            <div
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: '12px',
                padding: '28px',
                border: '1px solid var(--bg-tertiary)',
              }}
            >
              {slide.leftTitle && (
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '20px',
                    paddingBottom: '16px',
                    borderBottom: '2px solid var(--accent-primary)',
                  }}
                >
                  {slide.leftTitle}
                </h3>
              )}
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {slide.leftItems?.map((item, index) => (
                  <li
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      fontSize: '16px',
                      color: 'var(--text-secondary)',
                      marginBottom: '12px',
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: 'var(--accent-primary)', flexShrink: 0 }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right column */}
            <div
              style={{
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: '12px',
                padding: '28px',
                border: '1px solid var(--bg-tertiary)',
              }}
            >
              {slide.rightTitle && (
                <h3
                  style={{
                    fontSize: '20px',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '20px',
                    paddingBottom: '16px',
                    borderBottom: '2px solid var(--accent-warning)',
                  }}
                >
                  {slide.rightTitle}
                </h3>
              )}
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {slide.rightItems?.map((item, index) => (
                  <li
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      fontSize: '16px',
                      color: 'var(--text-secondary)',
                      marginBottom: '12px',
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: 'var(--accent-warning)', flexShrink: 0 }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          slide.content?.map((block, index) => (
            <ContentBlock key={index} block={block} />
          ))
        )}
      </div>
    </div>
  )
}
