export interface PopupProps {
  popupVisible: boolean;
  popupHandleClick: () => void;
}

export interface PopupBgProps {
  popupVisible: boolean;
}

export interface PopupContainerProps {
  arr: { title: string; text?: string | number }[];
  popupHandleClick: () => void;
  item: string;
}
