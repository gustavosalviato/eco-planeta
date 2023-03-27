import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { GridImage } from '../../components/GridImage'
import { defaultTheme } from '../../styles/default'

const images = [
  {
    id: 'ramdomid1',
    src: 'https://source.unsplash.com/random/800x800?=r1',
    alt: 'alt1',
  },
  {
    id: 'ramdomid2',
    src: 'https://source.unsplash.com/random/800x800?=r2',
    alt: 'alt2',
  },

  {
    id: 'ramdomid3',
    src: 'https://source.unsplash.com/random/800x800?=r3',
    alt: 'alt3',
  },

  {
    id: 'ramdomid4',
    src: 'https://source.unsplash.com/random/800x800?=r4',
    alt: 'alt4',
  },
]

describe('Grid Image', () => {
  it('should render Grid Image correctly', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <GridImage
          images={images}
          title="Lorem ipsum dolor sit amet."
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet pariatur aspernatur ut accusamus mollitia omnis error minus. Soluta quod exercitationem provident! Culpa iste enim quidem eius saepe itaque maiores incidunt."
        />
      </ThemeProvider>,
    )

    expect(screen.getByTestId('grid-img-container')).toBeInTheDocument()
  })
})
