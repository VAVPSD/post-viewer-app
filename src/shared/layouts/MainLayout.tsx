import { useState } from 'react';
import Header from '../../widgets/LayoutHeader/Header';
import Footer from '../../widgets/LayoutFooter/Footer';
import PostList from '../../widgets/PostList/PostList';
import { useTheme } from '../lib/theme/useTheme';
import styles from './MainLayout.module.css';
import { mockPosts } from '../../mock/posts';
import PostLengthFilter from '../../features/PostLengthFilter/ui/PostLengthFilter';
import { filterByLength } from '../../features/PostLengthFilter/lib/filterByLength';
import { type LengthFilterType } from '../../features/PostLengthFilter/model/types';
import { LengthFilter } from '../../features/PostLengthFilter/model/consts';

const MainLayout = () => {
  const { theme } = useTheme();
  const loading = false;
  const [lengthFilter, setLengthFilter] = useState<LengthFilterType>(LengthFilter.All);
  const filteredPosts = filterByLength(mockPosts, lengthFilter);

  return (
    <div className={theme === 'light' ? styles.light : styles.dark}>
      <Header />
      <main>
        <PostLengthFilter value={lengthFilter} onChange={setLengthFilter} />
        <PostList isLoading={loading} posts={filteredPosts} />
      </main>
      <Footer />
    </div>
  );
};


export default MainLayout;
