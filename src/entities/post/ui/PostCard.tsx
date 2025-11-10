import { mockComments } from '../../../mock/comments';
import type { PostDto } from '../../../mock/posts';
import CommentList from '../../../widgets/CommentList/ui/CommentList';

interface Props {
  post: PostDto;
  onClick: () => void;
}

const PostCard = ({ post, onClick }: Props) => {
  return (
    <div onClick={onClick}>
      <h3>{post.title}</h3>
      <p>{post.text}</p>
        <CommentList comments={mockComments}/>
    </div>
  );
};

export default PostCard;
