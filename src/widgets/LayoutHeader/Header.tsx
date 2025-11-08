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
        <h2>О проекте</h2>
        <p>
          Это учебное приложение для просмотра постов.
        </p>
      </Modal>
    </header>
  )
};

export default Header;
