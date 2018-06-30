import React, { FormEvent } from 'react';
import color from 'color';
import styled from 'styled-components/native';

import { styl } from '@/Theme';

export interface InputInterface {
  label?: string;
  placeholder?: string;
  align?: string;
  value?: string;
  type?: string;
  selectTextOnFocus?: boolean;
  onBlur?: ((event: FormEvent<HTMLElement>) => void) | undefined;
  onChangeText?: ((value: string) => void) | undefined;
}

export default ({
  label,
  placeholder,
  onChangeText,
  onBlur,
  align,
  value,
  type = 'default',
  selectTextOnFocus
}: InputInterface) => (
  <Wrapper>
    <Label>{label ? label.toUpperCase() : null}</Label>
    <Input
      keyboardType={type}
      defaultValue={value}
      textAlign={align}
      underlineColorAndroid="transparent"
      placeholder={placeholder}
      onBlur={onBlur}
      onChangeText={onChangeText}
      selectTextOnFocus={selectTextOnFocus}
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
  padding: 18px 10px;
  font-size: 20px;
  min-width: 70px;
`;
