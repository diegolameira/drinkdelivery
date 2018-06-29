import gql from 'graphql-tag';

export const allCategoriesSearch = gql`
  query allCategoriesSearch {
    allCategory {
      title
      id
    }
  }
`;
