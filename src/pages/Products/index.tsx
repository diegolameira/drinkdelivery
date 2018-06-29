import React from 'react';
import { ListView } from 'react-native';
import { Query } from 'react-apollo';

import { pocCategorySearch } from '@/graphql';
import { PocCategorySearchInterface } from '@/graphql/pocCategorySearch';
import { Wrapper, Text } from './style';
import Card from '@/components/Card';

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
