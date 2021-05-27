import { styled, theme } from 'theme';

import { TitleH2 } from 'components/common/Titles.style';

export const FactionContainer = styled.div`
  min-width: 250px;
  flex: 1;
  gap: 25px;
  margin: 20px;
  padding: 5px;
  border: 1px solid ${theme.colors.darkBlue};
  border-radius: 3px;
`;

export const FactionName = styled(TitleH2)`
  text-align: center;
`;
