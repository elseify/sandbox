import { createSlice } from '@reduxjs/toolkit';
import type {
  PayloadAction,
} from '@reduxjs/toolkit';

const initialState: InitialStateType = {
  searchValue: '',
};

const slice = createSlice(
  {
    name: 'search',
    initialState,
    reducers: {
      setSearchValue(state, action: PayloadAction<string>) {
        state.searchValue = action.payload;
      },
    },
  }
);

type InitialStateType = {
  searchValue: string;
};

export { slice };
export const {
  setSearchValue,
} = slice.actions;
