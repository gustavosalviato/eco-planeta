import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { LogoLink } from '../../components/LogoLink'
import { defaultTheme } from '../../styles/default'

describe('Logo Link', () => {
  it('should render LogoLink correctly', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <LogoLink link="/" text="Logo" />
      </ThemeProvider>,
    )

    expect(screen.getByRole('link', { name: /logo/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /logo/i })).toHaveAttribute(
      'href',
      '/',
    )
  })

  it('should render LogoLink with image', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <LogoLink link="/" text="Logo" srcImg="../../assets/images/logo.svg" />
      </ThemeProvider>,
    )

    const heading = screen.getByRole('heading')
    expect(heading.firstChild?.firstChild).toHaveAttribute(
      'src',
      '../../assets/images/logo.svg',
    )
  })
})
