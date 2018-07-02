import styledTS from 'styled-components-ts';

export class Theme implements ThemeInterface {
  background = '#fff';
  foreground = '#000';
  primary = '#FCD635';
  danger = '#DB0000';
}

export const styl = Component => styledTS<stylInterface>(Component);
