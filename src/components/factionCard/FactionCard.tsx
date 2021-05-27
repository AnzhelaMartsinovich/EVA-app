import React, { FC } from 'react';

import { FactionCardProps } from './FactionCard.interfaces';

import { FactionContainer, FactionName } from './FactionCard.style';

export const FactionCard: FC<FactionCardProps> = ({ name }) => (
  <FactionContainer>
    <FactionName>{name}</FactionName>
  </FactionContainer>
);
