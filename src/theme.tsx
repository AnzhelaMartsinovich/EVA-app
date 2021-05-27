import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const theme = {
  colors: {
    white: '#ffffff',
    black: '#232323',
    darkBlue: '#020024',
    blue: '#090979',
    lightBlue: '#0090ff',
  },
};

export type Theme = typeof theme | any;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
