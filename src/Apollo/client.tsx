import ApolloClient from 'apollo-boost';

import resolvers from './resolvers';

const GRAPHQL_API = process.env['GRAPHQL'] + '';

const defaults = {
  cart: []
};

export const client = new ApolloClient({
  uri: GRAPHQL_API,
  clientState: {
    defaults,
    resolvers
  }
});
