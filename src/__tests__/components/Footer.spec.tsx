import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { Footer } from '../../components/Footer'
import { defaultTheme } from '../../styles/default'

describe('Footer', () => {
  it('should render Footer correctly', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Footer />
      </ThemeProvider>,
    )

    expect(
      screen.getByText('Feito com 🖤 Gustavo Salviato'),
    ).toBeInTheDocument()
  })
})
