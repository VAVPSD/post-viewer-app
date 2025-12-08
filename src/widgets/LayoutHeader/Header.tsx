import { useState } from "react";
import { ThemeSwitcher } from "../../features/ThemeSwitcher/ui/ThemeSwitcher";
import { Button } from "../../shared/ui/Button/Button";
import { Modal } from "../../shared/ui/Modal/Modal";
import UserTabs from "../UserTabs/ui/UserTabs";
import styles from "./Header.module.css";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>PostViewer</h1>
      <div className={styles.controls}>
        <ThemeSwitcher />
        <Button onClick={() => setIsModalOpen(true)}>О проекте</Button>
        <UserTabs />
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Header><h1>О проекте</h1></Modal.Header>
        <Modal.Body><p>Это учебное приложение для просмотра постов.</p></Modal.Body>
        <Modal.Footer><p>Контакты</p></Modal.Footer>
      </Modal>
    </header>
  )
};

export default Header;
