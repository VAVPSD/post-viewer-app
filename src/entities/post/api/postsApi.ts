import { jsonPlaceholderApi } from '../../../shared/api/jsonplaceholder';
import type { Post } from '../model/types';

export const postsApi = jsonPlaceholderApi.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query<Post[], void>({
      query: () => '/posts',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Post' as const, id })),
              { type: 'Post', id: 'LIST' },
            ]
          : [{ type: 'Post', id: 'LIST' }],
    }),

    getPostById: build.query<Post, number>({
      query: (id: number) => `/posts/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Post', id }],
    }),

    getPostsByUserId: build.query<Post[], number>({
      query: (userId: number) => `/users/${userId}/posts`,
      providesTags: (result, _error, userId) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Post' as const, id })),
              { type: 'Post', id: `USER-${userId}` },
            ]
          : [{ type: 'Post', id: `USER-${userId}` }],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetPostByIdQuery,
  useGetPostsByUserIdQuery,
} = postsApi;
