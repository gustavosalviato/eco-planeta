import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import fetch from 'cross-fetch'

export const client = new ApolloClient({
  link: new HttpLink({
    uri: import.meta.env.VITE_GRAPHCMS_SECRET_KEY,
    fetch,
  }),
  cache: new InMemoryCache(),
})
