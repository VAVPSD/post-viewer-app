import PostCard from '../../entities/post/ui/PostCard';
import { type PostsDto } from '../../mock/posts';
import { withLoading } from '../../shared/lib/hoc/withLoading';

interface Props {
  posts: PostsDto[];
}

const PostList = ({posts}: Props) => {

  return (
    <>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  );
};

const PostListWithLoading = withLoading(PostList);

export default PostListWithLoading;
