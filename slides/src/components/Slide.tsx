import { type ReactNode, useState, useEffect } from 'react'

interface SlideProps {
  children: ReactNode
  isActive: boolean
}

const BASE_WIDTH = 1920
const BASE_HEIGHT = 1080

function useViewportScale() {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const updateScale = () => {
      const widthScale = window.innerWidth / BASE_WIDTH
      const heightScale = window.innerHeight / BASE_HEIGHT
      // 取较小值确保内容完全可见
      const newScale = Math.min(widthScale, heightScale, 1)
      setScale(newScale)
    }

    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [])

  return scale
}

export function Slide({ children, isActive }: SlideProps) {
  const scale = useViewportScale()

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: `${BASE_WIDTH}px`,
          height: `${BASE_HEIGHT}px`,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px 80px 100px 80px',
          opacity: isActive ? 1 : 0,
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
    </div>
  )
}
