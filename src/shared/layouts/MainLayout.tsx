import Header from '../../widgets/LayoutHeader/Header';
import Footer from '../../widgets/LayoutFooter/Footer';
import { useTheme } from '../lib/theme/useTheme';
import styles from './MainLayout.module.css';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  const { theme } = useTheme();

  return (
    <div className={theme === 'light' ? styles.light : styles.dark}>
      <Header />
      <main>
        <Outlet />  
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
