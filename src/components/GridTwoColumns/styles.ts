import styled from 'styled-components'

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4.8rem;

  margin: 8rem 0;
  padding: 8rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const TextContainer = styled.div`
  max-width: 56rem;
  > h2 {
    text-align: center;
    margin-bottom: 3.2rem;
  }

  > p {
    text-align: justify;
  }

  @media (max-width: 768px) {
    > h2 {
      font-size: 3.2rem;
    }
  }
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > img {
    width: 100%;
  }

  @media (max-width: 768px) {
    > img {
      width: 30rem;
      height: 30rem;
    }
  }
`
