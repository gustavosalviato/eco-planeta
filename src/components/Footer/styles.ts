import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.colors.bg};
  border-top: 1px solid ${(props) => props.theme.colors.bg};
`

export const FooterContent = styled.div`
  & > p {
    color: ${(props) => props.theme.colors.headline};
  }
  background-color: ${(props) => props.theme.colors.bg};
  max-width: 112rem;
  margin: 0 auto;
  padding: 0 3.2rem;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`
