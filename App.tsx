import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Theme } from '@configs/theme';
import Home from '@pages/Home';

export default () => (
  <ThemeProvider theme={new Theme()}>
    <Home />
  </ThemeProvider>
);
