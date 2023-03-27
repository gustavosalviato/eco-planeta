import { Heading } from '../Heading'
import { GridContainer, GridItem, GridTextContainer } from './styles'
import { Text } from '../Text'
import {
  SectionBackground,
  SectionContainer,
} from '../../styles/layouts/styles'

interface GridTextProps {
  title: string
  description: string
  contents: {
    description: string
  }[]
}

export function GridText({ description, title, contents }: GridTextProps) {
  return (
    <SectionBackground background="dark" id="mudancas-climaticas">
      <SectionContainer>
        <GridTextContainer>
          <Heading size="6xl" uppercase>
            {title}
          </Heading>
          <Text children={description} />

          <GridContainer data-testid="grid-container">
            {contents?.map((content) => (
              <GridItem key={content.description} data-testid="grid-item">
                <Text children={content.description} />
              </GridItem>
            ))}
          </GridContainer>
        </GridTextContainer>
      </SectionContainer>
    </SectionBackground>
  )
}
