import styles from './Modal.module.css';

export const ModalFooter = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.footer}>{children}</div>;
};
