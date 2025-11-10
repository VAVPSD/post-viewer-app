import styles from './Modal.module.css';

export const ModalHeader = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.header}>{children}</div>;
};
