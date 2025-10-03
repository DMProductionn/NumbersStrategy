'use client';

import { useState, useEffect, useCallback } from 'react';

export const useMaskedCode = (str: string, end = 8) => {
  const [masked, setMasked] = useState('');

  const maskCode = useCallback(
    (left: number) => (str.length <= left + end ? str : str.slice(0, left) + '...' + str.slice(-end)),
    [str, end]
  );

  useEffect(() => {
    const updateMask = () => {
      const width = window.innerWidth;
      const left = width <= 640 ? 4 : 8; 
      setMasked(maskCode(left));
    };

    updateMask(); 
    window.addEventListener('resize', updateMask);

    return () => window.removeEventListener('resize', updateMask);
  }, [maskCode]);

  return masked;
};
