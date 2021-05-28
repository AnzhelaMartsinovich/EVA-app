import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { PopupProps } from './PopupProps.interfaces';
import { getCorporationDataSelector } from 'store/selectors';
import { getPopupDataArr } from 'utils/commonUtils';

import {
  PopupBg,
  PopupContainer,
  PopupIcon,
  PopupContent,
  PopupTitle,
  PopupDescr,
} from './Popup.styles';

export const Popup: FC<PopupProps> = ({ popupVisible, popupHandleClick }) => {
  const { name, member_count, description } = useSelector(
    getCorporationDataSelector
  );
  const popupArr = getPopupDataArr(name, member_count, description);

  return (
    <PopupBg popupVisible={popupVisible}>
      <PopupContainer>
        <PopupIcon onClick={popupHandleClick} />
        <PopupContent>
          {popupArr.map((i: { title: string; text: string | number }) => (
            <>
              <PopupTitle>{i.title}</PopupTitle>
              <PopupDescr>{i.text}</PopupDescr>
            </>
          ))}
        </PopupContent>
      </PopupContainer>
    </PopupBg>
  );
};
