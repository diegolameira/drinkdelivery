import React from 'react';
import { ApolloProvider } from 'react-apollo';

import { client } from './client';

export const ApolloWrapper = ({ children }: any) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);
