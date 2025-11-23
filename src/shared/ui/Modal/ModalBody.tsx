import { type PropsWithChildren } from 'react';
import styles from './Modal.module.css';

export const ModalBody = ({ children }: PropsWithChildren) => {
  return <div className={styles.body}>{children}</div>;
};
