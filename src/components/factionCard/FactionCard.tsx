import React, { FC, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getSolarSystemName, getCorporationData } from 'store/actions';
import {
  getSolarSystemNameSelector,
  getCorporationDataSelector,
} from 'store/selectors';
import { FactionCardProps } from './FactionCard.interfaces';
import { getFactionDataArr } from 'utils/commonUtils';
import { useOnClickOutside } from 'utils/customHook';

import {
  FactionContainer,
  FactionName,
  FactionDescrContainer,
  FactionDescrTitle,
  CorporationName,
} from './FactionCard.style';
import { DescrBlock } from '../common/DescrBlock.style';

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
  const corporationData = useSelector(getCorporationDataSelector);
  const factionArr = getFactionDataArr(descr, solarSystemName);
  useOnClickOutside(node, () => setVisible(false));

  const handleClick = () => {
    setVisible(true);
    dispatch(getSolarSystemName(solarSystemId));
    dispatch(getCorporationData(corporationId));
  };

  return (
    <FactionContainer onClick={handleClick} ref={node}>
      <FactionName>{name}</FactionName>
      <FactionDescrContainer visible={visible}>
        {factionArr.map((i: { title: string; text?: string }) => (
          <>
            <FactionDescrTitle>{i.title}</FactionDescrTitle>
            <DescrBlock>{i.text}</DescrBlock>
          </>
        ))}
        <CorporationName onClick={popupHandleClick}>
          {corporationData.name}
        </CorporationName>
      </FactionDescrContainer>
    </FactionContainer>
  );
};
