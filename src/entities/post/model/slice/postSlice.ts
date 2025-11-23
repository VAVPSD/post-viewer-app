import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { RootState } from '../../../../app/providers/store/config/store';
import type { PostDto } from '../types';

const postsAdapter = createEntityAdapter<PostDto>();

type PostsExtraState = {
  isLoading: boolean;
  error: string | null;
};

const initialState = postsAdapter.getInitialState<PostsExtraState>({
  isLoading: false,
  error: null,
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postsSetAll: postsAdapter.setAll,
    postsUpsertMany: postsAdapter.upsertMany,
    postsClear: postsAdapter.removeAll,
    postsSetLoading(state, action) {
      state.isLoading = action.payload;
    },
    postsSetError(state, action) {
      state.error = action.payload;
    },
  },
});

export const postsReducer = postsSlice.reducer;
export const postsActions = postsSlice.actions;

const postsSelectors = postsAdapter.getSelectors<RootState>(
  (state) => state.posts
);

export const selectAllPosts = postsSelectors.selectAll;
export const selectPostById = postsSelectors.selectById;
export const selectPostsLoading = (state: RootState) => state.posts.isLoading;
export const selectPostsError = (state: RootState) => state.posts.error;
