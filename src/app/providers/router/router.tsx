import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AlbumPhotosPage } from '../../../pages/AlbumPhotosPage/ui/AlbumPhotosPage';
import PostPage from '../../../pages/PostPage/ui/PostPage';
import { UserAlbumsPage } from '../../../pages/UserAlbumsPage/ui/UserAlbumsPage';
import { UserPostsPage } from '../../../pages/UserPostsPage/ui/UserPostsPage';
import { UserTodosPage } from '../../../pages/UserTodosPage/ui/UserTodosPage';
import MainLayout from '../../../shared/layouts/MainLayout';
import { PostsPage } from '../../../pages/PostsPage/ui/PostsPage';
import { routes } from '../../../shared/routes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to={routes.posts()} /> },
      { path: routes.posts(), element: <PostsPage /> },
      { path: routes.post(':id'), element: <PostPage /> },
      { path: routes.userAlbums(':id'), element: <UserAlbumsPage /> },
      { path: routes.albumPhotos(':id'), element: <AlbumPhotosPage /> },
      { path: routes.userTodos(':id'), element: <UserTodosPage /> },
      { path: routes.userPosts(':id'), element: <UserPostsPage /> },
    ],
  },
]);
