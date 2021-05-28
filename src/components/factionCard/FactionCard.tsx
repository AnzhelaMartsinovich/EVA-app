import React, { FC, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getSolarSystemName, getCorporationName } from 'store/actions';
import {
  getSolarSystemNameSelector,
  getCorporationNameSelector,
} from 'store/selectors';
import { FactionCardProps } from './FactionCard.interfaces';
import { getFactionArr } from 'utils/commonUtils';
import { useOnClickOutside } from 'utils/customHook';

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
  popupHandleClick,
}) => {
  const dispatch = useDispatch();
  const node = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const solarSystemName = useSelector(getSolarSystemNameSelector);
  const corporationName = useSelector(getCorporationNameSelector);
  const factionArr = getFactionArr(descr, solarSystemName);
  useOnClickOutside(node, () => setVisible(false));

  const handleClick = () => {
    setVisible(true);
    dispatch(getSolarSystemName(solarSystemId));
    dispatch(getCorporationName(corporationId));
  };

  return (
    <FactionContainer onClick={handleClick} ref={node}>
      <FactionName>{name}</FactionName>
      <FactionDescrContainer visible={visible}>
        {factionArr.map((i: { title: string; text?: string }) => (
          <>
            <FactionDescrTitle>{i.title}</FactionDescrTitle>
            <FactionDescrText>{i.text}</FactionDescrText>
          </>
        ))}
        <CorporationName onClick={popupHandleClick}>
          {corporationName}
        </CorporationName>
      </FactionDescrContainer>
    </FactionContainer>
  );
};
