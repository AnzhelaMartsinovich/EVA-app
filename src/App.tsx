import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { MainPage } from 'pages/MainPage';

import { GlobalStyle, AppStyled } from 'App.style';

export const App: FC = () => (
  <>
    <GlobalStyle />
    <Router>
      <AppStyled>
        <Switch>
          <Route path='/' exact>
            <MainPage />
          </Route>
        </Switch>
      </AppStyled>
    </Router>
  </>
);
