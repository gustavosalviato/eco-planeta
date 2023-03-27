import styled from 'styled-components'

export const LinkContainer = styled.a`
  display: block;
  text-decoration: none;
  color: ${(props) => props.theme.colors.bg};
  font-size: ${(props) => props.theme.sizes.lg};
  padding: 1.6rem;
  transition: all 300ms ease-in-out;
  position: relative;
  font-weight: 500;

  &::after {
    content: '';
    position: absolute;
    bottom: 0.8rem;
    left: 0;
    height: 2.5px;
    left: 50%;
    width: 0%;
    background-color: ${(props) => props.theme.colors.tertiary};
    transition: all 300ms ease-in-out;
    border-radius: 4px 4px 0 0;
  }

  &:hover::after {
    left: 25%;
    width: 50%;
  }

  &:hover {
    filter: brightness(0.8);
  }
`
