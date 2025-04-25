
import * as React from 'react';

type ParagraphProps = {
  children: React.ReactNode;
  className?: string;
};

export const Paragraph: React.FC<ParagraphProps> = ({
  children,
  className = '',
}) => {
  return <p className={`text-base leading-relaxed ${className}`}>{children}</p>;
};
