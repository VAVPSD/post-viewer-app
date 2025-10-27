import type { PostsDto } from '../../../mock/posts';

interface Props {
  post: PostsDto;
}

const PostCard = ({ post }: Props) => {
  return (
    <div>
      <h3>{post.title}</h3>
    </div>
  );
};

export default PostCard;
