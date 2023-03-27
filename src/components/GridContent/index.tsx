import {
  SectionBackground,
  SectionContainer,
} from '../../styles/layouts/styles'
import { Heading } from '../Heading'
import { Text } from '../Text'
import { GridContentContainer, TextContainer } from './styles'

interface GridContentProps {
  title: string
  text: string
}

export function GridContent({ text, title }: GridContentProps) {
  return (
    <SectionBackground background="light" id="consumo-de-agua-e-energia">
      <SectionContainer>
        <GridContentContainer>
          <Heading colorDark size="6xl">
            {title}
          </Heading>
          <TextContainer>
            <Text children={text} leading="relaxed" />
          </TextContainer>
        </GridContentContainer>
      </SectionContainer>
    </SectionBackground>
  )
}
