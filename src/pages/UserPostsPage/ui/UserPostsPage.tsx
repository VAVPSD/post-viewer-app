import { useParams } from 'react-router-dom';
import { useMemo } from 'react';
import { useGetPostsByUserIdQuery } from '../../../entities/post/api/postsApi';
import { useGetUserByIdQuery } from '../../../entities/user/api/usersApi';
import PostCard from '../../../entities/post/ui/PostCard';
import type { PostDto, Post } from '../../../entities/post/model/types';
import styles from './UserPostsPage.module.css';

const adaptPost = (post: Post): PostDto => ({
  id: post.id,
  title: post.title,
  text: post.body,
});

export const UserPostsPage = () => {
  const { id } = useParams<{ id: string }>();
  const userId = Number(id);

  const { data: user, isLoading: isUserLoading, error: userError } =
    useGetUserByIdQuery(userId, { skip: Number.isNaN(userId) });

  const { data: posts, isLoading: isPostsLoading, error: postsError } =
    useGetPostsByUserIdQuery(userId, { skip: Number.isNaN(userId) });

  const adaptedPosts = useMemo(
    () => (posts ?? []).map(adaptPost),
    [posts]
  );

  if (userError || postsError) {
    return (
      <section className={styles.container}>
        <p>Не удалось загрузить данные</p>
      </section>
    );
  }

  if (isUserLoading || isPostsLoading) {
    return (
      <section className={styles.container}>
        <p>Загружаем данные...</p>
      </section>
    );
  }

  if (!user) {
    return (
      <section className={styles.container}>
        <p>Пользователь не найден</p>
      </section>
    );
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Посты пользователя: {user.name}</h2>
      {adaptedPosts && adaptedPosts.length === 0 ? (
        <p>У пользователя нет постов</p>
      ) : (
        <ul className={styles.postsList}>
          {adaptedPosts.map((post) => (
            <li key={post.id} className={styles.postItem}>
              <PostCard
                post={post}
                onClick={() => {}}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
