import React from 'react';
import { ApolloConsumer } from 'react-apollo';
import { View } from 'react-native';

import Link from '@/components/Link';
import { Address } from '@/containers/Address';

import { Wrapper, Title } from './style';
import { pocSearchMethod } from '@/graphql';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onUpdate = (id: any) => {
    this.setState({
      id
    });
  };

  render() {
    const { id, isLoading } = this.state;
    return (
      <Wrapper>
        <Title>Monstro, {'\n'}vamos beber?</Title>
        <ApolloConsumer>
          {client => (
            <View>
              <Address
                label={'Endereço de entrega'}
                placeholder={'Ex. Av Paulista 228'}
                onUpdate={async ({ lat, lng }) => {
                  this.setState({ isLoading: true });
                  const { data } = await client.query({
                    query: pocSearchMethod,
                    variables: {
                      lat,
                      long: lng,
                      algorithm: 'NEAREST',
                      now: new Date().toISOString()
                    }
                  });
                  const poc = data.pocSearch.filter(
                    poc => poc.status == 'AVAILABLE'
                  )[0];
                  this.onUpdate(poc ? poc.id : false);
                  this.setState({ isLoading: false });
                }}
              />
              <Link
                disabled={isLoading || !id}
                title={isLoading ? 'Carregando...' : 'Ver produtos'}
                to={id ? `/products/${id}` : ''}
              />
            </View>
          )}
        </ApolloConsumer>
      </Wrapper>
    );
  }
}
