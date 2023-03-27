import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { Heading } from '../../components/Heading'
import { defaultTheme } from '../../styles/default'

describe('Heading', () => {
  it('should render heading with default values', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Heading>Texto</Heading>
      </ThemeProvider>,
    )

    const heading = screen.getByRole('heading', { name: /texto/i })

    expect(heading).toHaveStyle({
      color: defaultTheme.colors.headline,
      'text-transform': 'none',
      'font-size': defaultTheme.sizes.md,
    })
  })

  it('should render the heading correctly', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Heading>Texto</Heading>
      </ThemeProvider>,
    )

    expect(screen.getByRole('heading', { name: /texto/i })).toBeInTheDocument()
  })

  it('should render the heading with the colorDark', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Heading colorDark>Texto</Heading>
      </ThemeProvider>,
    )

    expect(screen.getByRole('heading', { name: /texto/i })).toHaveStyle({
      color: defaultTheme.colors.gray,
    })
  })

  it('should render the heading with the uppercase letters', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Heading uppercase>Texto</Heading>
      </ThemeProvider>,
    )

    expect(screen.getByRole('heading', { name: /texto/i })).toHaveStyle({
      'text-transform': 'uppercase',
    })
  })

  it('should render the heading with the custom sizes', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Heading size="lg">Texto</Heading>
      </ThemeProvider>,
    )

    expect(screen.getByRole('heading', { name: /texto/i })).toHaveStyle({
      'font-size': '1.8rem',
    })
  })
})
