import { useParams } from 'react-router-dom';

export const UserTodosPage = () => {
  const { id } = useParams();
  return <h2>/users/{id}/todos — задачи пользователя</h2>;
};
