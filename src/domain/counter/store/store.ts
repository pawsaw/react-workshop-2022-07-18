import { createSlice } from '@reduxjs/toolkit';
import { rootReducer } from '../../../store';

const initialState: number = 0;

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    reset: () => initialState,
  },
});

// Actions generated via `createSlice`
export const { increment, decrement, reset } = counterSlice.actions;

// Selector
export const countSelector = (state: ReturnType<typeof rootReducer>) => state.count;

// Reducer
export const countReducer = counterSlice.reducer;
