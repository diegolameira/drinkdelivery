import React from 'react';
import { ListView } from 'react-native';
import { Query } from 'react-apollo';

import { pocCategorySearch } from '@/Apollo/tags/api';
import Card from '@/components/Card';

import { Wrapper, Text } from './style';

interface Props {}

interface CardProps {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
}

const variables = {
  search: '',
  categoryId: 0
};

export default ({
  match: {
    params: { id }
  }
}: Props) => (
  <Query query={pocCategorySearch} variables={{ ...variables, id }}>
    {({ loading, error, data }) => {
      if (loading) return <Text>{'Guenta aí...'}</Text>;
      if (error) return <Text>{`Ih! Deu ruim! ${error.message}`}</Text>;
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
    const {
      title,
      description,
      imageUrl,
      productVariantId,
      price
    } = products.productVariants[0];
    return {
      id: productVariantId,
      title,
      description,
      imageUrl,
      price
    };
  });
};

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

const renderItem = (props: CardProps) => (
  <Wrapper>
    <Card {...props} />
  </Wrapper>
);
