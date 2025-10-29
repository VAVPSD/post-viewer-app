import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
};

export const Button = ({ children, ...props }: Props) => {

  return (
    <button {...props}>
      {children}
    </button>
  );
};
