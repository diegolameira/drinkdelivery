import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import resolvers from './resolvers';

const GRAPHQL_API = process.env['GRAPHQL'] + '';

interface Props {
  children: any;
}

const defaults = {
  currentCity: {
    __typename: 'CurrentCity',
    name: 'Rio de Janeiro',
    lat: -22,
    lng: -43
  },
  cart: []
};

export const client = new ApolloClient({
  uri: GRAPHQL_API,
  clientState: {
    defaults,
    resolvers
  }
});

export const ApolloWrapper = ({ children }: Props) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);
