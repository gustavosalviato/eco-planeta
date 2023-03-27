import styled, { keyframes } from 'styled-components'

const rotate = () => keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`
export const LoadingContainer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 10;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.bg};

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;

    border: 0.5rem solid transparent;
    border-radius: 50%;
  }

  &:before {
    width: 6rem;
    height: 6rem;
    border-left: 0.5rem solid ${(props) => props.theme.colors.tertiary};
    border-top: 0.5rem solid ${(props) => props.theme.colors.tertiary};
    animation: ${rotate} 1s linear infinite;
  }

  &:after {
    width: 2rem;
    height: 2rem;
    border-left: 0.5rem solid ${(props) => props.theme.colors.tertiary};
    border-top: 0.5rem solid ${(props) => props.theme.colors.tertiary};
    animation: ${rotate} 800ms linear reverse infinite;
  }
`
