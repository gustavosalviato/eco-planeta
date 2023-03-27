import { Heading } from '../Heading'
import { LogoLinkContainer } from './styles'

interface LogoLinkProps {
  srcImg?: string
  text: string
  link?: string
}

export function LogoLink({ link, text, srcImg = '' }: LogoLinkProps) {
  return (
    <Heading size="2xl" uppercase>
      <LogoLinkContainer href={link}>
        {!!srcImg && <img src={srcImg} alt={text} />}

        {!srcImg && text}
      </LogoLinkContainer>
    </Heading>
  )
}
