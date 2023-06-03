import { useEffect } from 'react';

function useClickOutside(menuRef: any, setIsOpen: any) {
  useEffect(() => {
    const handleClickOutside = (event: { target: any }) => {
      if (menuRef?.current && !menuRef?.current?.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuRef, setIsOpen]);
}

export default useClickOutside;
