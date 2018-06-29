import React from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';

import { styl } from '@/Theme';

interface Props {
  title?: string;
  onPress?: () => void;
  outline: boolean;
  danger: boolean;
  children: any;
}

export default ({ title, onPress, children, outline, danger }: Props) => (
  <TouchableWrapper onPress={onPress}>
    <View outline={outline} danger={danger}>
      {children}
      <Text>{title ? title.toUpperCase() : null}</Text>
    </View>
  </TouchableWrapper>
);

const TouchableWrapper = styl(
  Platform.select({
    android: styled.TouchableNativeFeedback,
    ios: styled.TouchableOpacity
  })
)`
  border-radius: 6px;
`;

export const View = styl(styled.View)`
  ${props => getBackground(props)}
  border: 2px solid ${({ danger, theme }) =>
    danger ? theme.danger : theme.primary};
  border-radius: 6px;
  padding: 16px 20px;
  margin: 10px 0;
`;

export const Text = styl(styled.Text)`
  color: ${({ theme }) => theme.foreground};
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  height: ${props => (props.children ? 'auto' : '0')};
`;

const getBackground = ({ outline, danger, theme, disabled }) => {
  if (outline) return;
  if (disabled) return 'background: #ccc;';
  if (danger) return `background: ${theme.danger}`;
  return `background: ${theme.primary}`;
};
