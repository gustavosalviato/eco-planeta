import {
  SectionBackground,
  SectionContainer,
} from '../../styles/layouts/styles'
import { Heading } from '../Heading'
import { Text } from '../Text'
import { GridContainer, GridImageContainer, GridItem, Image } from './styles'

interface GridImageProps {
  title: string
  description: string
  images: Array<{
    src: string
    id: string
  }>
}
export function GridImage({ description, images, title }: GridImageProps) {
  return (
    <SectionBackground background="light" id="preservacao-da-biodiversidade">
      <SectionContainer>
        <GridImageContainer data-testid="grid-img-container">
          <Heading colorDark size="6xl" uppercase>
            {title}
          </Heading>
          <Text children={description} />

          <GridContainer>
            {images?.map((image) => {
              return (
                <GridItem key={image.src}>
                  <Image src={image.src} alt="" />
                </GridItem>
              )
            })}
          </GridContainer>
        </GridImageContainer>
      </SectionContainer>
    </SectionBackground>
  )
}
