import { theme, styled } from 'theme';
import { Link } from 'react-router-dom';

export const NotFound = styled.div`
  h1 {
    margin-bottom: 80px;
    color: ${theme.colors.darkOrange};
  }
`;

export const NotFoundImage = styled.img`
  display: block;
  max-width: 70%;
  margin: 0 auto 100px auto;
  border-radius: 15px;
`;

export const NotFoundLink = styled(Link)`
  position: absolute;
  bottom: 25%;
  left: 50%;
  padding: 10px;
  background-color: transparent;
  outline: none;
  font-size: 28px;
  border: 3px solid ${theme.colors.white};
  border-radius: 10px;
  text-decoration: none;
  color: ${theme.colors.white};
  background-color: ${theme.colors.blue};

  &:hover {
    cursor: pointer;
    color: ${theme.colors.orange};
  }

  &::after {
    content: '';
    position: absolute;
    left: -57px;
    top: 15px;
    border: 7px solid transparent;
    border-right: 50px solid ${theme.colors.white};
  }
`;

export const NotFoundImageWrap = styled.div`
  position: relative;
  min-height: 510px;
`;
