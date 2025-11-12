type IdParam = string | number;

export const routes = {
  posts: () => 'posts',
  post: (id: IdParam) => `posts/${id}`,

  userPosts: (id: IdParam) => `users/${id}/posts`,
  userAlbums: (id: IdParam) => `users/${id}/albums`,
  userTodos: (id: IdParam) => `users/${id}/todos`,

  albumPhotos: (id: IdParam) => `albums/${id}/photos`,
} as const;

export type RouteName = keyof typeof routes;
