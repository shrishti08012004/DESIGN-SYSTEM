// // src/stories/Button.tsx
// import React from 'react';
// import classNames from 'classnames';

// type ButtonProps = {
//   label: string;
//   onClick?: () => void;
//   variant?: 'primary' | 'secondary';
// };

// const Button = ({ label, onClick, variant = 'primary' }: ButtonProps) => {
//   const base = 'px-4 py-2 rounded font-medium transition-colors duration-300';
//   const variants = {
//     primary: 'bg-blue-600 text-white hover:bg-blue-700',
//     secondary: 'bg-gray-200 text-black hover:bg-gray-300',
//   };

//   return (
//     <button onClick={onClick} className={classNames(base, variants[variant])}>
//       {label}
//     </button>
//   );
// };

// export default Button;
// Button.tsx
import React from 'react';

export type ButtonProps = {
  label: string;
  variant?: 'primary' | 'secondary'; // ✅ This is the missing line
};

export const Button = ({ label, variant = 'primary' }: ButtonProps) => {
  const baseStyle = 'px-4 py-2 rounded text-white';
  const styles = {
    primary: `${baseStyle} bg-blue-600`,
    secondary: `${baseStyle} bg-gray-600`,
  };

  return <button className={styles[variant]}>{label}</button>;
};
