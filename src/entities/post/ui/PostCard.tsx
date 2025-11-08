import { mockComments } from '../../../mock/comments';
import type { PostsDto } from '../../../mock/posts';
import CommentList from '../../../widgets/CommentList/ui/CommentList';

interface Props {
  post: PostsDto;
}

const PostCard = ({ post }: Props) => {
  return (
    <div>
      <h3>{post.title}</h3>
        <CommentList comments={mockComments}/>
    </div>
  );
};

export default PostCard;
