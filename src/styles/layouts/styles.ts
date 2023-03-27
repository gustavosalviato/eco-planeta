import styled, { css } from 'styled-components'

export const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export const SectionContainer = styled.div`
  max-width: 112rem;
  margin: 0 auto;
  padding: 0 3.2rem;
`

interface SectionBackgroundProps {
  background?: 'light' | 'dark'
}

export const SectionBackground = styled.section<SectionBackgroundProps>`
  ${({ theme, background }) => css`
    width: 100%;
  `};

  ${(props) =>
    props.background === 'light'
      ? {
          color: props.theme.colors.bg,
          backgroundColor: props.theme.colors.headline,
        }
      : {
          color: props.theme.colors.headline,
          backgroundColor: props.theme.colors.bg,
        }};
`
