import React from 'react';
import { NativeRouter, Route } from 'react-router-native';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components/native';

import { Theme, styl } from '@/configs/theme';
import { ApolloWrapper } from '@/configs/graphql';
import Header from '@/components/Header';
import Home from '@/pages/Home';
import Products from '@/pages/Products';

export default () => (
  <ApolloWrapper>
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
  </ApolloWrapper>
);

const Container = styl(styled.View)`
  flex: 1;
  background: ${({ theme }) => theme.background};rr
`;

const Main = styl(styled.View)`
  flex: 1;
`;
