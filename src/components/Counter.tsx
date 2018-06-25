import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { styl, Theme } from '@/configs/theme';
import Input from '@/components/Input';
import Button from '@/components/Button';

const colors = new Theme();

export default () => (
  <Wrapper>
    <Button outline danger>
      <Icon name="minus" size={30} color={colors.danger} />
    </Button>
    <Spacing>
      <Input align="center" />
    </Spacing>
    <Button>
      <Icon name="plus" size={30} color={colors.foreground} />
    </Button>
  </Wrapper>
);

const Wrapper = styl(styled.View)`
  flex-direction: row;
`;

const Spacing = styled.View`
  padding: 0 10px;
`;
