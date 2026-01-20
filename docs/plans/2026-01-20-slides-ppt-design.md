# Web3 通识课 PPT 演示系统设计方案

## 概述

为 Web3 通识课录制视频配套的 PPT 演示系统，采用 React + shadcn 技术栈，以网页形式呈现。

## 需求总结

| 维度 | 选择 |
|------|------|
| PPT 定位 | 混合型（按信息密度区分风格） |
| 高密度内容 | 对比表格、步骤流程、案例复盘、概念清单、数据图表 |
| 低密度内容 | 观点阐述、认知框架、心态引导（讲师主导） |
| 技术栈 | React + shadcn + Vite |
| 功能 | 基础演示 + 内容增强（代码高亮、Mermaid、动画） |
| 内容组织 | 按 Part 合并，12 个演示文件 |
| 项目位置 | `slides/` 目录 |
| 视觉风格 | 暗色沉稳风 |
| 内容来源 | AI 辅助从 Markdown 提取 |

---

## 项目结构

```
slides/
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── index.html
├── src/
│   ├── main.tsx                    # 入口
│   ├── App.tsx                     # 路由：选择 Part
│   ├── components/
│   │   ├── ui/                     # shadcn 组件
│   │   ├── Slide.tsx               # 单页幻灯片容器
│   │   ├── SlideContent.tsx        # 内容渲染（文字、列表、图表等）
│   │   ├── SlideNav.tsx            # 翻页控制 + 进度指示
│   │   ├── CodeBlock.tsx           # 代码高亮组件
│   │   ├── MermaidChart.tsx        # Mermaid 图表渲染
│   │   └── ComparisonTable.tsx     # 对比表格组件
│   ├── presentations/
│   │   ├── part00.ts               # Part 0 幻灯片数据
│   │   ├── part01.ts               # Part 1 幻灯片数据
│   │   └── ...                     # Part 2-11
│   ├── hooks/
│   │   └── useSlideControl.ts      # 翻页、全屏、键盘控制逻辑
│   ├── assets/                     # 图片资源
│   └── styles/
│       └── theme.css               # 暗色主题变量
```

**技术选型**：
- 构建工具：Vite
- UI 组件：shadcn/ui
- 图表：Mermaid
- 代码高亮：Shiki 或 Prism
- 动画：Framer Motion 或 CSS transition

---

## 数据结构设计

### 幻灯片类型

```typescript
type SlideType =
  | 'title'        // 标题页（Part 开头）
  | 'section'      // 章节标题（如 1.1、1.2）
  | 'content'      // 普通内容页
  | 'comparison'   // 对比表格页
  | 'steps'        // 步骤流程页
  | 'diagram'      // Mermaid 图表页
  | 'quote'        // 金句/观点页
  | 'summary'      // 总结页

interface Slide {
  id: string
  type: SlideType
  title?: string
  subtitle?: string
  content?: ContentBlock[]
  notes?: string              // 讲师备注
}
```

### 内容块类型

```typescript
type ContentBlock =
  | { type: 'text'; value: string }
  | { type: 'bullets'; items: string[] }
  | { type: 'numbered'; items: string[] }
  | { type: 'code'; language: string; code: string }
  | { type: 'mermaid'; chart: string }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'image'; src: string; alt?: string }
  | { type: 'highlight'; value: string }
  | {
      type: 'image-placeholder';
      description: string;
      suggestedSize?: 'small' | 'medium' | 'large' | 'full';
    }
```

### 示例数据

```typescript
// Part 1 的一页示例
{
  id: '1.1-02',
  type: 'comparison',
  title: 'Web3 是什么 vs 不是什么',
  content: [
    {
      type: 'table',
      headers: ['Web3 是', 'Web3 不是'],
      rows: [
        ['一种技术架构范式', '一个具体的产品或公司'],
        ['基于区块链的价值网络', '只是炒币或投机'],
        ['用户拥有数据和资产', '完全去中心化的乌托邦'],
      ]
    }
  ]
}

// 带图片占位符的示例
{
  id: '3.5-03',
  type: 'steps',
  title: '创建 MetaMask 钱包',
  content: [
    { type: 'numbered', items: ['访问 metamask.io', '点击下载', '创建新钱包'] },
    {
      type: 'image-placeholder',
      description: '截图：MetaMask 创建钱包界面',
      suggestedSize: 'large'
    }
  ]
}
```

---

## 核心组件设计

### 组件清单

| 组件 | 用途 | 视觉特点 |
|------|------|----------|
| Slide | 幻灯片容器 | 全屏深灰背景，内容居中 |
| SlideNav | 导航控制 | 底部进度条，左右箭头 |
| TitleSlide | Part 标题页 | 大字居中，Part 编号 + 标题 |
| SectionSlide | 章节标题页 | 章节号 + 标题，带分隔线 |
| ContentSlide | 通用内容页 | 标题 + 内容块列表 |
| ComparisonSlide | 对比表格 | 双栏或多栏表格，交替行背景 |
| StepsSlide | 步骤流程 | 带序号的垂直步骤列表 |
| DiagramSlide | 图表页 | Mermaid 渲染区域居中 |
| QuoteSlide | 金句页 | 大字引用，淡色背景 |
| SummarySlide | 总结页 | 要点列表，带 checkmark 图标 |
| ImagePlaceholder | 图片占位符 | 虚线边框，灰色背景，描述文字 |

### 交互功能

- 键盘：← → 翻页，F 全屏，Esc 退出全屏
- 鼠标：点击左右区域翻页
- 触控：左右滑动翻页（可选）

### 动画过渡

- 默认：fade in + 从下向上位移（20px）
- 切换时长：300-400ms
- 使用 Framer Motion 或 CSS transition

---

## 视觉风格系统

### 颜色体系

```css
:root {
  /* 背景层次 */
  --bg-primary: #0a0a0a;      /* 主背景 - 近乎纯黑 */
  --bg-secondary: #141414;    /* 卡片/区块背景 */
  --bg-tertiary: #1f1f1f;     /* 表格交替行、hover 状态 */

  /* 文字层次 */
  --text-primary: #f5f5f5;    /* 主要文字 - 柔和白 */
  --text-secondary: #a3a3a3;  /* 次要文字/说明 */
  --text-muted: #666666;      /* 辅助信息 */

  /* 强调色 */
  --accent-primary: #3b82f6;  /* 蓝色 - 链接、重点 */
  --accent-success: #22c55e;  /* 绿色 - 正面/是 */
  --accent-warning: #f59e0b;  /* 橙色 - 警示 */
  --accent-danger: #ef4444;   /* 红色 - 负面/否/风险 */
}
```

### 字体规范

| 用途 | 字号 | 字重 |
|------|------|------|
| Part 标题 | 72px | Bold |
| 章节标题 | 48px | Semibold |
| 页面标题 | 36px | Semibold |
| 正文内容 | 24px | Regular |
| 代码/表格 | 20px | Mono |
| 辅助说明 | 18px | Regular |

### 字体选择

- 中文：系统默认（苹方/微软雅黑）或 Noto Sans SC
- 英文/数字：Inter
- 代码：JetBrains Mono 或 Fira Code

---

## AI 辅助内容提取

### 提取策略

| 内容类型 | 提取策略 | 输出形式 |
|----------|----------|----------|
| 高密度：对比表格 | 识别文档中的对比内容，结构化为表格 | `ComparisonSlide` |
| 高密度：步骤流程 | 提取操作步骤、流程说明 | `StepsSlide` |
| 高密度：案例 | 提取案例要点、关键数据 | `ContentSlide` + bullets |
| 高密度：概念清单 | 提取定义、特点列表 | `ContentSlide` + bullets |
| 低密度：观点 | 提取核心观点作为金句 | `QuoteSlide` |
| 通用：章节开头 | 提取学习目标 | `SectionSlide` |
| 通用：章节结尾 | 提取要点总结 | `SummarySlide` |

### 图片占位符自动识别

| 场景 | 自动生成占位符描述 |
|------|-------------------|
| 提到「如图所示」「见下图」 | 提取上下文生成描述 |
| 实操步骤中的界面操作 | 「截图：XXX 操作界面」 |
| 提到具体产品/工具 | 「截图：XXX 产品界面」 |
| 数据图表引用 | 「图表：XXX 数据可视化」 |

### 预估幻灯片数量

- 短章节（如导论）：5-8 页
- 中等章节：10-15 页
- 长章节（如案例分析）：15-20 页
- 每个 Part 预计总页数：40-80 页

---

## 工作流程

### Phase 1: 框架搭建

- 初始化 Vite + React + shadcn 项目
- 搭建核心组件（Slide、SlideNav 等）
- 实现翻页、全屏、键盘控制
- 完成暗色主题样式

### Phase 2: 内容组件开发

- 实现各类型 Slide 组件（Title、Content、Comparison 等）
- 集成 Mermaid 图表渲染
- 集成代码高亮
- 实现图片占位符组件

### Phase 3: 内容提取与生成

- AI 逐个分析 12 个 Part 的 Markdown 文件
- 生成 part00.ts ~ part11.ts 数据文件
- 标记所有需要人工补充的图片占位符

### Phase 4: 人工完善

- 审核生成的 PPT 内容
- 补充所需图片/截图
- 调整细节、试讲验收

---

## 交付物清单

| 交付物 | 说明 |
|--------|------|
| 可运行的 slides 项目 | `npm run dev` 启动本地预览 |
| 12 个 Part 数据文件 | `part00.ts` ~ `part11.ts` |
| 图片占位符清单 | 便于定位需要补充哪些图 |
| 使用说明 | 如何启动、如何修改内容 |

---

## 后续人工补充图片流程

1. 生成 PPT 数据后，搜索所有 `image-placeholder`
2. 按描述制作/截取对应图片
3. 将图片放入 `slides/src/assets/` 目录
4. 把 `image-placeholder` 改为 `image` 并填入路径
