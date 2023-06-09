import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.STRAPI_PULIC_API_URL || 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
});

export default client;
