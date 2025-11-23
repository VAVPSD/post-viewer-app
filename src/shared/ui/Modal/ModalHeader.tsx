import { type PropsWithChildren } from 'react';
import styles from './Modal.module.css';

export const ModalHeader = ({ children }: PropsWithChildren) => {
  return <div className={styles.header}>{children}</div>;
};
