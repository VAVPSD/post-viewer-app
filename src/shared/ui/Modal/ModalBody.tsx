import styles from './Modal.module.css';

export const ModalBody = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.body}>{children}</div>;
};
