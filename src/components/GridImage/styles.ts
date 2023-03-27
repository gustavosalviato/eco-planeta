import styled from 'styled-components'

export const GridImageContainer = styled.section`
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

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 4.8rem;
  margin-top: 2.4rem;
  counter-reset: grid-counter;
`

export const GridItem = styled.div`
  overflow: hidden;
`

export const Image = styled.img`
  width: 328px;
  height: 328px;

  transition: all 300ms ease-in-out;

  &:hover {
    transform: scale(1.2) rotate(6deg);
  }
`
