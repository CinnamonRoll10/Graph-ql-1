// components/ApolloClientProvider.tsx

'use client'; // Ensure this is a client-side component

import { ApolloProvider } from '@apollo/client';
import  client  from '../lib/apolloClient';
console.log(client);
export default function ApolloClientProvider({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
