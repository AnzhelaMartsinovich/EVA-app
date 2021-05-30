import { styled, theme } from 'theme';
import { DropdownContentProps } from './Dropdowm.interface';

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownText = styled.div`
  position: relative;
  padding: 0 15px;
  display: inline-block;
  font-size: 23px;
  font-weight: 500;
  color: ${theme.colors.darkBlue};

  &:hover {
    cursor: pointer;
    color: ${theme.colors.blue};
  }
`;

export const DropdownContent = styled.div<DropdownContentProps>`
  position: absolute;
  display: ${({ open }) => (open ? 'block' : 'none')};
  z-index: 1;
  top: 45px;
  padding: 12px 16px;
  width: 100%;
  background-color: ${theme.colors.darkOrange};
  border-radius: 3px;
  font-size: 18px;
  font-weight: 100;
  color: ${theme.colors.black};
`;

export const DropdownItem = styled.p`
  &:hover {
    cursor: pointer;
    color: ${theme.colors.lightBlue};
  }
`;
