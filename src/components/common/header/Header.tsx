import React, { FC } from 'react';

import { HeaderContainer, HeaderLink } from './Header.style';

export const Header: FC = () => (
  <HeaderContainer>
    <HeaderLink to='/'>Factions</HeaderLink>
    <HeaderLink to='/search'>Search</HeaderLink>
  </HeaderContainer>
);
