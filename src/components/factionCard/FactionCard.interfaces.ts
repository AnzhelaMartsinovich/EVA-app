export interface FactionCardProps {
  name: string;
  descr: string;
  solarSystemId: number;
  corporationId: number;
  popupHandleClick: () => void;
}

export interface FactionDescrProps {
  visible: boolean;
}
