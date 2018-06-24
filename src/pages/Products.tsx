import React from 'react';
import { ListView } from 'react-native';
import styled from 'styled-components/native';

import { styl } from '@configs/theme';
import Card from '@components/Card';

interface Props {}

interface CardProps {
  id: number;
  title: string;
  picture: string;
  price: number;
}

export default (props: Props) => (
  <ListView dataSource={ds.cloneWithRows(Mock)} renderRow={renderItem} />
);

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

const renderItem = (props: CardProps) => (
  <Wrapper>
    <Card {...props} />
  </Wrapper>
);

const Wrapper = styl(styled.View)`
  margin: 10px 30px;
`;

const Mock: CardProps[] = [
  {
    id: 1,
    title: 'Brahma 600ml',
    picture:
      'https://s3-us-west-2.amazonaws.com/courier-images-prod/product/00009110_fd310686-8c79-468e-83b4-f6bb69f4ee78.jpg',
    price: 974.44
  },
  {
    id: 2,
    title: 'Brahma 600ml',
    picture:
      'https://s3-us-west-2.amazonaws.com/courier-images-prod/product/00009110_fd310686-8c79-468e-83b4-f6bb69f4ee78.jpg',
    price: 74.4
  }
];
