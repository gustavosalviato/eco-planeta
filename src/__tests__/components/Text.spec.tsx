import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { Text } from '../../components/Text'
import { defaultTheme } from '../../styles/default'
describe('Text', () => {
  it('should render text correctly', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Text>Some content</Text>
      </ThemeProvider>,
    )

    expect(screen.getByText(/some content/i)).toBeInTheDocument()
  })

  it('should render text with default styles', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Text>Some content</Text>
      </ThemeProvider>,
    )

    const text = screen.getByText(/some content/i)

    expect(text).toHaveStyle({
      'font-size': '1.8rem',
    })
  })

  it('should render text with custom sizes', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Text size="4xl">Some content</Text>
      </ThemeProvider>,
    )

    const text = screen.getByText(/some content/i)

    expect(text).toHaveStyle({
      'font-size': '3.2rem',
    })
  })
})
