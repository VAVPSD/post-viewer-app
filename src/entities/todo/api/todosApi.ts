import { jsonPlaceholderApi } from '../../../shared/api/jsonplaceholder';
import type { Todo } from '../model/types';

export const todosApi = jsonPlaceholderApi.injectEndpoints({
  endpoints: (build) => ({
    getTodosByUser: build.query<Todo[], number>({
      query: (userId: number) => `/users/${userId}/todos`,
      providesTags: (result, _error, userId) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Todo' as const, id })),
              { type: 'Todo', id: `USER-${userId}` },
            ]
          : [{ type: 'Todo', id: `USER-${userId}` }],
    }),
  }),
});

export const { useGetTodosByUserQuery } = todosApi;
