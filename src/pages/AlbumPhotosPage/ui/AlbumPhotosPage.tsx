import { useParams } from 'react-router-dom';

export const AlbumPhotosPage = () => {
  const { id } = useParams();
  return <h2>/albums/{id}/photos — фото из альбома</h2>;
};
