import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { MainPage } from 'pages/mainPage/MainPage';

import { GlobalStyle, AppStyled } from 'App.style';
import { NotFoundPage } from 'pages/notFoundPage/NotFoundPage';

export const App: FC = () => (
  <>
    <GlobalStyle />
    <Router>
      <AppStyled>
        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='*' component={NotFoundPage} />
        </Switch>
      </AppStyled>
    </Router>
  </>
);
