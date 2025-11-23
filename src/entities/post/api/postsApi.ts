import { jsonPlaceholderApi } from '../../../shared/api/jsonplaceholder';

export interface JsonPlaceholderPost {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export const postsApi = jsonPlaceholderApi.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query<JsonPlaceholderPost[], void>({
      query: () => '/posts',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Post' as const, id })),
              { type: 'Post', id: 'LIST' },
            ]
          : [{ type: 'Post', id: 'LIST' }],
    }),

    getPostById: build.query<JsonPlaceholderPost, number>({
      query: (id: number) => `/posts/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Post', id }],
    }),

    getPostsByUserId: build.query<JsonPlaceholderPost[], number>({
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
