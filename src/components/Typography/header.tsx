
// import * as React from 'react'; 

// type HeadingProps = {
//   level?: 1 | 2 | 3 | 4 | 5 | 6;
//   children: React.ReactNode;
//   className?: string;
// };

// const headingStyles = {
//   1: 'text-4xl font-bold',
//   2: 'text-3xl font-semibold',
//   3: 'text-2xl font-semibold',
//   4: 'text-xl font-medium',
//   5: 'text-lg font-medium',
//   6: 'text-base font-medium',
// };

// export const Heading: React.FC<HeadingProps> = ({
//   level = 1,
//   children,
//   className = '',
// }) => {
//   const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;

//   return <Tag className={`${headingStyles[level]} ${className}`}>{children}</Tag>;
// };

// src/components/Header.tsx
import React from 'react';

type HeaderProps = {
  user?: { name: string };
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
};

export const Header: React.FC<HeaderProps> = ({ user, onLogin, onLogout, onCreateAccount }) => {
  return (
    <header>
      <h1>Hello {user ? user.name : 'Guest'}</h1>
      {user ? (
        <button onClick={onLogout}>Logout</button>
      ) : (
        <>
          <button onClick={onLogin}>Login</button>
          <button onClick={onCreateAccount}>Sign Up</button>
        </>
      )}
    </header>
  );
};


