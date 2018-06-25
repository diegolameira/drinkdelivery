import React from 'react';
import styled from 'styled-components/native';

import { styl } from '@/configs/theme';

interface Props {
  value: number;
}

export default ({ value }: Props) => {
  const price = parser(value);
  return (
    <Price>
      {price[0]}
      <Cents>{`,${price[1] || '00'}`}</Cents>
    </Price>
  );
};

const parser = (price: number) => (price + '').split('.');

const Price = styl(styled.Text)`
  font-size: 30px;
  font-weight: 500;
  color: ${({ theme }) => theme.foreground};
`;

const Cents = styl(styled.Text)`
  font-size: 20px;
`;
