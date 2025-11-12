import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AlbumPhotosPage } from '../../../pages/AlbumPhotosPage/ui/AlbumPhotosPage';
import PostPage from '../../../pages/PostPage/ui/PostPage';
import { UserAlbumsPage } from '../../../pages/UserAlbumsPage/ui/UserAlbumsPage';
import { UserPostsPage } from '../../../pages/UserPostsPage/ui/UserPostsPage';
import { UserTodosPage } from '../../../pages/UserTodosPage/ui/UserTodosPage';
import MainLayout from '../../../shared/layouts/MainLayout';
import { PostsPage } from '../../../pages/PostsPage/ui/PostsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="/posts" /> },
      { path: 'posts', element: <PostsPage /> },
      { path: 'posts/:id', element: <PostPage /> },
      { path: 'users/:id/albums', element: <UserAlbumsPage /> },
      { path: 'albums/:id/photos', element: <AlbumPhotosPage /> },
      { path: 'users/:id/todos', element: <UserTodosPage /> },
      { path: 'users/:id/posts', element: <UserPostsPage /> },
    ],
  },
]);
