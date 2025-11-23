import { useState, useCallback, type MouseEventHandler } from 'react';
import { useGetCommentsByPostQuery } from '../../../entities/comment/api/commentsApi';
import styles from './CommentList.module.css';

interface Props {
  postId: number;
}

const CommentList = ({ postId }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { data: comments, isLoading } = useGetCommentsByPostQuery(postId, {
    skip: !isOpen,
  });

  const toggle: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={toggle}>
        {isOpen ? 'Скрыть комментарии' : 'Показать комментарии'}
      </button>

      {isOpen && (
        <div className={styles.commentsContainer}>
          {isLoading && <p className={styles.loading}>Загружаем комментарии...</p>}
          {!isLoading && comments && comments.length === 0 && (
            <p className={styles.empty}>Комментариев нет</p>
          )}
          {!isLoading && comments && comments.length > 0 && (
            <ul className={styles.commentsList}>
              {comments.map((comment) => (
                <li key={comment.id} className={styles.commentItem}>
                  <span className={styles.commentEmail}>{comment.email}</span>
                  <span className={styles.commentBody}>{comment.body}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default CommentList;
