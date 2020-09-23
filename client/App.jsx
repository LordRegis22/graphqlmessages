import React from 'react';
import { ApolloProvider } from '@apollo/client';
import Posts from './Posts';
import apolloClient from './ApolloSetup';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Posts></Posts>
    </ApolloProvider>
  );
}

export default App;
