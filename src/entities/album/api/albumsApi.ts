import { jsonPlaceholderApi } from '../../../shared/api/jsonplaceholder';
import type { Album } from '../model/types';

export const albumsApi = jsonPlaceholderApi.injectEndpoints({
  endpoints: (build) => ({
    getAlbumsByUser: build.query<Album[], number>({
      query: (userId: number) => `/users/${userId}/albums`,
      providesTags: (result, _error, userId) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Album' as const, id })),
              { type: 'Album', id: `USER-${userId}` },
            ]
          : [{ type: 'Album', id: `USER-${userId}` }],
    }),
  }),
});

export const { useGetAlbumsByUserQuery } = albumsApi;
