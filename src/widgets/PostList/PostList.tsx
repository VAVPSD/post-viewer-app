import PostCard from '../../entities/post/ui/PostCard';
import { mockPosts } from '../../mock/posts';

const PostList = () => {
  return (
    <div>
      {mockPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
