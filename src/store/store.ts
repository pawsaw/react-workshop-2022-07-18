import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { booksReducer } from '../domain/books/store';
import { countReducer } from '../domain/counter/store';

export const rootReducer = combineReducers({
  books: booksReducer,
  count: countReducer,
});

export type Store = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
