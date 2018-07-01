import React from 'react';
import color from 'color';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

import { styl } from '@/Theme';
import Counter from '@/components/Counter';
import Price from '@/components/Price';

interface Props {
  id: string;
  title: string;
  imageUrl: string;
  price: number;
}

export default ({
  id,
  title,
  imageUrl = 'http://via.placeholder.com/200x200',
  price = 0.0
}: Props) => (
  <Wrapper>
    <Header>{title}</Header>
    <PictureWrapper>
      <FastImage
        style={{ width: 200, height: 200 }}
        source={{
          uri: imageUrl,
          priority: FastImage.priority.normal
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </PictureWrapper>
    <Footer>
      <PriceWrapper>
        <Price value={price} />
      </PriceWrapper>
      <Mutation mutation={UPDATE_CART}>
        {(updateItemInCart, { data }) => {
          return (
            <Counter
              onUpdateCount={count =>
                updateItemInCart({
                  variables: { id, title, count, imageUrl, price }
                })
              }
            />
          );
        }}
      </Mutation>
    </Footer>
  </Wrapper>
);

const UPDATE_CART = gql`
  mutation UPDATE_CART(
    $id: String!
    $count: Int!
    $title: String
    $imageUrl: String
    $price: Int
  ) {
    updateItemInCart(
      id: $id
      title: $title
      count: $count
      imageUrl: $imageUrl
      price: $price
    ) @client
  }
`;

const Wrapper = styl(styled.View)`
  align-items: center;
  width: 100%;
  padding: 10px;
  border-radius: 11px;
  border: 2px solid ${({ theme }) =>
    color(theme.foreground)
      .alpha(0.2)
      .toString()};
`;

const PictureWrapper = styl(styled.View)`
  padding: 5px 0;
`;

const Header = styl(styled.Text)`
  font-size: 28px;
  line-height: 28px;
  font-weight: 400;
  text-align: center;
  margin: 10px 0;
  color: ${({ theme }) => theme.foreground};
`;

const Footer = styl(styled.View)`
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

const PriceWrapper = styl(styled.Text)`
  flex-grow: 2;
  text-align: center;
  padding-right: 10px;
`;
