import type { ContentBlock as ContentBlockType } from '@/types/slide'

interface ContentBlockProps {
  block: ContentBlockType
}

export function ContentBlock({ block }: ContentBlockProps) {
  switch (block.type) {
    case 'text':
      return (
        <p
          style={{
            fontSize: 'var(--font-body)',
            lineHeight: 1.5,
            color: 'var(--text-primary)',
            textAlign: 'center',
          }}
        >
          {block.value ?? block.content}
        </p>
      )

    case 'bullets':
      return (
        <ul style={{ listStyle: 'none', margin: '0 auto', maxWidth: '1000px' }}>
          {block.items.map((item, index) => (
            <li
              key={index}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '20px',
                fontSize: 'var(--font-body)',
                color: 'var(--text-primary)',
                marginBottom: '20px',
              }}
            >
              <span
                style={{
                  color: 'var(--accent-primary)',
                  marginTop: '14px',
                  flexShrink: 0,
                }}
              >
                <svg style={{ width: '12px', height: '12px', fill: 'currentColor' }} viewBox="0 0 8 8">
                  <circle cx="4" cy="4" r="4" />
                </svg>
              </span>
              <span style={{ lineHeight: 1.4 }}>{item}</span>
            </li>
          ))}
        </ul>
      )

    case 'numbered':
      return (
        <ol style={{ listStyle: 'none', margin: '0 auto', maxWidth: '1000px' }}>
          {block.items.map((item, index) => (
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
                  width: '48px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-primary)',
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: 600,
                }}
              >
                {index + 1}
              </span>
              <span style={{ lineHeight: 1.4, marginTop: '8px' }}>{item}</span>
            </li>
          ))}
        </ol>
      )

    case 'highlight': {
      const highlightText = block.value ?? block.text ?? block.content
      const variantStyles: Record<string, { bg: string; border: string }> = {
        info: { bg: 'rgba(59, 130, 246, 0.1)', border: 'var(--accent-primary)' },
        warning: { bg: 'rgba(245, 158, 11, 0.1)', border: 'var(--accent-warning)' },
        tip: { bg: 'rgba(34, 197, 94, 0.1)', border: 'var(--accent-success)' },
        error: { bg: 'rgba(239, 68, 68, 0.1)', border: 'var(--accent-error)' },
      }
      const style = variantStyles[block.variant ?? 'info']
      return (
        <div
          style={{
            padding: '24px 32px',
            backgroundColor: style.bg,
            borderLeft: `6px solid ${style.border}`,
            borderRadius: '0 12px 12px 0',
            margin: '0 auto',
            maxWidth: '1000px',
          }}
        >
          <p
            style={{
              fontSize: 'var(--font-body)',
              color: 'var(--text-primary)',
              fontWeight: 500,
              lineHeight: 1.4,
            }}
          >
            {highlightText}
          </p>
        </div>
      )
    }

    case 'table':
      return (
        <div style={{ overflowX: 'auto', margin: '0 auto', maxWidth: '100%' }}>
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: 'var(--font-small)',
            }}
          >
            <thead>
              <tr>
                {block.headers.map((header, index) => (
                  <th
                    key={index}
                    style={{
                      padding: '20px 28px',
                      textAlign: 'left',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      backgroundColor: 'var(--bg-tertiary)',
                      borderBottom: '2px solid var(--accent-primary)',
                    }}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  style={{
                    backgroundColor: rowIndex % 2 === 0 ? 'var(--bg-secondary)' : 'transparent',
                  }}
                >
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      style={{
                        padding: '18px 28px',
                        color: 'var(--text-primary)',
                        borderBottom: '1px solid var(--bg-tertiary)',
                      }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )

    case 'code':
      return (
        <div
          style={{
            borderRadius: '12px',
            overflow: 'hidden',
            backgroundColor: 'var(--bg-tertiary)',
            margin: '0 auto',
            maxWidth: '1000px',
          }}
        >
          <div
            style={{
              padding: '12px 20px',
              backgroundColor: 'var(--bg-secondary)',
              fontSize: '16px',
              color: 'var(--text-secondary)',
              borderBottom: '1px solid var(--bg-tertiary)',
            }}
          >
            {block.language}
          </div>
          <pre style={{ padding: '24px', margin: 0, overflowX: 'auto' }}>
            <code
              style={{
                fontSize: '20px',
                fontFamily: '"JetBrains Mono", "Fira Code", monospace',
                color: 'var(--text-primary)',
                lineHeight: 1.5,
              }}
            >
              {block.code}
            </code>
          </pre>
        </div>
      )

    case 'image':
      return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={block.src}
            alt={block.alt || ''}
            style={{
              maxWidth: '100%',
              maxHeight: '60vh',
              borderRadius: '12px',
              objectFit: 'contain',
            }}
          />
        </div>
      )

    case 'image-placeholder':
      const sizeStyles = {
        small: { width: '240px', height: '160px' },
        medium: { width: '400px', height: '240px' },
        large: { width: '600px', height: '320px' },
        full: { width: '100%', height: '320px' },
      }
      const size = block.suggestedSize || 'medium'
      return (
        <div
          style={{
            ...sizeStyles[size],
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '3px dashed var(--text-muted)',
            borderRadius: '12px',
            backgroundColor: 'var(--bg-secondary)',
          }}
        >
          <svg
            style={{ width: '64px', height: '64px', color: 'var(--text-muted)', marginBottom: '16px' }}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '0 20px', fontSize: '18px' }}>
            {block.description}
          </p>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '8px' }}>
            {size}
          </p>
        </div>
      )

    case 'mermaid':
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: '12px',
            margin: '0 auto',
            maxWidth: '1000px',
          }}
        >
          <pre style={{ color: 'var(--text-secondary)', fontSize: '16px', margin: 0 }}>
            {block.chart}
          </pre>
        </div>
      )

    case 'comparison':
      return (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '24px',
            margin: '0 auto',
            maxWidth: '1000px',
          }}
        >
          {/* Left column */}
          <div
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: '12px',
              padding: '24px',
              border: '1px solid var(--bg-tertiary)',
            }}
          >
            {block.leftTitle && (
              <h4
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '16px',
                  paddingBottom: '12px',
                  borderBottom: '2px solid var(--accent-primary)',
                }}
              >
                {block.leftTitle}
              </h4>
            )}
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {block.leftItems?.map((item, index) => (
                <li
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    fontSize: '15px',
                    color: 'var(--text-secondary)',
                    marginBottom: '10px',
                    lineHeight: 1.4,
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
              padding: '24px',
              border: '1px solid var(--bg-tertiary)',
            }}
          >
            {block.rightTitle && (
              <h4
                style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '16px',
                  paddingBottom: '12px',
                  borderBottom: '2px solid var(--accent-warning)',
                }}
              >
                {block.rightTitle}
              </h4>
            )}
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {block.rightItems?.map((item, index) => (
                <li
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    fontSize: '15px',
                    color: 'var(--text-secondary)',
                    marginBottom: '10px',
                    lineHeight: 1.4,
                  }}
                >
                  <span style={{ color: 'var(--accent-warning)', flexShrink: 0 }}>•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )

    default:
      return null
  }
}
