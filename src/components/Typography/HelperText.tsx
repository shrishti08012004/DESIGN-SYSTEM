import React from 'react';

type HelperTextProps = {
  children: React.ReactNode;
  className?: string;
};

export const HelperText: React.FC<HelperTextProps> = ({ children, className = '' }) => {
  return <p className={`text-sm text-gray-500 mt-1 ${className}`}>{children}</p>;
};
