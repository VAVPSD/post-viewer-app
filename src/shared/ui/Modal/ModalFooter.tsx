import { type PropsWithChildren } from 'react';
import styles from './Modal.module.css';

export const ModalFooter = ({ children }: PropsWithChildren) => {
  return <div className={styles.footer}>{children}</div>;
};
