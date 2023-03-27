import { GoTopContainer } from './styles'
import { CaretUp } from 'phosphor-react'

export function GoTop() {
  function handleScrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <GoTopContainer onClick={handleScrollTop}>
      <CaretUp aria-label="Go to the top of page" size={24} />
    </GoTopContainer>
  )
}
