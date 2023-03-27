import '@testing-library/jest-dom'
import { screen, render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { Menu } from '../../components/Menu'
import { defaultTheme } from '../../styles/default'
const links = [
  {
    link: '/1',
    children: 'intro',
    newTab: false,
  },
  {
    link: '/2',
    children: 'grid-one',
    newTab: false,
  },
  {
    link: '/3',
    children: 'grid-two',
    newTab: false,
  },
  {
    link: '/4',
    children: 'gallery',
    newTab: false,
  },
  {
    link: '/5',
    children: 'contact',
    newTab: false,
  },
]
describe('Menu', () => {
  it('should render Logo and Menu Nav', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Menu links={links} />;
      </ThemeProvider>,
    )

    expect(screen.getByLabelText(/nav menu/i)).toBeInTheDocument()
  })

  it('should not render links', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <Menu />;
      </ThemeProvider>,
    )

    expect(
      screen.queryByLabelText(/nav menu/i)?.firstChild,
    ).not.toBeInTheDocument()
  })
})
