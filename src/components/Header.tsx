import React from 'react';
import styled from 'styled-components/native';

import { styl } from '@/configs/theme';

export default () => (
  <Wrapper>
    <Text>
      <Highlight>Drink</Highlight>Delivery
    </Text>
  </Wrapper>
);

const Wrapper = styl(styled.View)`
  background: ${({ theme }) => theme.foreground};
  padding: 0 20px;
`;

const Text = styl(styled.Text)`
  color: ${({ theme }) => theme.background};
  font-size: 30px;
  line-height: 80px;
  text-align: center;
`;

const Highlight = styl(styled.Text)`
  color: ${({ theme }) => theme.primary};
`;
