
import * as React from 'react';

type LabelProps = {
  children: React.ReactNode;
  className?: string;
  htmlFor?: string;
};

export const Label: React.FC<LabelProps> = ({
  children,
  className = '',
  htmlFor,
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`text-sm font-medium text-gray-700 ${className}`}
    >
      {children}
    </label>
  );
};
