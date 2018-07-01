import gql from 'graphql-tag';

export const pocCategorySearch = gql`
  query pocCategorySearch($id: ID!, $search: String!, $categoryId: Int!) {
    poc(id: $id) {
      products(categoryId: $categoryId, search: $search) {
        productVariants {
          productVariantId
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
  productVariantId: string;
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
