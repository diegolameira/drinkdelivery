import React from 'react';
import { ApolloConsumer } from 'react-apollo';
import { View } from 'react-native';

import Link from '@/components/Link';
import { Address } from '@/containers/Address';
import { pocSearchMethod } from '@/Apollo/tags/api';

import { Wrapper, Title } from './style';

interface HomeProps {}
interface HomeState {
  id?: string;
  isLoading?: boolean;
  notFound?: boolean;
}

export default class HomePage extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      id: '',
      isLoading: false,
      notFound: false
    };
  }
  setPOC = (id: string = '') => {
    this.setState({
      id,
      notFound: !id
    });
  };
  setLoading = (isLoading: boolean) => {
    this.setState({
      isLoading
    });
  };
  onClear = () => {
    this.setState({
      id: '',
      notFound: false
    });
  };
  render() {
    const { setPOC, setLoading, onClear, state } = this;
    const { id, isLoading, notFound } = state;
    const isDisabled = isLoading || !id;
    const linkLabel = isLoading
      ? 'Pera aí...'
      : id
        ? 'Bora comprar!'
        : notFound
          ? 'Tá tudo fechado, irmão!'
          : 'Bota teu endereço ai';
    return (
      <Wrapper>
        <Title>Monstro, {'\n'}vamos beber?</Title>
        <ApolloConsumer>
          {client => {
            const onUpdate = async ({ lat, lng }) => {
              onClear();
              setLoading(true);
              const {
                data: { pocSearch }
              } = await client.query({
                query: pocSearchMethod,
                variables: {
                  lat,
                  long: lng,
                  algorithm: 'NEAREST',
                  now: new Date().toISOString()
                }
              });
              const { id } = pocSearch[0] || {};
              setPOC(id);
              setLoading(false);
            };

            return (
              <View>
                <Address
                  label={'Endereço de entrega'}
                  placeholder={'Ex. Av Paulista 228'}
                  onUpdate={onUpdate}
                  onClear={onClear}
                />
                <Link
                  disabled={isDisabled}
                  title={linkLabel}
                  to={id ? `/products/${id}` : ''}
                />
              </View>
            );
          }}
        </ApolloConsumer>
      </Wrapper>
    );
  }
}
