import styled from 'styled-components'

interface MenuContainerProps {
  visible: boolean
}
export const MenuContainer = styled.header<MenuContainerProps>`
  background-color: ${(props) => props.theme.colors.white};
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
  position: fixed;
  z-index: 5;
  width: 100%;
  transition: all 300ms ease-in-out;

  @media (max-width: 768px) {
    height: 100vh;
    inset: 0;

    ${(props) =>
      props.visible
        ? {
            visibility: 'visible',
            opacity: '1',
          }
        : {
            visibility: 'hidden',
            opacity: '0',
          }};
  }
`

export const MenuContent = styled.header`
  max-width: 112rem;
  margin: 0 auto;
  padding: 0 3.2rem;
  height: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 7.2rem auto;
  }
`

interface CloseProps {
  visible: boolean
}

export const Close = styled.button<CloseProps>`
  border: 0;
  position: fixed;
  z-index: 6;
  width: 4rem;
  height: 4rem;
  border-radius: 6px;
  right: 1.6rem;
  top: 1.6rem;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${(props) =>
    props.visible && {
      backgroundColor: props.theme.colors.bg,
      color: props.theme.colors.headline,
    }};
`
