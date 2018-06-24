import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

import { styl } from '@configs/theme';
import Header from '@components/Header';
import Input from '@components/Input';
import Button from '@components/Button';

export default () => (
  <View>
    <Header />
    <Wrapper>
      <Title>Monstro, {'\n'}vamos beber?</Title>
      <Input
        label={'Endereço de entrega'}
        placeholder={'Ex. Av Paulista 228'}
      />
      <Button title={'Ver produtos'} onPress={onSubmit} />
    </Wrapper>
  </View>
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
