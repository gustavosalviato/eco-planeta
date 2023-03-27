import '@testing-library/jest-dom/'
import { screen, render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { NavLink } from '../../components/NavLink'
import { defaultTheme } from '../../styles/default'

const links = [
  {
    link: 'test1',
    children: 'teste1',
    newTab: false,
  },
  {
    link: 'test2',
    children: 'teste2',
    newTab: false,
  },
  {
    link: 'test3',
    children: 'teste3',
    newTab: false,
  },
  {
    link: 'test4',
    children: 'teste4',
    newTab: false,
  },
  {
    link: 'test5',
    children: 'teste5',
    newTab: false,
  },
]

describe('NavLink', () => {
  it('should render links correctly', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <NavLink links={links} />
      </ThemeProvider>,
    )

    expect(screen.getAllByRole('link', { name: /test/i })).toHaveLength(
      links.length,
    )
  })

  it('should not render links', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <NavLink />
      </ThemeProvider>,
    )

    expect(screen.queryAllByRole('link', { name: /test/i })).toHaveLength(0)
  })

  it('should have specified styles when is not mobile', () => {
    render(
      <ThemeProvider theme={defaultTheme}>
        <NavLink links={links} />
      </ThemeProvider>,
    )

    expect(
      screen.getByRole('link', { name: /teste1/i }).parentElement,
    ).toHaveStyle({
      'flex-direction': 'row',
      'flex-wrap': 'wrap',
    })
  })
})
