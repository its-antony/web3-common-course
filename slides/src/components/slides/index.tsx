import type { Slide } from '@/types/slide'
import { TitleSlide } from './TitleSlide'
import { SectionSlide } from './SectionSlide'
import { ContentSlide } from './ContentSlide'
import { ComparisonSlide } from './ComparisonSlide'
import { StepsSlide } from './StepsSlide'
import { DiagramSlide } from './DiagramSlide'
import { QuoteSlide } from './QuoteSlide'
import { SummarySlide } from './SummarySlide'

interface SlideRendererProps {
  slide: Slide
  partNumber?: number
}

export function SlideRenderer({ slide, partNumber }: SlideRendererProps) {
  switch (slide.type) {
    case 'title':
      return <TitleSlide slide={slide} partNumber={partNumber} />
    case 'section':
      return <SectionSlide slide={slide} />
    case 'content':
      return <ContentSlide slide={slide} />
    case 'comparison':
      return <ComparisonSlide slide={slide} />
    case 'steps':
      return <StepsSlide slide={slide} />
    case 'diagram':
      return <DiagramSlide slide={slide} />
    case 'quote':
      return <QuoteSlide slide={slide} />
    case 'summary':
      return <SummarySlide slide={slide} />
    default:
      return <ContentSlide slide={slide} />
  }
}

export {
  TitleSlide,
  SectionSlide,
  ContentSlide,
  ComparisonSlide,
  StepsSlide,
  DiagramSlide,
  QuoteSlide,
  SummarySlide,
}
