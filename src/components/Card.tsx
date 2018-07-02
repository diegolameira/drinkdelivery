import React from 'react';
import color from 'color';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

import { styl } from '@/shared/Theme';
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
        style={{ width: 150, height: 150 }}
        source={{
          uri: imageUrl,
          priority: FastImage.priority.normal
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </PictureWrapper>
    <Footer>
      <PriceWrapper>
        <Price hideCurrency value={price} />
      </PriceWrapper>
      <Mutation mutation={UPDATE_CART}>
        {(addOrUpdate, { data }) => {
          return (
            <Counter
              onUpdateCount={count =>
                addOrUpdate({
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
    addOrUpdate(
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
  border: 0 solid ${({ theme }) =>
    color(theme.foreground)
      .alpha(0.05)
      .toString()};
  border-bottom-width: 1px;
`;

const PictureWrapper = styl(styled.View)`
  padding: 5px 0;
`;

const Header = styl(styled.Text)`
  font-size: 20px;
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
