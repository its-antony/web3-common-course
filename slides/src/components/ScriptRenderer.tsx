import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface ScriptRendererProps {
  content: string
}

export function ScriptRenderer({ content }: ScriptRendererProps) {
  return (
    <div className="script-renderer">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // 标题样式
          h1: ({ children }) => (
            <h1 style={{
              fontSize: '32px',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '24px',
              paddingBottom: '16px',
              borderBottom: '2px solid var(--bg-tertiary)',
            }}>
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 style={{
              fontSize: '20px',
              fontWeight: 600,
              color: 'var(--text-primary)',
              marginTop: '32px',
              marginBottom: '16px',
              paddingTop: '24px',
              borderTop: '1px solid var(--bg-tertiary)',
            }}>
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 style={{
              fontSize: '18px',
              fontWeight: 600,
              color: 'var(--text-secondary)',
              marginTop: '20px',
              marginBottom: '12px',
            }}>
              {children}
            </h3>
          ),
          // 段落样式
          p: ({ children }) => (
            <p style={{
              fontSize: '16px',
              lineHeight: 1.8,
              color: 'var(--text-secondary)',
              marginBottom: '16px',
            }}>
              {children}
            </p>
          ),
          // 分隔线样式 - 页面分隔
          hr: () => (
            <hr style={{
              border: 'none',
              borderTop: '2px dashed var(--bg-tertiary)',
              margin: '40px 0',
            }} />
          ),
          // 引用块样式 - 用于【演示】标记
          blockquote: ({ children }) => (
            <blockquote style={{
              margin: '20px 0',
              padding: '16px 20px',
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              borderLeft: '4px solid #3b82f6',
              borderRadius: '0 8px 8px 0',
              color: 'var(--text-primary)',
            }}>
              {children}
            </blockquote>
          ),
          // 列表样式
          ul: ({ children }) => (
            <ul style={{
              marginBottom: '16px',
              paddingLeft: '24px',
              listStyleType: 'disc',
            }}>
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol style={{
              marginBottom: '16px',
              paddingLeft: '24px',
              listStyleType: 'decimal',
            }}>
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li style={{
              fontSize: '16px',
              lineHeight: 1.8,
              color: 'var(--text-secondary)',
              marginBottom: '8px',
            }}>
              {children}
            </li>
          ),
          // 代码块样式
          code: ({ className, children }) => {
            const isInline = !className
            if (isInline) {
              return (
                <code style={{
                  backgroundColor: 'var(--bg-tertiary)',
                  padding: '2px 6px',
                  borderRadius: '4px',
                  fontSize: '14px',
                  fontFamily: 'monospace',
                  color: 'var(--text-primary)',
                }}>
                  {children}
                </code>
              )
            }
            return (
              <code style={{
                display: 'block',
                backgroundColor: 'var(--bg-tertiary)',
                padding: '16px',
                borderRadius: '8px',
                fontSize: '14px',
                fontFamily: 'monospace',
                color: 'var(--text-primary)',
                overflowX: 'auto',
                whiteSpace: 'pre-wrap',
              }}>
                {children}
              </code>
            )
          },
          pre: ({ children }) => (
            <pre style={{
              margin: '16px 0',
              borderRadius: '8px',
              overflow: 'hidden',
            }}>
              {children}
            </pre>
          ),
          // 表格样式
          table: ({ children }) => (
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              marginBottom: '16px',
            }}>
              {children}
            </table>
          ),
          thead: ({ children }) => (
            <thead style={{
              backgroundColor: 'var(--bg-tertiary)',
            }}>
              {children}
            </thead>
          ),
          th: ({ children }) => (
            <th style={{
              padding: '12px',
              textAlign: 'left',
              fontSize: '14px',
              fontWeight: 600,
              color: 'var(--text-primary)',
              borderBottom: '1px solid var(--bg-tertiary)',
            }}>
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td style={{
              padding: '12px',
              fontSize: '14px',
              color: 'var(--text-secondary)',
              borderBottom: '1px solid var(--bg-tertiary)',
            }}>
              {children}
            </td>
          ),
          // 强调样式
          strong: ({ children }) => (
            <strong style={{
              fontWeight: 600,
              color: 'var(--text-primary)',
            }}>
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em style={{
              fontStyle: 'italic',
              color: 'var(--text-secondary)',
            }}>
              {children}
            </em>
          ),
          // 链接样式
          a: ({ children, href }) => (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#3b82f6',
                textDecoration: 'underline',
              }}
            >
              {children}
            </a>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
