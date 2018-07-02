import gql from 'graphql-tag';

export const getCartItems = gql`
  query getCartItems {
    cart {
      id
      imageUrl
      title
      price
      count
    }
  }
`;
