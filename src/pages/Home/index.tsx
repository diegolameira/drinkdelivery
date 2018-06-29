import React from 'react';

import Link from '@/components/Link';
import { Address } from '@/containers/Address';

import { Wrapper, Title } from './style';

export default class HomePage extends React.Component {
  onUpdate = (place: any) => {
    this.setState({
      place
    });
  };
  render() {
    return (
      <Wrapper>
        <Title>Monstro, {'\n'}vamos beber?</Title>
        <Address
          label={'Endereço de entrega'}
          placeholder={'Ex. Av Paulista 228'}
        />
        <Link title={'Ver produtos'} to="/products" />
      </Wrapper>
    );
  }
}
