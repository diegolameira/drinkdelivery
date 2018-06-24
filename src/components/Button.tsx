import React from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components/native';

import { styl } from '@configs/theme';

interface Props {
  title: string;
  onPress: () => void;
}

export default ({ title, onPress }: Props) => (
  <TouchableWrapper onPress={onPress}>
    <View>
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

const View = styl(styled.View)`
  background: ${({ theme }) => theme.primary};
  border-radius: 6px;
  padding: 20px;
  margin: 10px 0;
`;

const Text = styl(styled.Text)`
  color: ${({ theme }) => theme.foreground};
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`;
