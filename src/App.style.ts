import { createGlobalStyle } from 'styled-components';

import { styled, theme } from 'theme';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(90deg, ${theme.colors.darkBlue} 34%, ${theme.colors.blue} 67%, ${theme.colors.lightBlue} 100%);
  }
`;

export const AppStyled = styled.div`
  margin: 50px auto;
  padding: 20px;
  max-width: 1400px;
  background-color: ${theme.colors.white + 'bf'};
  border-radius: 6px;
`;
