import { type MouseEventHandler } from 'react';
import type { PostDto } from '../model/types';
import CommentList from '../../../widgets/CommentList/ui/CommentList';
import styles from './PostCard.module.css';

interface Props {
  post: PostDto;
  onClick: MouseEventHandler<HTMLDivElement>;
}

const PostCard = ({ post, onClick }: Props) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <h3 className={styles.title}>{post.title}</h3>
      <p className={styles.text}>{post.text}</p>
      <CommentList postId={post.id} />
    </div>
  );
};

export default PostCard;
