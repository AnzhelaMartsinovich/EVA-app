import React, { FC, useState } from 'react';

import {
  DropdownContainer,
  DropdownText,
  DropdownContent,
  DropdownItem,
} from './Dropdown.style';

export const Dropdown: FC = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <DropdownContainer onClick={handleClick}>
      <DropdownText> Type: </DropdownText>
      <DropdownContent open={open}>
        <DropdownItem>Item 1</DropdownItem>
        <DropdownItem>Item 2</DropdownItem>
      </DropdownContent>
    </DropdownContainer>
  );
};
