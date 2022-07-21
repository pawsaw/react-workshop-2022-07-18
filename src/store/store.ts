import { configureStore, combineReducers } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({
  books: (state = []) => state,
});

export type Store = ReturnType<typeof rootReducer>;
// alternative way:
// export type StoreT = NonNullable<Parameters<typeof rootReducer>[0]>;

export const store = configureStore({
  reducer: rootReducer,
});
