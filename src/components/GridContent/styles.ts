import styled from 'styled-components'

export const GridContentContainer = styled.section`
  padding: 8rem 0;
  text-align: center;

  @media (max-width: 768px) {
    > h2 {
      font-size: 3.2rem;
    }
  }
`

export const TextContainer = styled.section`
  width: 100%;

  text-align: justify;

  strong {
    color: ${(props) => props.theme.colors.secondary};
  }

  a {
    color: ${(props) => props.theme.colors.tertiary};
    text-decoration: none;
    font-weight: 500;
    transition: all 300ms ease-in-out;

    &:hover {
      filter: brightness(0.8);
      text-decoration: underline;
    }
  }

  p {
    margin: 3.2rem 0;
  }

  h2,
  h3 {
    line-height: 2rem;
    text-align: center;
    color: ${(props) => props.theme.colors.headline};
  }

  ul,
  ol {
    margin: 2.4rem 0;
    padding-left: 2.4rem;
  }

  li {
    margin: 0.8rem 0;
  }
`
