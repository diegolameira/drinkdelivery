import React from 'react';
import { View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components/native';

import { Theme, styl } from '@configs/theme';
import Header from '@components/Header';
import Home from '@pages/Home';
import Products from '@pages/Products';

export default () => (
  <ThemeProvider theme={new Theme()}>
    <Container>
      <Header />
      <NativeRouter>
        <Main>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
        </Main>
      </NativeRouter>
    </Container>
  </ThemeProvider>
);

const Container = styl(styled.View)`
  flex: 1;
`;

const Main = styl(styled.View)`
  flex: 1;
`;
