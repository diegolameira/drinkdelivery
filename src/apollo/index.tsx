import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const GRAPHQL_API = process.env['GRAPHQL'] + '';

interface Props {
  children: any;
}

export const client = new ApolloClient({
  uri: GRAPHQL_API
});

export const ApolloWrapper = ({ children }: Props) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);
