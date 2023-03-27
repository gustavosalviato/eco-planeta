import { ReactNode } from 'react'
import { HeadingContainer } from './styles'

interface HeadingProps {
  children: ReactNode
  colorDark?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '6xl' | '7xl' | '8xl'
  uppercase?: boolean
}

export function Heading({
  children,
  colorDark = false,
  size = 'md',
  uppercase = false,
}: HeadingProps) {
  return (
    <HeadingContainer colorDark={colorDark} size={size} uppercase={uppercase}>
      {children}
    </HeadingContainer>
  )
}
