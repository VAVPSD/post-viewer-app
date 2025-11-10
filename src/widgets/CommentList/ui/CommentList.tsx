import { useState, useCallback } from 'react';
import type { CommentDto } from '../../../mock/comments';

interface Props {
  comments: CommentDto[];
}

const CommentList = ({ comments }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div>
      <button onClick={toggle}>
        {isOpen ? 'Скрыть комментарии' : 'Показать комментарии'}
      </button>

      {isOpen && (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>{comment.text}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommentList;
