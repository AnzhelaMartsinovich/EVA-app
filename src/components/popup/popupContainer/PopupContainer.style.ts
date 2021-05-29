import { styled, theme } from 'theme';

import { ReactComponent as CrossIcon } from 'img/cross.svg';
import { PopupStyleProps } from '../PopupProps.interfaces';

import { TitleH2 } from 'components/common/Titles.style';
import { DescrBlock } from 'components/common/DescrBlock.style';

export const Popup = styled.div<PopupStyleProps>`
  .next {
    opacity: 1;
    ${({ nextPosition }) => (nextPosition ? 'z-index: 3;' : 'z-index: 0;')};
  }
`;

export const PopupContainer = styled.div`
  position: absolute;
  max-width: 800px;
  width: 40vw;
  height: 450px;
  margin: 15vh auto 0 auto;
  padding: 40px 50px;
  border-radius: 6px;
  background-color: ${theme.colors.black};
  overflow-y: scroll;
  border: 3px solid ${theme.colors.orange};
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: all 0.5s ease-in-out;
  z-index: 2;
  opacity: 1;

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
