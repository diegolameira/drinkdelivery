import React, { FormEvent } from 'react';
import color from 'color';
import styled from 'styled-components/native';

import { styl } from '@configs/theme';

interface Props {
  label?: string;
  placeholder?: string;
  onChange?: ((event: FormEvent<HTMLElement>) => void) | undefined;
}

export default ({ label, placeholder, onChange }: Props) => (
  <Wrapper>
    <Label>{label ? label.toUpperCase() : null}</Label>
    <Input
      underlineColorAndroid="transparent"
      placeholder={placeholder}
      onChange={onChange}
    />
  </Wrapper>
);

const Wrapper = styl(styled.View)`
  padding: 10px 0;
`;

const Label = styl(styled.Text)`
  color: ${({ theme }) => theme.foreground};
  font-size: 15px;
  font-weight: 300;
  line-height: 15px;
  opacity: .5;
  height: ${props => (props.children ? 'auto' : '0')};
  margin: ${props => (props.children ? '0 0 10px 0' : '0')};
`;

const Input = styl(styled.TextInput)`
  color: ${({ theme }) => theme.foreground};
  border-radius: 5px;
  border: 1px solid ${({ theme }) =>
    color(theme.foreground)
      .alpha(0.2)
      .toString()};
  padding: 15px;
  font-size: 16px;
`;
