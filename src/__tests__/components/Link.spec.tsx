import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { Link } from '../../components/Link'
import { defaultTheme } from '../../styles/default'

describe('Text', () => {
  it('should render link correctly', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Link link="https://github/gustavosalviato">Link</Link>
      </ThemeProvider>,
    )

    expect(screen.getByRole('link', { name: /link/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /link/i })).toHaveAttribute(
      'href',
      '#https://github/gustavosalviato',
    )
    expect(screen.getByRole('link', { name: /link/i })).toHaveAttribute(
      'target',
      '_self',
    )
  })

  it('should open link in a new tab', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Link link="https://github/gustavosalviato" newTab>
          Link
        </Link>
      </ThemeProvider>,
    )

    expect(screen.getByRole('link', { name: /link/i })).toHaveAttribute(
      'target',
      '_blank',
    )
  })
})
