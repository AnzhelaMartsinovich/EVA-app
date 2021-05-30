import React, { FC } from 'react';

import { HeaderContainer, HeaderLink } from './Header.style';

export const Header: FC = () => (
  <HeaderContainer>
    <HeaderLink to='/'>Faction</HeaderLink>
    <HeaderLink to='/search'>Search</HeaderLink>
  </HeaderContainer>
);
