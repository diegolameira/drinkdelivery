import React from 'react';

import Link from '@/components/Link';
import { Address } from '@/containers/Address';

import { Wrapper, Title } from './style';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place: null
    };
  }
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
          onUpdate={this.onUpdate}
        />
        <Link
          disabled={!this.state.place}
          title={'Ver produtos'}
          to="/products"
        />
      </Wrapper>
    );
  }
}
