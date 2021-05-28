import { styled, theme } from 'theme';

export const DescrBlock = styled.div`
  font-size: 18px;
  color: ${theme.colors.darkBlue};
  display: -webkit-box;
  -webkit-line-clamp: 9;
  -webkit-box-orient: vertical;
  overflow-y: hidden;
`;
