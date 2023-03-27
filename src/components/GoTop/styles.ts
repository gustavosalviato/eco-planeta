import styled from 'styled-components'

export const GoTopContainer = styled.a`
  position: fixed;
  width: 4.8rem;
  height: 4.8rem;
  border: 0;
  right: 1.6rem;
  bottom: 1.6rem;
  z-index: 6;
  background-color: ${(props) => props.theme.colors.tertiary};

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-size: 0;
  cursor: pointer;

  transition: all 300ms ease-in-out;

  &:hover {
    filter: brightness(0.8);
  }
`
