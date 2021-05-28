import React, { useEffect, RefObject } from 'react';

export const useOnClickOutside = (
  ref: RefObject<HTMLDivElement>,
  close: () => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (
        ref.current &&
        event.target &&
        ref.current.contains(event.target as Node)
      ) {
        return;
      }
      close();
    };

    document.addEventListener('mousedown', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, close]);
};
