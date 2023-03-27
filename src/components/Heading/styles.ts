import styled from 'styled-components'

interface HeadingContainerProps {
  colorDark?: boolean
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl' | '6xl' | '7xl' | '8xl'
  uppercase?: boolean
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

export const HeadingContainer = styled.h2<HeadingContainerProps>`
  color: ${(props) =>
    props.colorDark ? props.theme.colors.gray : props.theme.colors.headline};

  font-size: ${(props) => sizeMap[props.size || 'md']};
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};
`
