import { styled, theme } from 'theme';

import { FactionDescrProps } from './FactionCard.interfaces';

import { TitleH2, TitleH3 } from 'components/common/Titles.style';

export const FactionContainer = styled.div`
  position: relative;
  min-width: 250px;
  flex: 1;
  gap: 25px;
  margin: 20px;
  padding: 15px;
  border: 1px solid ${theme.colors.darkBlue};
  border-radius: 3px;

  &:hover {
    cursor: pointer;
    color: ${theme.colors.blue};
  }
`;

export const FactionName = styled(TitleH2)`
  text-align: center;
`;

export const FactionDescrContainer = styled.div<FactionDescrProps>`
  padding: 15px;
  position: absolute;
  z-index: 1;
  width: 100%;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  background-color: ${theme.colors.darkOrange};
  border: 1px solid black;
  left: -14px;
  top: 115%;
  border-radius: 4px;

  &::after {
    content: '';
    position: absolute;
    left: 45px;
    top: -20px;
    border: 20px solid transparent;
    border-top: 20px solid ${theme.colors.blue};
  }
`;

export const FactionDescrTitle = styled(TitleH3)`
  color: ${theme.colors.blue};
`;
