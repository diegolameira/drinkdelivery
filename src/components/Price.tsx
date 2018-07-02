import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

import { styl } from '@/shared/Theme';

interface Props {
  value: number;
  label?: string;
  hideCurrency?: boolean;
}

export default ({ value, label, hideCurrency }: Props) => {
  const price = parser(value);
  return (
    <Price>
      {label ? (
        <Label>
          {label}
          {'\n'}
        </Label>
      ) : null}
      {hideCurrency ? false : <Currency>{'R$'}</Currency>}
      {price[0]}
      <Cents>{`,${price[1] || '00'}`}</Cents>
    </Price>
  );
};

const parser = (price: number = 0.0) =>
  (parseFloat(price + 0.0).toFixed(2) + '').split('.');

const Price = styl(styled.Text)`
  font-size: 30px;
  font-weight: 500;
  text-align: right;
  color: ${({ theme }) => theme.foreground};
`;

const Label = styl(styled.Text)`
  font-size: 10px;
`;

const Currency = styl(styled.Text)`
  font-size: 20px;
`;

const Cents = styl(styled.Text)`
  font-size: 20px;
`;
