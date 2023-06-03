import { useEffect, useRef } from 'react';

//I made this hook to disable the focus when we click somewhere else ~ ELM

const useClickOutside = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback]);

  return ref;
};

export default useClickOutside;
