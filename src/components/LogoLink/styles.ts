import styled from 'styled-components'

export const LogoLinkContainer = styled.a`
  color: ${(props) => props.theme.colors.bg};
  text-decoration: none;
  transition: all 300ms ease-in-out;
  align-items: center;
  font-weight: 800;

  &:hover {
    filter: brightness(0.8);
  }

  > img {
    height: 3rem;
    width: 6.4rem;
  }
`
