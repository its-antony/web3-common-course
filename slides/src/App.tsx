import { useState, useEffect } from 'react'
import { Presentation } from './components/Presentation'
import { presentations } from './presentations'

// Part 描述信息
const partDescriptions: Record<string, string> = {
  part00: '课程介绍、学习目标与学习建议',
  part01: '理解 Web3 的本质与发展脉络',
  part02: '区块链核心技术与加密原理',
  part03: '钱包使用、私钥管理与安全防护',
  part04: '代币经济学与价值逻辑',
  part05: 'DeFi、NFT、GameFi 等主流赛道',
  part06: '识别风险、避免陷阱与亏损',
  part07: '快速评估项目的方法论',
  part08: 'Web3 职业路径与岗位分析',
  part09: '不同深度的参与策略',
  part10: '个人路径规划与决策框架',
  part11: '工具、资料与进阶学习路线',
}


function App() {
  const [selectedPart, setSelectedPart] = useState<string | null>(null)
  const [hoveredPart, setHoveredPart] = useState<string | null>(null)
  const [hoveredBack, setHoveredBack] = useState(false)

  // 控制 body 的滚动
  useEffect(() => {
    if (selectedPart) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [selectedPart])

  // If a presentation is selected, show it
  if (selectedPart && presentations[selectedPart]) {
    return (
      <div style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh', overflow: 'hidden' }}>
        <button
          onClick={() => setSelectedPart(null)}
          onMouseEnter={() => setHoveredBack(true)}
          onMouseLeave={() => setHoveredBack(false)}
          style={{
            position: 'fixed',
            top: '20px',
            left: '20px',
            zIndex: 100,
            padding: '10px 20px',
            backgroundColor: hoveredBack ? 'var(--bg-tertiary)' : 'var(--bg-secondary)',
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
          返回目录
        </button>
        <Presentation presentation={presentations[selectedPart]} />
      </div>
    )
  }

  // Show presentation list as cards
  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      backgroundColor: 'var(--bg-primary)',
      padding: '60px 48px 80px',
      overflowY: 'auto',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 20px',
            backgroundColor: 'var(--bg-tertiary)',
            borderRadius: '20px',
            marginBottom: '20px',
          }}>
            <span style={{ color: 'var(--text-secondary)', fontSize: '14px', fontWeight: 500 }}>
              课程演示文稿
            </span>
          </div>
          <h1 style={{
            fontSize: '56px',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: '16px',
            letterSpacing: '-1px',
          }}>
            Web3 通识课
          </h1>
          <p style={{
            fontSize: '20px',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            从零开始学习 Web3，掌握区块链、加密货币和去中心化应用的核心概念
          </p>
        </div>

        {/* Stats bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '48px',
          marginBottom: '48px',
          padding: '20px',
          backgroundColor: 'var(--bg-secondary)',
          borderRadius: '12px',
          border: '1px solid var(--bg-tertiary)',
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '32px', fontWeight: 700, color: 'var(--text-primary)' }}>
              {Object.keys(presentations).length}
            </div>
            <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>章节</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '32px', fontWeight: 700, color: 'var(--text-primary)' }}>
              {Object.values(presentations).reduce((acc, p) => acc + p.slides.length, 0)}
            </div>
            <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>幻灯片</div>
          </div>
        </div>

        {/* Section title */}
        <h2 style={{
          fontSize: '16px',
          fontWeight: 600,
          color: 'var(--text-muted)',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          marginBottom: '24px',
        }}>
          选择章节开始演示
        </h2>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '20px',
        }}>
          {Object.entries(presentations).map(([key, presentation]) => {
            const isHovered = hoveredPart === key
            return (
              <button
                key={key}
                onClick={() => setSelectedPart(key)}
                onMouseEnter={() => setHoveredPart(key)}
                onMouseLeave={() => setHoveredPart(null)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '0',
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: '16px',
                  border: isHovered ? '1px solid var(--text-muted)' : '1px solid var(--bg-tertiary)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.3s ease',
                  transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                  boxShadow: isHovered ? '0 12px 40px rgba(255, 255, 255, 0.05)' : 'none',
                  overflow: 'hidden',
                }}
              >
                {/* Card header */}
                <div style={{
                  backgroundColor: 'var(--bg-tertiary)',
                  padding: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid var(--bg-primary)',
                }}>
                  <div style={{
                    fontSize: '48px',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                  }}>
                    {String(presentation.partNumber).padStart(2, '0')}
                  </div>
                  <div style={{
                    backgroundColor: 'var(--bg-secondary)',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '13px',
                    color: 'var(--text-secondary)',
                    fontWeight: 500,
                  }}>
                    {presentation.slides.length} 页
                  </div>
                </div>

                {/* Card content */}
                <div style={{ padding: '20px 24px 24px' }}>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}>
                    {presentation.title}
                    <svg
                      style={{
                        width: '16px',
                        height: '16px',
                        color: 'var(--text-secondary)',
                        opacity: isHovered ? 1 : 0,
                        transform: isHovered ? 'translateX(0)' : 'translateX(-4px)',
                        transition: 'all 0.2s ease',
                      }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: 'var(--text-muted)',
                    lineHeight: 1.5,
                  }}>
                    {partDescriptions[key] || `Part ${presentation.partNumber} 内容`}
                  </p>
                </div>
              </button>
            )
          })}
        </div>

        {/* Keyboard shortcuts */}
        <div style={{
          marginTop: '60px',
          padding: '28px',
          backgroundColor: 'var(--bg-secondary)',
          borderRadius: '16px',
          border: '1px solid var(--bg-tertiary)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <svg style={{ width: '20px', height: '20px', color: 'var(--text-muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            <h3 style={{
              fontSize: '14px',
              fontWeight: 600,
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}>
              快捷键指南
            </h3>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '20px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '4px' }}>
                <kbd style={{ padding: '6px 12px', backgroundColor: 'var(--bg-tertiary)', borderRadius: '6px', color: 'var(--text-secondary)', fontSize: '13px', fontWeight: 500 }}>←</kbd>
                <kbd style={{ padding: '6px 12px', backgroundColor: 'var(--bg-tertiary)', borderRadius: '6px', color: 'var(--text-secondary)', fontSize: '13px', fontWeight: 500 }}>→</kbd>
              </div>
              <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>翻页</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <kbd style={{ padding: '6px 12px', backgroundColor: 'var(--bg-tertiary)', borderRadius: '6px', color: 'var(--text-secondary)', fontSize: '13px', fontWeight: 500 }}>Space</kbd>
              <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>下一页</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <kbd style={{ padding: '6px 12px', backgroundColor: 'var(--bg-tertiary)', borderRadius: '6px', color: 'var(--text-secondary)', fontSize: '13px', fontWeight: 500 }}>F</kbd>
              <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>全屏</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <kbd style={{ padding: '6px 12px', backgroundColor: 'var(--bg-tertiary)', borderRadius: '6px', color: 'var(--text-secondary)', fontSize: '13px', fontWeight: 500 }}>Esc</kbd>
              <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>退出全屏</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{
          marginTop: '48px',
          textAlign: 'center',
          color: 'var(--text-muted)',
          fontSize: '14px',
        }}>
          Web3 通识课 · 开启你的 Web3 认知之旅
        </div>
      </div>
    </div>
  )
}

export default App
