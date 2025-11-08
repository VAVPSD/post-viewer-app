import Header from '../../widgets/LayoutHeader/Header';
import Footer from '../../widgets/LayoutFooter/Footer';
import PostList from '../../widgets/PostList/PostList';
import { useTheme } from '../lib/theme/useTheme';
import styles from './MainLayout.module.css';
import { mockPosts } from '../../mock/posts';

const MainLayout = () => {
  const { theme } = useTheme();
  const loading = false;

  return (
    <div className={theme === 'light' ? styles.light : styles.dark}>
      <Header />
      <main>
        <PostList isLoading={loading} posts={mockPosts} />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
