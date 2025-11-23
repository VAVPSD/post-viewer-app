import { type PropsWithChildren, type ButtonHTMLAttributes } from 'react';

type Props = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export const Button = ({ children, ...props }: Props) => {
  return (
    <button {...props}>
      {children}
    </button>
  );
};
