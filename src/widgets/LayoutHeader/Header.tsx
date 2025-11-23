import { useState } from "react";
import { ThemeSwitcher } from "../../features/ThemeSwitcher/ui/ThemeSwitcher";
import { Button } from "../../shared/ui/Button/Button";
import { Modal } from "../../shared/ui/Modal/Modal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header>
      <h1>PostViewer</h1>
      <ThemeSwitcher />
      <Button onClick={() => setIsModalOpen(true)}>О проекте</Button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Header><h1>О проекте</h1></Modal.Header>
        <Modal.Body><p>Это учебное приложение для просмотра постов.</p></Modal.Body>
        <Modal.Footer><p>Контакты</p></Modal.Footer>
      </Modal>
    </header>
  )
};

export default Header;
