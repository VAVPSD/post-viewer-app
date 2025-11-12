import { useParams } from 'react-router-dom';

export default function PostPage() {
  const { id } = useParams();
  return <h2>/posts/{id}</h2>;
}
