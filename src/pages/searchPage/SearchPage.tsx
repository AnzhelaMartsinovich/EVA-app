import React, { FC } from 'react';

import { Dropdown } from 'components/dropdown/Dropdown';

import {
  SearchPageContainer,
  SearchContent,
  Input,
  SearchBtn,
} from './SearchPage.style';

export const SearchPage: FC = () => (
  <SearchPageContainer>
    <SearchContent>
      <Dropdown />
      <Input name='search-input' placeholder='Type here' />
      <SearchBtn type='submit'>Search</SearchBtn>
    </SearchContent>
  </SearchPageContainer>
);
