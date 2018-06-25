import React, { FormEvent } from 'react';
import color from 'color';
import styled from 'styled-components/native';

import { styl } from '@/configs/theme';

export interface InputInterface {
  label?: string;
  placeholder?: string;
  onChangeText?: ((event: FormEvent<HTMLElement>) => void) | undefined;
  align?: string;
  value?: string;
}

export default ({
  label,
  placeholder,
  onChangeText,
  align
}: InputInterface) => (
  <Wrapper>
    <Label>{label ? label.toUpperCase() : null}</Label>
    <Input
      textAlign={align}
      underlineColorAndroid="transparent"
      placeholder={placeholder}
      onChangeText={onChangeText}
    />
  </Wrapper>
);

const Wrapper = styl(styled.View)`
  padding: 10px 0;
`;

const Label = styl(styled.Text)`
  color: ${({ theme }) => theme.foreground || '#000'};
  font-size: 15px;
  font-weight: 300;
  line-height: 15px;
  opacity: .5;
  height: ${props => (props.children ? 'auto' : '0')};
  margin: ${props => (props.children ? '0 0 10px 0' : '0')};
`;

const Input = styl(styled.TextInput)`
  color: ${({ theme }) => theme.foreground || '#000'};
  border-radius: 5px;
  border: 1px solid ${({ theme }) =>
    color(theme.foreground || '#000')
      .alpha(0.2)
      .toString()};
  padding: 18px 20px;
  font-size: 20px;
`;
