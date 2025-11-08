import React, { useEffect } from 'react';
import styles from './Modal.module.css';
import { usePortal } from '../../lib/hooks/usePortal';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const Modal = ({ isOpen, onClose, children }: Props) => {
  const Portal = usePortal('modal-root');

  useEffect(() => {
    const handleEsc = (evt: KeyboardEvent) => {
      if (evt.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <Portal>
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.content} onClick={(evt) => evt.stopPropagation()}>
          <button className={styles.close} onClick={onClose}>
            ✕
          </button>
          {children}
        </div>
      </div>
    </Portal>
  );
};
