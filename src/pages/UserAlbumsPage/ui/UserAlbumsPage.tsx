import { useParams } from 'react-router-dom';

export const UserAlbumsPage = () => {
  const { id } = useParams();
  return <h2>/users/{id}/albums — альбомы пользователя</h2>;
};
