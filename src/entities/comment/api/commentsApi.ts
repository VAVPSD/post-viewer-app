import { jsonPlaceholderApi } from '../../../shared/api/jsonplaceholder';
import type { Comment } from '../model/types';

export const commentsApi = jsonPlaceholderApi.injectEndpoints({
  endpoints: (build) => ({
    getCommentsByPost: build.query<Comment[], number>({
      query: (postId: number) => `/posts/${postId}/comments`,
      providesTags: (result, _error, postId) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Comment' as const, id })),
              { type: 'Comment', id: `POST-${postId}` },
            ]
          : [{ type: 'Comment', id: `POST-${postId}` }],
    }),
  }),
});

export const { useGetCommentsByPostQuery } = commentsApi;
