import { styled, theme } from 'theme';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  margin: 0 auto 40px auto;
  width: 250px;
  padding: 10px;
  text-align: center;
  color: wheat;
  background-color: ${theme.colors.darkBlue};
  border-radius: 6px;
`;

export const HeaderLink = styled(Link)`
  padding: 10px 20px;
  font-size: 25px;
  color: ${theme.colors.darkOrange};
  text-decoration: none;

  &:hover {
    color: ${theme.colors.orange};
  }
`;
