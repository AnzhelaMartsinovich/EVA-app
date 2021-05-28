import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PopupProps } from './PopupProps.interfaces';
import {
  getCorporationDataSelector,
  getSeoDataSelector,
} from 'store/selectors';
import { getPopupDataArr } from 'utils/commonUtils';
import { getSeoData } from 'store/actions';

import {
  PopupBg,
  PopupContainer,
  PopupIcon,
  PopupContent,
  PopupTitle,
  PopupDescr,
  PopupDescrLink,
} from './Popup.styles';

export const Popup: FC<PopupProps> = ({ popupVisible, popupHandleClick }) => {
  const dispatch = useDispatch();
  const { name, member_count, description, ceo_id } = useSelector(
    getCorporationDataSelector
  );
  const seoData = useSelector(getSeoDataSelector);
  const popupArr = getPopupDataArr(name, member_count, description);
  useEffect(() => {
    dispatch(getSeoData(ceo_id));
  }, [ceo_id]);

  return (
    <PopupBg popupVisible={popupVisible}>
      <PopupContainer>
        <PopupIcon onClick={popupHandleClick} />
        <PopupContent>
          {popupArr.map((i: { title: string; text?: string | number }) => (
            <>
              <PopupTitle>{i.title}</PopupTitle>
              <PopupDescr>{i.text}</PopupDescr>
            </>
          ))}
          <PopupDescrLink>{seoData?.name}</PopupDescrLink>
        </PopupContent>
      </PopupContainer>
    </PopupBg>
  );
};
