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
  width: 93%;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  background-color: ${theme.colors.lightBlue};
  left: -4px;
  border-radius: 4px;
`;

export const FactionDescrText = styled.div`
  font-size: 18px;
  color: ${theme.colors.white};
`;

export const FactionDescrTitle = styled(TitleH3)`
  color: ${theme.colors.darkBlue};
`;
