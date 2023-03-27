import { ReactNode } from 'react'
import { Link } from '../Link'
import { NavLinkContainer } from './styles'

interface ILinks {
  link: string
  children: ReactNode
  newTab?: boolean
}

interface NavLinkProps {
  links?: ILinks[]
}

export function NavLink({ links = [] }: NavLinkProps) {
  return (
    <NavLinkContainer aria-label="nav menu">
      {links.map((link) => (
        <Link key={link.link} newTab={link.newTab} link={link.link}>
          {link.children}
        </Link>
      ))}
    </NavLinkContainer>
  )
}
