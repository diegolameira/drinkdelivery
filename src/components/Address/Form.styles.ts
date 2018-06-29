import styled from 'styled-components/native';

import { styl } from '@/Theme';

export const Wrapper = styl(styled.View)`
  position: ${props => (props.focused ? 'absolute' : 'relative')};
  padding: ${props => (props.focused ? '30px' : '0')};
  top: 0;
  right: 0;
  left: 0;
  z-index: 9999;
  background: #fff;
`;
