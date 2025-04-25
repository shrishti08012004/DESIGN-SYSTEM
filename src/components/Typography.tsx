import React from 'react';

type TypographyProps = {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'p' | 'span';
};

export const Header = () => {
  return <header>This is the header</header>;
};

export const Typography: React.FC<TypographyProps> = ({ children, variant = 'p' }) => {
  const Tag = variant;
  return <Tag className="text-gray-800">{children}</Tag>;
};
