import { styled, theme } from 'theme';

import { ReactComponent as CrossIcon } from 'img/cross.svg';
import { PopupContainerProps } from './PopupProps.interfaces';

import { TitleH2 } from 'components/common/Titles.style';
import { DescrBlock } from 'components/common/DescrBlock.style';
import { DescrLink } from 'components/common/DescrLink.style';

export const PopupBg = styled.div<PopupContainerProps>`
  display: ${({ popupVisible }) => (popupVisible ? 'block' : 'none')};
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${theme.colors.black + 'e6'};
  z-index: 1;
`;

export const PopupContainer = styled.div`
  position: relative;
  max-width: 800px;
  width: 40vw;
  height: 450px;
  margin: 15vh auto 0 auto;
  padding: 40px;
  border-radius: 6px;
  background-color: ${theme.colors.black};
  overflow-y: scroll;
  border: 3px solid ${theme.colors.orange};

  svg {
    fill: ${theme.colors.orange};

    &:hover {
      fill: ${theme.colors.darkOrange};
    }
  }
`;

export const PopupIcon = styled(CrossIcon)`
  padding: 5px;
  float: right;
  width: 30px;

  &:hover {
    cursor: pointer;
  }
`;

export const PopupContent = styled.div``;

export const PopupTitle = styled(TitleH2)`
  color: ${theme.colors.darkOrange};
`;

export const PopupDescr = styled(DescrBlock)`
  color: ${theme.colors.white};
  font-size: 20px;
`;

export const PopupDescrLink = styled(DescrLink)`
  color: ${theme.colors.white};
  font-size: 20px;

  &:hover {
    color: ${theme.colors.orange};
  }
`;
