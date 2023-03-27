import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  body{
    background-color: ${(props) => props.theme.colors.bg};
    color: ${(props) => props.theme.colors.headline};
    -webkit-font-smoothing: antialiased;
  }

  html{
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body, input, textarea, button{
    font-size: 1.6rem;
    font-weight: 400;
    font-family: 'Montserrat', sans-serif;
  }

  button{
    cursor:  pointer;
  }

`
