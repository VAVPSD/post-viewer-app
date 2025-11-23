import { useParams } from 'react-router-dom';

export const UserPostsPage = () => {
  const { id } = useParams();
  return <h2>/users/{id}/posts — посты пользователя</h2>;
};
