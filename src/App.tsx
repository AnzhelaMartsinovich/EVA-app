import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { MainPage } from 'pages/mainPage/MainPage';
import { SearchPage } from 'pages/searchPage/SearchPage';
import { NotFoundPage } from 'pages/notFoundPage/NotFoundPage';
import { Header } from 'components/common/header/Header';

import { GlobalStyle, AppStyled } from 'App.style';

export const App: FC = () => (
  <>
    <GlobalStyle />
    <Router>
      <AppStyled>
        <Header />
        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='/search' exact component={SearchPage} />
          <Route path='*' component={NotFoundPage} />
        </Switch>
      </AppStyled>
    </Router>
  </>
);
