// lib/apolloClient.js

'use client';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://your-graphql-api.com/graphql', // Replace with your GraphQL API URI
  cache: new InMemoryCache(),
});

export default client;

