import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PopupProps } from './PopupProps.interfaces';
import {
  getCorporationDataSelector,
  getRaceSelector,
  getSeoDataSelector,
} from 'store/selectors';
import { getCorporationDataArr, getSeoDataArr } from 'utils/commonUtils';
import { getRace, getSeoData } from 'store/actions';
import { PopupContainerComponent } from './popupContainer/PopupContainer';

import { PopupBg, PopupDescrLink, PopupNext } from './Popup.styles';

export const Popup: FC<PopupProps> = ({ popupVisible, popupHandleClick }) => {
  const dispatch = useDispatch();
  const { name, member_count, description, ceo_id } = useSelector(
    getCorporationDataSelector
  );
  const seoData = useSelector(getSeoDataSelector);
  const rase = useSelector(getRaceSelector);
  const corporationArr = getCorporationDataArr(name, member_count, description);
  const idRaceName = rase.findIndex(
    ({ race_id }: { race_id: number }) => race_id === seoData.race_id
  );
  const seoArr = getSeoDataArr(
    seoData?.name,
    seoData?.birthday,
    rase[idRaceName]?.name
  );
  useEffect(() => {
    dispatch(getSeoData(ceo_id));
  }, [ceo_id]);

  useEffect(() => {
    dispatch(getRace());
  }, [seoData.race_id]);

  return (
    <PopupBg popupVisible={popupVisible}>
      <PopupContainerComponent
        arr={corporationArr}
        item='prev'
        popupHandleClick={popupHandleClick}
      >
        <PopupDescrLink title='More information...' href='#next'>
          {seoData?.name}
        </PopupDescrLink>
      </PopupContainerComponent>

      <PopupContainerComponent
        arr={seoArr}
        item='next'
        popupHandleClick={popupHandleClick}
      >
        <PopupNext href='#prev' />
      </PopupContainerComponent>
    </PopupBg>
  );
};
