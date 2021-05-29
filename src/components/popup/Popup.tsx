import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PopupProps } from './PopupProps.interfaces';
import {
  getCorporationDataSelector,
  getRaceSelector,
  getSeoDataSelector,
} from 'store/selectors';
import { getCorporationDataArr, getSeoDataArr } from 'utils/data';
import { getRace, getSeoData } from 'store/actions';

import {
  PopupBg,
  PopupDescrLink,
  PopupNext,
  PopupContainerPrev,
  PopupContainerNext,
} from './Popup.styles';

export const Popup: FC<PopupProps> = ({ popupVisible, popupHandleClick }) => {
  const dispatch = useDispatch();
  const { name, member_count, description, ceo_id } = useSelector(
    getCorporationDataSelector
  );
  const seoData = useSelector(getSeoDataSelector);
  const rase = useSelector(getRaceSelector);
  const corporationArr = getCorporationDataArr(name, member_count, description);
  const date = new Date(seoData?.birthday);
  const dateUS = date.toLocaleDateString('en-US');
  const idRaceName = rase.findIndex(
    ({ race_id }: { race_id: number }) => race_id === seoData.race_id
  );
  const seoArr = getSeoDataArr(seoData?.name, dateUS, rase[idRaceName]?.name);
  useEffect(() => {
    dispatch(getSeoData(ceo_id));
  }, [ceo_id]);

  useEffect(() => {
    dispatch(getRace());
  }, [seoData.race_id]);

  const [nextPosition, setNextPosition] = useState(false);
  return (
    <PopupBg popupVisible={popupVisible}>
      <PopupContainerPrev
        arr={corporationArr}
        item='prev'
        popupHandleClick={popupHandleClick}
        nextPosition={nextPosition}
      >
        <PopupDescrLink
          title='More information...'
          onClick={() => setNextPosition(true)}
        >
          {seoData?.name}
        </PopupDescrLink>
      </PopupContainerPrev>

      <PopupContainerNext
        arr={seoArr}
        item='next'
        popupHandleClick={popupHandleClick}
        nextPosition={nextPosition}
      >
        <PopupNext onClick={() => setNextPosition(false)} />
      </PopupContainerNext>
    </PopupBg>
  );
};
