import styled from 'styled-components'

export const GridTextContainer = styled.section`
  padding: 8rem 0;
  > h2 {
    text-align: justify;
  }

  > p {
    margin-top: 1.6rem;
    text-align: justify;
  }

  @media (max-width: 768px) {
    > h2 {
      font-size: 3.2rem;
    }
  }
`

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 4.8rem;
  margin-top: 2.4rem;
  counter-reset: grid-counter;
`

export const GridItem = styled.article`
  > h2 {
    margin-bottom: 1.6rem;
  }
`
