import type { Slide } from '@/types/slide'
import { SlideRenderer } from './slides'

interface SlidePreviewProps {
  slide: Slide | null
  visible: boolean
  partNumber?: number
}

export function SlidePreview({ slide, visible, partNumber }: SlidePreviewProps) {
  if (!visible) return null

  return (
    <div
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        width: '300px',
        height: '180px',
        backgroundColor: 'var(--bg-primary)',
        borderRadius: '12px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
        border: '1px solid var(--bg-tertiary)',
        overflow: 'hidden',
        zIndex: 90,
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.2s ease',
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '8px 12px',
          backgroundColor: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--bg-tertiary)',
          fontSize: '12px',
          color: 'var(--text-muted)',
          fontWeight: 500,
        }}
      >
        {slide ? '下一页预览' : '已是最后一页'}
      </div>

      {/* Preview content */}
      <div
        style={{
          width: '100%',
          height: 'calc(100% - 33px)',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {slide ? (
          <div
            style={{
              width: '1280px',
              height: '720px',
              transform: 'scale(0.22)',
              transformOrigin: 'top left',
              pointerEvents: 'none',
              padding: '60px 80px',
              boxSizing: 'border-box',
            }}
          >
            <SlideRenderer
              slide={slide}
              partNumber={slide.type === 'title' ? partNumber : undefined}
            />
          </div>
        ) : (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              color: 'var(--text-muted)',
              fontSize: '14px',
            }}
          >
            演示结束
          </div>
        )}
      </div>
    </div>
  )
}
