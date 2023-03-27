import { TextContainer } from './styles'

interface TextProps {
  children: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '6xl' | '7xl' | '8xl'
  leading?: 'tight' | 'normal' | 'relaxed'
}

export function Text({ children, size = 'lg', leading = 'normal' }: TextProps) {
  return (
    <TextContainer
      size={size}
      leading={leading}
      dangerouslySetInnerHTML={{ __html: children }}
    />
  )
}
