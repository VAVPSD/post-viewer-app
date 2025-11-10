import { useCallback, useMemo } from 'react';
import PostCard from '../../entities/post/ui/PostCard';
import { type PostDto } from '../../mock/posts';
import { withLoading } from '../../shared/lib/hoc/withLoading';

interface Props {
  posts: PostDto[];
}

const PostList = ({ posts }: Props) => {

  const handleClick = useCallback((id: number) => {
    console.log(`Пост ${id}`);
  }, []);

  const renderedPosts = useMemo(
    () =>
      posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
          onClick={() => handleClick(post.id)}
        />
      )),
    [posts, handleClick]
  );

  return <>{renderedPosts}</>;
};

const PostListWithLoading = withLoading(PostList);

export default PostListWithLoading;
