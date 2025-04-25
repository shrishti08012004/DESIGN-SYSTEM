import React from 'react';

type CaptionProps = {
  children: React.ReactNode;
  className?: string;
};

export const Caption: React.FC<CaptionProps> = ({ children, className = '' }) => {
  return <span className={`text-xs text-gray-500 ${className}`}>{children}</span>;
};
