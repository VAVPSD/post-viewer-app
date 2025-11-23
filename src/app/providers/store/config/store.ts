import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from '../../../../entities/post/model/slice/postSlice';
import { usersReducer } from '../../../../entities/user/model/slice/userSlice';
import { jsonPlaceholderApi } from '../../../../shared/api/jsonplaceholder';


export const store = configureStore({
  reducer: {
    [jsonPlaceholderApi.reducerPath]: jsonPlaceholderApi.reducer,
    posts: postsReducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jsonPlaceholderApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
