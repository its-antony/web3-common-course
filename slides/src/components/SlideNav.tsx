import { useState } from 'react'

interface SlideNavProps {
  currentSlide: number
  totalSlides: number
  onPrev: () => void
  onNext: () => void
  onToggleFullscreen: () => void
  onTogglePreview: () => void
  showPreview: boolean
  isFirst: boolean
  isLast: boolean
  progress: number
}

export function SlideNav({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onToggleFullscreen,
  onTogglePreview,
  showPreview,
  isFirst,
  isLast,
  progress,
}: SlideNavProps) {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)

  const buttonStyle = (id: string, disabled = false): React.CSSProperties => ({
    padding: '12px',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: hoveredButton === id && !disabled ? 'var(--bg-tertiary)' : 'transparent',
    color: 'var(--text-primary)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.3 : 1,
    transition: 'background-color 0.2s, opacity 0.2s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  })

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
      }}
    >
      {/* Progress bar */}
      <div style={{ height: '4px', backgroundColor: 'var(--bg-tertiary)' }}>
        <div
          style={{
            height: '100%',
            backgroundColor: 'var(--accent-primary)',
            width: `${progress * 100}%`,
            transition: 'width 0.3s ease-out',
          }}
        />
      </div>

      {/* Navigation controls */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 32px',
          backgroundColor: 'var(--bg-secondary)',
        }}
      >
        {/* Left: slide counter */}
        <div style={{ fontSize: '18px', color: 'var(--text-secondary)', minWidth: '120px' }}>
          <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{currentSlide + 1}</span>
          <span style={{ margin: '0 6px' }}>/</span>
          <span>{totalSlides}</span>
        </div>

        {/* Center: navigation buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            disabled={isFirst}
            style={buttonStyle('prev', isFirst)}
            onMouseEnter={() => setHoveredButton('prev')}
            onMouseLeave={() => setHoveredButton(null)}
            aria-label="Previous slide"
          >
            <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            disabled={isLast}
            style={buttonStyle('next', isLast)}
            onMouseEnter={() => setHoveredButton('next')}
            onMouseLeave={() => setHoveredButton(null)}
            aria-label="Next slide"
          >
            <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Right: preview and fullscreen buttons */}
        <div style={{ minWidth: '120px', display: 'flex', justifyContent: 'flex-end', gap: '4px' }}>
          <button
            onClick={(e) => { e.stopPropagation(); onTogglePreview(); }}
            style={{
              ...buttonStyle('preview'),
              backgroundColor: showPreview
                ? 'var(--bg-tertiary)'
                : (hoveredButton === 'preview' ? 'var(--bg-tertiary)' : 'transparent'),
            }}
            onMouseEnter={() => setHoveredButton('preview')}
            onMouseLeave={() => setHoveredButton(null)}
            aria-label="Toggle preview"
            title="预览下一页 (P)"
          >
            <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
              />
            </svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onToggleFullscreen(); }}
            style={buttonStyle('fullscreen')}
            onMouseEnter={() => setHoveredButton('fullscreen')}
            onMouseLeave={() => setHoveredButton(null)}
            aria-label="Toggle fullscreen"
            title="全屏 (F)"
          >
            <svg style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
