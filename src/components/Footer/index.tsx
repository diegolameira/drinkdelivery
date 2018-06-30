import React from 'react';
import FastImage from 'react-native-fast-image';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Carousel from 'react-native-snap-carousel';

import { styl } from '@/Theme';
import Button from '@/components/Button';
import Price from '@/components/Price';

const renderItem = ({ item }) => (
  <CarouselItem>
    <FastImage
      style={{ width: 56, height: 56 }}
      source={{
        uri: item.url,
        priority: FastImage.priority.normal
      }}
      resizeMode={FastImage.resizeMode.contain}
    />
  </CarouselItem>
);

export default () => (
  <React.Fragment>
    <TotalWrapper>
      <CarouselWrapper>
        <Carousel
          data={[
            { url: 'http://via.placeholder.com/56x56' },
            { url: 'http://via.placeholder.com/56x56' },
            { url: 'http://via.placeholder.com/56x56' },
            { url: 'http://via.placeholder.com/56x56' },
            { url: 'http://via.placeholder.com/56x56' },
            { url: 'http://via.placeholder.com/56x56' },
            { url: 'http://via.placeholder.com/56x56' },
            { url: 'http://via.placeholder.com/56x56' },
            { url: 'http://via.placeholder.com/56x56' },
            { url: 'http://via.placeholder.com/56x56' },
            { url: 'http://via.placeholder.com/56x56' },
            { url: 'http://via.placeholder.com/56x56' },
            { url: 'http://via.placeholder.com/56x56' }
          ]}
          renderItem={renderItem}
          sliderWidth={Dimensions.get('window').width - 60}
          itemWidth={70}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
          activeSlideAlignment={'start'}
        />
      </CarouselWrapper>
      <PriceWrapper>
        <Price value={22.34} label={'TOTAL'} />
      </PriceWrapper>
    </TotalWrapper>
    <ButtonWrapper>
      <Button title={'Fechar a conta'} />
    </ButtonWrapper>
  </React.Fragment>
);

const TotalWrapper = styl(styled.View)`
  background: ${props => props.theme.primary}
  padding: 20px 30px;
  flex-direction: row;
`;

const ButtonWrapper = styl(styled.View)`
  background: ${props => props.theme.foreground}
  padding: 10px 30px;
`;

const CarouselWrapper = styl(styled.View)`
  flex: 1;
`;

const CarouselItem = styl(styled.View)`
  width: 60px;
  height: 60px;
  margin: 0 5px;
  border: 2px solid #000;
  border-radius: 4px;
`;

const PriceWrapper = styl(styled.View)`
  padding: 0 0 0 20px;
  background: ${props => props.theme.primary};
`;
