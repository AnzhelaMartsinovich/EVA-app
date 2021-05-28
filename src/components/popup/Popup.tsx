import React, { FC } from 'react';

import { PopupProps } from './PopupProps.interfaces';

import { PopupBg, PopupContainer, PopupIcon } from './Popup.styles';

export const Popup: FC<PopupProps> = ({ popupVisible, popupHandleClick }) => (
  <PopupBg popupVisible={popupVisible}>
    <PopupContainer>
      <PopupIcon onClick={popupHandleClick} />
    </PopupContainer>
  </PopupBg>
);
