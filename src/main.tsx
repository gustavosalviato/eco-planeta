import ReactDOM from 'react-dom/client'
import { App } from './App'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/default'
import { ApolloProvider } from '@apollo/client'
import { client } from './services/apollo'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={defaultTheme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </ApolloProvider>,
)
