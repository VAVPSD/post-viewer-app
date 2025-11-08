import PostCard from '../../entities/post/ui/PostCard';
import { mockPosts } from '../../mock/posts';

const PostList = () => {
  return (
    <>
      {mockPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
