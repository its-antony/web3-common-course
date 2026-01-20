import type { ReactNode } from 'react'

interface SlideProps {
  children: ReactNode
  isActive: boolean
}

export function Slide({ children, isActive }: SlideProps) {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 80px 100px 80px',
        opacity: isActive ? 1 : 0,
        transform: isActive ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.4s ease-out, transform 0.4s ease-out',
        pointerEvents: isActive ? 'auto' : 'none',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1400px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {children}
      </div>
    </div>
  )
}
