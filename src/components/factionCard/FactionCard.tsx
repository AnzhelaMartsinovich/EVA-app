import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getSolarSystemName } from 'store/actions';
import { getSolarSystemNameSelector } from 'store/selectors';
import { FactionCardProps } from './FactionCard.interfaces';

import {
  FactionContainer,
  FactionName,
  FactionDescrContainer,
  FactionDescrText,
  FactionDescrTitle,
} from './FactionCard.style';

export const FactionCard: FC<FactionCardProps> = ({ name, descr, id }) => {
  const dispatch = useDispatch();
  const solarSystemName = useSelector(getSolarSystemNameSelector);
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
    dispatch(getSolarSystemName(id));
  };

  return (
    <FactionContainer onClick={handleClick}>
      <FactionName>{name}</FactionName>
      <FactionDescrContainer visible={visible}>
        <FactionDescrTitle>Description</FactionDescrTitle>
        <FactionDescrText>{descr}</FactionDescrText>
        <FactionDescrTitle>Solar system name</FactionDescrTitle>
        <FactionDescrText>{solarSystemName}</FactionDescrText>
      </FactionDescrContainer>
    </FactionContainer>
  );
};
