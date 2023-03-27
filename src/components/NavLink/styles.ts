import styled from 'styled-components'

export const NavLinkContainer = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.6rem;
    margin: 3.2rem auto;
  }
`
