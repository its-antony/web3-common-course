export type SlideType =
  | 'title'
  | 'section'
  | 'content'
  | 'comparison'
  | 'steps'
  | 'diagram'
  | 'quote'
  | 'summary'

export type ContentBlock =
  | { type: 'text'; value?: string; content?: string }
  | { type: 'bullets'; items: string[] }
  | { type: 'numbered'; items: string[] }
  | { type: 'code'; language: string; code: string }
  | { type: 'mermaid'; chart: string }
  | { type: 'table'; headers: string[]; rows: string[][] }
  | { type: 'image'; src: string; alt?: string }
  | { type: 'highlight'; value?: string; text?: string; content?: string; variant?: 'info' | 'warning' | 'tip' | 'error' }
  | { type: 'comparison'; leftTitle?: string; leftItems?: string[]; rightTitle?: string; rightItems?: string[] }
  | {
      type: 'image-placeholder'
      description: string
      suggestedSize?: 'small' | 'medium' | 'large' | 'full'
    }

export interface Step {
  title: string
  description: string
}

export interface Slide {
  id: string
  type: SlideType
  title?: string
  subtitle?: string
  content?: ContentBlock[]
  notes?: string
  // Additional properties for specific slide types
  quote?: string
  attribution?: string
  items?: string[]
  steps?: Step[]
  leftTitle?: string
  leftItems?: string[]
  rightTitle?: string
  rightItems?: string[]
}

export interface Presentation {
  id: string
  title: string
  partNumber: number
  slides: Slide[]
}
