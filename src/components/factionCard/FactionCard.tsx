import React, { FC, useState } from 'react';

import { FactionCardProps } from './FactionCard.interfaces';

import {
  FactionContainer,
  FactionName,
  FactionDescrContainer,
  FactionDescrText,
  FactionDescrTitle,
} from './FactionCard.style';

export const FactionCard: FC<FactionCardProps> = ({ name, descr }) => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => setVisible(!visible);

  return (
    <FactionContainer onClick={handleClick}>
      <FactionName>{name}</FactionName>
      <FactionDescrContainer visible={visible}>
        <FactionDescrTitle>Description</FactionDescrTitle>
        <FactionDescrText>{descr}</FactionDescrText>
      </FactionDescrContainer>
    </FactionContainer>
  );
};
