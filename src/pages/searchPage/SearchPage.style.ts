import { styled, theme } from 'theme';

import { MainContainer } from 'utils/commonStyles.style';

export const SearchPageContainer = styled.div`
  ${MainContainer};
`;

export const SearchContent = styled.form`
  width: max-content;
  margin: 0 auto;
`;

export const Input = styled.input`
  width: 300px;
  margin: 0 30px;
  padding: 5px;
  height: 20px;
  font-size: 18px;
  border-radius: 6px;
  border: none;
  outline: none;
`;

export const SearchBtn = styled.button`
  padding: 5px 10px;
  font-size: 18px;
  background-color: transparent;
  border-radius: 6px;
  width: 140px;

  &:hover {
    cursor: pointer;
    color: ${theme.colors.lightBlue};
  }
`;
