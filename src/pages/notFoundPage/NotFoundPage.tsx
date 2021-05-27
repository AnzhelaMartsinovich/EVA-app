import React, { FC } from 'react';

import {
  NotFound,
  NotFoundImage,
  NotFoundLink,
  NotFoundImageWrap,
} from './NotFoundPage.style';
import { TitleH1 } from 'components/common/Titles.style';

export const NotFoundPage: FC = () => (
  <NotFound>
    <TitleH1>Page not found</TitleH1>
    <NotFoundImageWrap>
      <NotFoundImage src='https://previews.123rf.com/images/skathi/skathi1601/skathi160100347/51420520-vector-404-error-page-template-for-website-open-space-with-astronaut-and-stars-.jpg' />
      <NotFoundLink to='/'>Go back to home</NotFoundLink>
    </NotFoundImageWrap>
  </NotFound>
);
