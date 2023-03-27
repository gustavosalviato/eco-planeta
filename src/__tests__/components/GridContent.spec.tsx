import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { GridContent } from '../../components/GridContent'
import { defaultTheme } from '../../styles/default'

const mock = {
  text: '<p>Energias renováveis são fontes de energia limpa e sustentável que são capazes de regenerar-se naturalmente ao longo do tempo. Ao contrário dos combustíveis fósseis, que são finitos e não se regeneram, as energias renováveis têm a capacidade de produzir energia sem prejudicar o meio ambiente ou esgotar os recursos naturais.</p>',
  title: 'Redução do consumo de água e energia',
}

describe('GridContent', () => {
  it('should render Grid Content correctly', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <GridContent {...mock} />
      </ThemeProvider>,
    )
    expect(
      screen.getByText(/redução do consumo de água e energia/i),
    ).toBeInTheDocument()
  })
})
