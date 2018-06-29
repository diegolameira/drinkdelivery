import styledTS from 'styled-components-ts';

interface ThemeInterface {
  background: string;
  foreground: string;
  primary: string;
  danger: string;
}

export class Theme implements ThemeInterface {
  background = '#fff';
  foreground = '#000';
  primary = '#FCD635';
  danger = '#DB0000';
}

interface stylInterface {
  theme: ThemeInterface;
}

export const styl = Component => styledTS<stylInterface>(Component);
