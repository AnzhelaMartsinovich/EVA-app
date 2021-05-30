import React, { FC } from 'react';

import { PopupContainerProps } from '../PopupProps.interfaces';

import {
  PopupContainer,
  PopupIcon,
  PopupContent,
  PopupContentItem,
  PopupTitle,
  PopupDescr,
  Popup,
} from './PopupContainer.style';

export const PopupContainerComponent: FC<PopupContainerProps> = ({
  arr,
  popupHandleClick,
  item,
  nextPosition,
  children,
}) => {
  return (
    <Popup nextPosition={nextPosition}>
      <PopupContainer className={item}>
        <PopupIcon onClick={popupHandleClick} />
        <PopupContent>
          {arr.map(
            ({
              title,
              text,
              id,
            }: {
              title: string;
              text?: string | number;
              id: number;
            }) => (
              <PopupContentItem key={id}>
                <PopupTitle>{title}</PopupTitle>
                <PopupDescr>{text}</PopupDescr>
              </PopupContentItem>
            )
          )}
          {children}
        </PopupContent>
      </PopupContainer>
    </Popup>
  );
};
