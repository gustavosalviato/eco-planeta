import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { GridText } from '../../components/GridText'
import { defaultTheme } from '../../styles/default'

const mock = {
  title: 'Test Title',
  description: 'Test Description',
  contents: [
    {
      description: 'Test Description1',
    },
    {
      description: 'Test Description2',
    },
    {
      description: 'Test Description3',
    },
    {
      description: 'Test Description4',
    },
  ],
}

describe('Grid Text', () => {
  it('should render Grid Text correctly', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <GridText {...mock} />
      </ThemeProvider>,
    )

    expect(screen.getByTestId('grid-container')).toBeInTheDocument()
    expect(screen.getAllByTestId('grid-item')).toHaveLength(
      mock.contents.length,
    )

    expect(screen.getByText(/test title/i)).toBeInTheDocument()
  })
})
