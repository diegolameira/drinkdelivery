import React from 'react';
import styled from 'styled-components/native';

import { styl } from '@configs/theme';
import Input from '@components/Input';
import Link from '@components/Link';

export default () => (
  <Wrapper>
    <Title>Monstro, {'\n'}vamos beber?</Title>
    <Input label={'Endereço de entrega'} placeholder={'Ex. Av Paulista 228'} />
    <Link title={'Ver produtos'} to="/products" />
  </Wrapper>
);

const onSubmit = () => {};

const Wrapper = styl(styled.View)`
  padding: 30px;
`;

const Title = styl(styled.Text)`
  color: ${({ theme }) => theme.foreground};
  font-size: 40px;
  font-weight: 800;
  line-height: 40px;
  padding: 10px 0;
  margin: 0 0;
`;
