import { useEffect, type PropsWithChildren, type MouseEventHandler } from 'react';
import styles from './Modal.module.css';
import { usePortal } from '../../lib/hooks/usePortal';
import { ModalBody } from './ModalBody';
import { ModalFooter } from './ModalFooter';
import { ModalHeader } from './ModalHeader';

interface Props extends PropsWithChildren {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ isOpen, onClose, children }: Props) => {
  const Portal = usePortal('modal-root');

  useEffect(() => {
    const handleEsc = (evt: KeyboardEvent): void => {
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

  const handleOverlayClick: MouseEventHandler<HTMLDivElement> = () => {
    onClose();
  };

  const handleContentClick: MouseEventHandler<HTMLDivElement> = (evt) => {
    evt.stopPropagation();
  };

  const handleCloseClick: MouseEventHandler<HTMLButtonElement> = () => {
    onClose();
  };

  return (
    <Portal>
      <div className={styles.overlay} onClick={handleOverlayClick}>
        <div className={styles.content} onClick={handleContentClick}>
          <button className={styles.close} onClick={handleCloseClick}>
            ✕
          </button>
          {children}
        </div>
      </div>
    </Portal>
  );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
