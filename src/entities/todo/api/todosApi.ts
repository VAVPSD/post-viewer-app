import { jsonPlaceholderApi } from '../../../shared/api/jsonplaceholder';

export interface JsonPlaceholderTodo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

export const todosApi = jsonPlaceholderApi.injectEndpoints({
  endpoints: (build) => ({
    getTodosByUser: build.query<JsonPlaceholderTodo[], number>({
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
