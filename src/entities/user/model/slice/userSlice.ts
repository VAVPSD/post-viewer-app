import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import type { RootState } from '../../../../app/providers/store/config/store';
import type { UserDto } from '../types'; 

const usersAdapter = createEntityAdapter<UserDto>();

type UsersExtraState = {
  isLoading: boolean;
  error: string | null;
};

const initialState = usersAdapter.getInitialState<UsersExtraState>({
  isLoading: false,
  error: null,
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    usersSetAll: usersAdapter.setAll,
    usersUpsertMany: usersAdapter.upsertMany,
    usersClear: usersAdapter.removeAll,
    usersSetLoading(state, action) {
      state.isLoading = action.payload;
    },
    usersSetError(state, action) {
      state.error = action.payload;
    },
  },
});

export const usersReducer = usersSlice.reducer;
export const usersActions = usersSlice.actions;

const usersSelectors = usersAdapter.getSelectors<RootState>(
  (state) => state.users
);

export const selectAllUsers = usersSelectors.selectAll;
export const selectUserById = usersSelectors.selectById;
export const selectUsersLoading = (state: RootState) => state.users.isLoading;
export const selectUsersError = (state: RootState) => state.users.error;
