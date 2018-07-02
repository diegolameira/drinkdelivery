import styled from 'styled-components/native';

import { styl } from '@/shared/Theme';

export const Wrapper = styl(styled.View)`
  padding: 30px;
`;

export const Title = styl(styled.Text)`
  color: ${({ theme }) => theme.foreground};
  font-size: 40px;
  font-weight: 800;
  line-height: 40px;
  padding: 10px 0;
  margin: 0 0;
`;
