import '@testing-library/jest-dom'
import { ThemeProvider } from 'styled-components'
import { GoTop } from '../../components/GoTop'
import { defaultTheme } from '../../styles/default'
import { screen, render } from '@testing-library/react'
describe('GotTop Button', () => {
  it('should render the go top button', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <GoTop />
      </ThemeProvider>,
    )

    expect(screen.getByLabelText(/go to the top of page/i)).toBeInTheDocument()
  })
})
