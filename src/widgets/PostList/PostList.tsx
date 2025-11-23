import { useCallback, useMemo } from 'react';
import PostCard from '../../entities/post/ui/PostCard';
import { type PostDto } from '../../entities/post/model/types';
import { withLoading } from '../../shared/lib/hoc/withLoading';
import styles from './PostList.module.css';

interface Props {
  posts: PostDto[];
}

const PostList = ({ posts }: Props) => {
  const handleClick = useCallback((id: number): void => {
    console.log(`Пост ${id}`);
  }, []);

  const renderedPosts = useMemo(
    () =>
      posts.map((post) => (
        <li key={post.id} className={styles.item}>
          <PostCard
            post={post}
            onClick={() => handleClick(post.id)}
          />
        </li>
      )),
    [posts, handleClick]
  );

  return <ul className={styles.list}>{renderedPosts}</ul>;
};

const PostListWithLoading = withLoading(PostList);

export default PostListWithLoading;
