import React, { FC } from 'react';

import { PopupContainerProps } from '../PopupProps.interfaces';

import {
  PopupContainer,
  PopupIcon,
  PopupContent,
  PopupTitle,
  PopupDescr,
} from './PopupContainer.style';

export const PopupContainerComponent: FC<PopupContainerProps> = ({
  arr,
  popupHandleClick,
  item,
  children,
}) => {
  return (
    <>
      <span id={item} />
      <PopupContainer className={item}>
        <PopupIcon onClick={popupHandleClick} />
        <PopupContent>
          {arr.map(
            ({ title, text }: { title: string; text?: string | number }) => (
              <>
                <PopupTitle>{title}</PopupTitle>
                <PopupDescr>{text}</PopupDescr>
              </>
            )
          )}
          {children}
        </PopupContent>
      </PopupContainer>
    </>
  );
};
