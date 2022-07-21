import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { rootReducer } from '../../../store';
import { Book } from '../Book';

export interface BooksState {
  books: Book[];
}

const initialState: BooksState = {
  books: [],
};

export type AddBookAction = PayloadAction<Book>;
export type AddBooksAction = PayloadAction<Book[]>;

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state: BooksState, action: AddBookAction) => {
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    },
    addBooks: (state: BooksState, action: AddBooksAction) => {
      return {
        ...state,
        books: [...action.payload],
      };
    },
  },
});

// Actions generated via `createSlice`
export const { addBook, addBooks } = booksSlice.actions;

// Selector
export const booksSelector = (state: ReturnType<typeof rootReducer>) => state.books;

// Reducer
export const booksReducer = booksSlice.reducer;
