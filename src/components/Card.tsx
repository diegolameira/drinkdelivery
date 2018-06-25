import React from 'react';
import color from 'color';
import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

import { styl } from '@/configs/theme';
import Counter from '@/components/Counter';
import Price from '@/components/Price';

interface Props {
  title: string;
  imageUrl: string;
  price: number;
}

export default ({
  title,
  imageUrl = 'http://via.placeholder.com/200x200',
  price = 0.0
}: Props) => (
  <Wrapper>
    <Header>{title}</Header>
    <PictureWrapper>
      <FastImage
        style={{ width: 200, height: 200 }}
        source={{
          uri: imageUrl,
          priority: FastImage.priority.normal
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
    </PictureWrapper>
    <Footer>
      <PriceWrapper>
        <Price value={price} />
      </PriceWrapper>
      <Counter />
    </Footer>
  </Wrapper>
);

const Wrapper = styl(styled.View)`
  align-items: center;
  width: 100%;
  padding: 10px;
  border-radius: 11px;
  border: 2px solid ${({ theme }) =>
    color(theme.foreground)
      .alpha(0.2)
      .toString()};
`;

const PictureWrapper = styl(styled.View)`
  padding: 5px 0;
`;

const Header = styl(styled.Text)`
  font-size: 28px;
  line-height: 28px;
  font-weight: 400;
  text-align: center;
  margin: 10px 0;
  color: ${({ theme }) => theme.foreground};
`;

const Footer = styl(styled.View)`
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

const PriceWrapper = styl(styled.Text)`
  flex-grow: 2;
  text-align: center;
  padding-right: 10px;
`;
