import { LogoLink } from '../LogoLink'
import { NavLink } from '../NavLink'

import { List, X } from 'phosphor-react'
import { ReactNode, useState } from 'react'
import { MenuContainer, MenuContent, Close } from './styles'

interface ILinks {
  link: string
  children: ReactNode
  newTab?: boolean
}

interface MenuProps {
  links?: ILinks[]
}

export function Menu({ links = [] }: MenuProps) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <>
      <Close onClick={() => setIsVisible(!isVisible)} visible={isVisible}>
        {isVisible ? <X size={24} /> : <List size={24} />}
      </Close>
      <MenuContainer visible={isVisible} onClick={() => setIsVisible(false)}>
        <MenuContent>
          <LogoLink text="EcoPlaneta" />
          <NavLink links={links} />
        </MenuContent>
      </MenuContainer>
    </>
  )
}
