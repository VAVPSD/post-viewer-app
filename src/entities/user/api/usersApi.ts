import { jsonPlaceholderApi } from '../../../shared/api/jsonplaceholder';
import type { UserDto } from '../model/types';

export const usersApi = jsonPlaceholderApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<UserDto[], void>({
      query: () => '/users',
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'User' as const, id })),
              { type: 'User', id: 'LIST' },
            ]
          : [{ type: 'User', id: 'LIST' }],
    }),

    getUserById: build.query<UserDto, number>({
      query: (id: number) => `/users/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'User', id }],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
} = usersApi;

