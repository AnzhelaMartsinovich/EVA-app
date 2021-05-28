import { styled, theme } from 'theme';

import { PopupBgProps } from './PopupProps.interfaces';

import { DescrLink } from 'components/common/DescrLink.style';

export const PopupBg = styled.div<PopupBgProps>`
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

  .prev {
    z-index: 2;
    opacity: 1;
  }

  *:target ~ .prev {
    opacity: 0;
  }

  #prev:target ~ .prev {
    opacity: 1;
  }

  #next:target ~ .next {
    z-index: 3;
    opacity: 1;
  }
`;

export const PopupDescrLink = styled(DescrLink)`
  color: ${theme.colors.white};
  font-size: 20px;

  &:hover {
    color: ${theme.colors.orange};
  }
`;

export const PopupNext = styled.a`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%) rotate(135deg);
  border: solid ${theme.colors.orange};
  border-width: 0 3px 3px 0;
  padding: 12px;

  &:hover {
    border: solid ${theme.colors.darkOrange};
    border-width: 0 3px 3px 0;
  }
`;
