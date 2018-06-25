import React from 'react';
import { ListView } from 'react-native';
import styled from 'styled-components/native';
import { Query } from 'react-apollo';

import {
  pocCategorySearch,
  PocCategorySearchInterface,
  ProductVariantsInterface
} from '@/configs/graphql';
import { styl } from '@/configs/theme';
import Card from '@/components/Card';

interface Props {}

interface CardProps {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
}

// TODO: variables throught route params
const variables = {
  id: '243',
  search: '',
  categoryId: 0
};

export default (props: Props) => (
  <Query query={pocCategorySearch} variables={variables}>
    {({ loading, error, data }) => {
      if (loading) return <Text>{'Loading...'}</Text>;
      if (error) return <Text>{`Error! ${error.message}`}</Text>;
      return (
        <ListView
          dataSource={ds.cloneWithRows(parser(data))}
          renderRow={renderItem}
        />
      );
    }}
  </Query>
);

const parser = (data: PocCategorySearchInterface) => {
  return data.poc.products.map(products => {
    return products.productVariants[0];
  });
};

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

const renderItem = (props: CardProps) => (
  <Wrapper>
    <Card {...props} />
  </Wrapper>
);

const Text = styl(styled.Text)`
  margin: 30px;
  text-align: center;
  font-size: 30px;
`;

const Wrapper = styl(styled.View)`
  margin: 10px 30px;
`;
