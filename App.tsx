import React from 'react';
import { NativeRouter, Route, BackButton } from 'react-router-native';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components/native';

import { Theme, styl } from '@/shared/Theme';
import { ApolloWrapper } from '@/Apollo';
import Header from '@/components/Header';
import Home from '@/pages/Home';
import Products from '@/pages/Products';
import Footer from '@/components/Footer';

export default () => (
  <ApolloWrapper>
    <ThemeProvider theme={new Theme()}>
      <Container>
        <Header />
        <NativeRouter>
          <Main>
            <BackButton />
            <Route exact path="/" component={Home} />
            <Route path="/products/:id" component={Products} />
          </Main>
        </NativeRouter>
        <Footer />
      </Container>
    </ThemeProvider>
  </ApolloWrapper>
);

const Container = styl(styled.View)`
  flex: 1;
  background: ${({ theme }) => theme.background};
`;

const Main = styl(styled.View)`
  flex: 1;
`;
