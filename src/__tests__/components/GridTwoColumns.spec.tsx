import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { GridTwoColumns } from '../../components/GridTwoColumns'
import { defaultTheme } from '../../styles/default'

const props = {
  imgUrl: 'https://media.graphassets.com/0B7s0WnSkCUpVSkoSC8L',
  text: '<p>Energias renováveis são fontes de energia limpa e sustentável que são capazes de regenerar-se naturalmente ao longo do tempo. Ao contrário dos combustíveis fósseis, que são finitos e não se regeneram, as energias renováveis têm a capacidade de produzir energia sem prejudicar o meio ambiente ou esgotar os recursos naturais.</p>',
  title: 'Energias renováveis',
}

describe('GridTwoColumns', () => {
  it('should render grid two columns correctly', async () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <GridTwoColumns {...props} />
      </ThemeProvider>,
    )
    expect(screen.getByText('Energias renováveis')).toBeInTheDocument()
    expect(screen.getByTestId('img-container')).toBeInTheDocument()
  })
})
