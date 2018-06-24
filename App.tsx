import React from 'react';
import { View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import { ThemeProvider } from 'styled-components';

import { Theme } from '@configs/theme';
import Header from '@components/Header';
import Home from '@pages/Home';
import Products from '@pages/Products';

export default () => (
  <ThemeProvider theme={new Theme()}>
    <View>
      <Header />
      <NativeRouter>
        <View>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
        </View>
      </NativeRouter>
    </View>
  </ThemeProvider>
);
