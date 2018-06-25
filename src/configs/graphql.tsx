import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';

interface Props {
  children: any;
}

export const ApolloWrapper = ({ children }: Props) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export const client = new ApolloClient({
  uri:
    'https://803votn6w7.execute-api.us-west-2.amazonaws.com/dev/public/graphql'
});

export const allCategoriesSearch = gql`
  query allCategoriesSearch {
    allCategory {
      title
      id
    }
  }
`;

export const pocCategorySearch = gql`
  query pocCategorySearch($id: ID!, $search: String!, $categoryId: Int!) {
    poc(id: $id) {
      products(categoryId: $categoryId, search: $search) {
        productVariants {
          title
          description
          imageUrl
          price
        }
      }
    }
  }
`;

export interface ProductVariantsInterface {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
}

export interface ProductsInterface {
  productVariants: ProductVariantsInterface[];
}

export interface PocInterface {
  products: ProductsInterface[];
}

export interface PocCategorySearchInterface {
  poc: PocInterface;
}

export const pocSearchMethod = gql`
  query pocSearchMethod(
    $now: DateTime!
    $algorithm: String!
    $lat: String!
    $long: String!
  ) {
    pocSearch(now: $now, algorithm: $algorithm, lat: $lat, long: $long) {
      __typename
      id
      status
      tradingName
      officialName
      deliveryTypes {
        __typename
        pocDeliveryTypeId
        deliveryTypeId
        price
        title
        subtitle
        active
      }
      paymentMethods {
        __typename
        pocPaymentMethodId
        paymentMethodId
        active
        title
        subtitle
      }
      pocWorkDay {
        __typename
        weekDay
        active
        workingInterval {
          __typename
          openingTime
          closingTime
        }
      }
      address {
        __typename
        address1
        address2
        number
        city
        province
        zip
        coordinates
      }
      phone {
        __typename
        phoneNumber
      }
    }
  }
`;
