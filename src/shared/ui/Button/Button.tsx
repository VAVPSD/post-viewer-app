import { type PropsWithChildren, type ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

type Props = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export const Button = ({ children, className, ...props }: Props) => {
  return (
    <button className={`${styles.button} ${className || ''}`} {...props}>
      {children}
    </button>
  );
};
