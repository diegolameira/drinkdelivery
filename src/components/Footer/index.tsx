import React from 'react';
import FastImage from 'react-native-fast-image';
import { Dimensions, Text } from 'react-native';
import styled from 'styled-components/native';
import Carousel from 'react-native-snap-carousel';
import gql from 'graphql-tag';
import { compose, graphql, Query } from 'react-apollo';

import { styl } from '@/Theme';
import Button from '@/components/Button';
import Price from '@/components/Price';

const renderItem = ({ item: { imageUrl, count } }) => (
  <CarouselItem>
    <FastImage
      style={{ width: 56, height: 56 }}
      source={{
        uri: imageUrl,
        priority: FastImage.priority.normal
      }}
      resizeMode={FastImage.resizeMode.contain}
    />
    <Badge>{count}</Badge>
  </CarouselItem>
);

interface Props {
  name: string;
  cart: any;
}

export default (props: Props) => (
  <Query query={GET_CARTITEMS}>
    {({ data: { cart } }) => {
      const total =
        !cart || !cart.length
          ? 0
          : cart
              .map(({ price, count }) => price * count)
              .reduce((partial, current) => partial + current);

      return !cart || !cart.length ? (
        false
      ) : (
        <React.Fragment>
          <TotalWrapper>
            <CarouselWrapper>
              <Carousel
                data={cart}
                renderItem={renderItem}
                sliderWidth={Dimensions.get('window').width - 60}
                itemWidth={70}
                inactiveSlideScale={1}
                inactiveSlideOpacity={1}
                activeSlideAlignment={'start'}
              />
            </CarouselWrapper>
            <PriceWrapper>
              <Price value={total} label={'TOTAL'} />
            </PriceWrapper>
          </TotalWrapper>
          <ButtonWrapper>
            <Button title={'Fechar a conta'} />
          </ButtonWrapper>
        </React.Fragment>
      );
    }}
  </Query>
);

const GET_CARTITEMS = gql`
  {
    cart @client {
      title
      imageUrl
      price
      count
    }
  }
`;

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
  position: relative;
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

const BadgeWrapper = styl(styled.View)`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 6px;
  border-top-left-radius: 6px;
  background: ${props => props.theme.foreground};
`;

const BadgeText = styl(styled.Text)`
  font-size: 10px;
  color: ${props => props.theme.background};
`;

const Badge = ({ children }) => (
  <BadgeWrapper>
    <BadgeText>{children}</BadgeText>
  </BadgeWrapper>
);
