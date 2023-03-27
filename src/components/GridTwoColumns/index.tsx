import { Heading } from '../Heading'
import { Text } from '../Text'
import { GridContainer, ImageContainer, TextContainer } from './styles'
import {
  SectionBackground,
  SectionContainer,
} from '../../styles/layouts/styles'

interface GridTwoColumnsProps {
  text: string
  title: string
  imgUrl: string
}

export function GridTwoColumns({ imgUrl, text, title }: GridTwoColumnsProps) {
  return (
    <SectionBackground background="dark" id="energias-renovaveis">
      <SectionContainer>
        <GridContainer>
          <TextContainer>
            <Heading size="6xl" uppercase>
              {title}
            </Heading>

            <Text leading="relaxed" children={text} />
          </TextContainer>

          <ImageContainer data-testid="img-container">
            <img src={imgUrl} alt={title} />
          </ImageContainer>
        </GridContainer>
      </SectionContainer>
    </SectionBackground>
  )
}
