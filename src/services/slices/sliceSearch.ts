import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: InitialStateType = {
  searchValue: '',
};

export const slice = createSlice(
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

export const {
  setSearchValue,
} = slice.actions;

type InitialStateType = {
  searchValue: string;
};
