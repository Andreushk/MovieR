'use client';

import React, { useEffect, useRef } from 'react';

type HOCProps = {
  children: React.ReactNode;
  onOutsideClick: () => void;
};

const WithClickOutside: React.FC<HOCProps> = ({ children, onOutsideClick }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = (event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      onOutsideClick();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });

  return <div ref={containerRef}>{children}</div>;
};

export default React.memo(WithClickOutside);
