export interface PopupProps {
  popupVisible: boolean;
  popupHandleClick: () => void;
}

export interface PopupBgProps {
  popupVisible: boolean;
}

export interface PopupContainerProps {
  arr: { title: string; text?: string | number; id: number }[];
  popupHandleClick: () => void;
  item: string;
  nextPosition?: boolean;
}

export interface PopupStyleProps {
  nextPosition?: boolean;
}
