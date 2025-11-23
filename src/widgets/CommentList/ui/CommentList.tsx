import { useState, useCallback } from 'react';
import { useGetCommentsByPostQuery } from '../../../entities/comment/api/commentsApi';

interface Props {
  postId: number;
}

const CommentList = ({ postId }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const { data: comments, isLoading } = useGetCommentsByPostQuery(postId, {
    skip: !isOpen,
  });

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div>
      <button onClick={toggle}>
        {isOpen ? 'Скрыть комментарии' : 'Показать комментарии'}
      </button>

      {isOpen && (
        <div>
          {isLoading && <p>Загружаем комментарии...</p>}
          {!isLoading && comments && comments.length === 0 && (
            <p>Комментариев нет</p>
          )}
          {!isLoading && comments && comments.length > 0 && (
            <ul>
              {comments.map((comment) => (
                <li key={comment.id}>
                  <strong>{comment.email}</strong>: {comment.body}
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
