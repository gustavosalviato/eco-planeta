import { ReactNode } from 'react'
import { LinkContainer } from './styles'

interface LinkProps {
  link: string
  children: ReactNode
  newTab?: boolean
}

export function Link({ children, link, newTab = false }: LinkProps) {
  const target = newTab ? '_blank' : '_self'
  return (
    <LinkContainer href={`#${link}`} target={target}>
      {children}
    </LinkContainer>
  )
}
