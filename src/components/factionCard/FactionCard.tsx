import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getSolarSystemName, getCorporationName } from 'store/actions';
import {
  getSolarSystemNameSelector,
  getCorporationNameSelector,
} from 'store/selectors';
import { FactionCardProps } from './FactionCard.interfaces';
import { getFactionArr } from 'utils/commonUtils';

import {
  FactionContainer,
  FactionName,
  FactionDescrContainer,
  FactionDescrText,
  FactionDescrTitle,
  CorporationName,
} from './FactionCard.style';

export const FactionCard: FC<FactionCardProps> = ({
  name,
  descr,
  solarSystemId,
  corporationId,
}) => {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const solarSystemName = useSelector(getSolarSystemNameSelector);
  const corporationName = useSelector(getCorporationNameSelector);
  const arr = getFactionArr(descr, solarSystemName);

  const handleClick = () => {
    setVisible(!visible);
    dispatch(getSolarSystemName(solarSystemId));
    dispatch(getCorporationName(corporationId));
  };

  return (
    <FactionContainer onClick={handleClick}>
      <FactionName>{name}</FactionName>
      <FactionDescrContainer visible={visible}>
        {arr.map((i: { title: string; text?: string }) => (
          <>
            <FactionDescrTitle>{i.title}</FactionDescrTitle>
            <FactionDescrText>{i.text}</FactionDescrText>
          </>
        ))}
        <CorporationName>{corporationName}</CorporationName>
      </FactionDescrContainer>
    </FactionContainer>
  );
};
