import { useParams } from 'react-router-dom';
import { useGetPostByIdQuery } from '../../../entities/post/api/postsApi';
import { useGetCommentsByPostQuery, type JsonPlaceholderComment } from '../../../entities/comment/api/commentsApi';

export default function PostPage() {
  const { id } = useParams();
  const postId = Number(id);

  const { data: post, isLoading: isPostLoading, error: postError } =
    useGetPostByIdQuery(postId, { skip: Number.isNaN(postId) });

  const { data: comments, isLoading: isCommentsLoading } =
    useGetCommentsByPostQuery(postId, { skip: Number.isNaN(postId) });

  if (postError) return <p>Не удалось загрузить пост</p>;
  if (isPostLoading) return <p>Загружаем пост…</p>;

  if (!post) return <p>Пост не найден</p>;

  return (
    <section>
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <h3>Комментарии</h3>
      {isCommentsLoading && <p>Загружаем комментарии…</p>}
      {!isCommentsLoading && comments?.length === 0 && <p>Комментариев нет</p>}
      <ul>
        {comments?.map((c: JsonPlaceholderComment) => (
          <li key={c.id}>
            <strong>{c.email}</strong>: {c.body}
          </li>
        ))}
      </ul>
    </section>
  );
}
