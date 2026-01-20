import { useState } from 'react'
import { ScriptRenderer } from '../components/ScriptRenderer'
import { presentations } from '../presentations'

// 讲稿文件导入
import part00Script from '../scripts/part00.md?raw'
import part01Script from '../scripts/part01.md?raw'
import part02Script from '../scripts/part02.md?raw'
import part03Script from '../scripts/part03.md?raw'
import part04Script from '../scripts/part04.md?raw'
import part05Script from '../scripts/part05.md?raw'
import part06Script from '../scripts/part06.md?raw'
import part07Script from '../scripts/part07.md?raw'
import part08Script from '../scripts/part08.md?raw'
import part09Script from '../scripts/part09.md?raw'
import part10Script from '../scripts/part10.md?raw'
import part11Script from '../scripts/part11.md?raw'

const scripts: Record<string, string> = {
  part00: part00Script,
  part01: part01Script,
  part02: part02Script,
  part03: part03Script,
  part04: part04Script,
  part05: part05Script,
  part06: part06Script,
  part07: part07Script,
  part08: part08Script,
  part09: part09Script,
  part10: part10Script,
  part11: part11Script,
}

interface ScriptViewerProps {
  partId: string
  onBack: () => void
}

export function ScriptViewer({ partId, onBack }: ScriptViewerProps) {
  const [hoveredBack, setHoveredBack] = useState(false)
  const [hoveredDownload, setHoveredDownload] = useState(false)

  const scriptContent = scripts[partId] || ''
  const presentation = presentations[partId]
  const partNumber = presentation?.partNumber ?? 0
  const title = presentation?.title ?? ''

  const handleDownload = () => {
    const blob = new Blob([scriptContent], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${partId}-script.md`
    a.click()
    URL.revokeObjectURL(url)
  }

  if (!scriptContent) {
    return (
      <div style={{
        width: '100%',
        minHeight: '100vh',
        backgroundColor: 'var(--bg-primary)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
      }}>
        <div style={{
          fontSize: '64px',
          color: 'var(--text-muted)',
        }}>
          📝
        </div>
        <div style={{
          fontSize: '24px',
          fontWeight: 600,
          color: 'var(--text-primary)',
        }}>
          讲稿暂未生成
        </div>
        <div style={{
          fontSize: '16px',
          color: 'var(--text-muted)',
        }}>
          {partId.toUpperCase()} 的讲稿内容正在准备中
        </div>
        <button
          onClick={onBack}
          onMouseEnter={() => setHoveredBack(true)}
          onMouseLeave={() => setHoveredBack(false)}
          style={{
            marginTop: '16px',
            padding: '12px 24px',
            backgroundColor: hoveredBack ? 'var(--bg-tertiary)' : 'var(--bg-secondary)',
            borderRadius: '8px',
            fontSize: '14px',
            color: 'var(--text-primary)',
            border: '1px solid var(--bg-tertiary)',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          返回目录
        </button>
      </div>
    )
  }

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      backgroundColor: 'var(--bg-primary)',
    }}>
      {/* Header */}
      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--bg-tertiary)',
        padding: '16px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <button
          onClick={onBack}
          onMouseEnter={() => setHoveredBack(true)}
          onMouseLeave={() => setHoveredBack(false)}
          style={{
            padding: '8px 16px',
            backgroundColor: hoveredBack ? 'var(--bg-tertiary)' : 'transparent',
            borderRadius: '8px',
            fontSize: '14px',
            color: 'var(--text-primary)',
            border: '1px solid var(--bg-tertiary)',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          返回
        </button>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}>
          <span style={{
            fontSize: '14px',
            fontWeight: 500,
            color: 'var(--text-muted)',
          }}>
            Part {String(partNumber).padStart(2, '0')}
          </span>
          <span style={{
            fontSize: '18px',
            fontWeight: 600,
            color: 'var(--text-primary)',
          }}>
            {title} · 讲稿
          </span>
        </div>

        <button
          onClick={handleDownload}
          onMouseEnter={() => setHoveredDownload(true)}
          onMouseLeave={() => setHoveredDownload(false)}
          style={{
            padding: '8px 16px',
            backgroundColor: hoveredDownload ? '#3b82f6' : 'var(--bg-tertiary)',
            borderRadius: '8px',
            fontSize: '14px',
            color: hoveredDownload ? 'white' : 'var(--text-primary)',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          下载 MD
        </button>
      </div>

      {/* Content */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '48px 24px 120px',
      }}>
        <ScriptRenderer content={scriptContent} />
      </div>
    </div>
  )
}
