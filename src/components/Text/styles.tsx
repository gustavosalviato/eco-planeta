import styled from 'styled-components'

interface TextContainerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '6xl' | '7xl' | '8xl'
  leading?: 'tight' | 'normal' | 'relaxed'
}

const sizeMap = {
  sm: '1.4rem',
  md: '1.6rem',
  lg: '1.8rem',
  xl: '2.0rem',
  '2xl': '2.4rem',
  '4xl': '3.2rem',
  '6xl': '4.8rem',
  '7xl': '6.4rem',
  '8xl': '7.2rem',
}

const leadingMap = {
  tight: '2.0rem',
  normal: '2.4rem',
  relaxed: '2.6rem',
}

export const TextContainer = styled.p<TextContainerProps>`
  font-size: ${(props) => sizeMap[props.size || 'lg']};
  color: inherit;
  line-height: ${(props) => leadingMap[props.leading || 'normal']};
`
