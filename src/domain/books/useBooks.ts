import { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Book } from './Book';
import { addBooks, booksSelector } from './store';

export interface UseBooksResult {
  books: Book[] | null;
  reload: () => void;
}

export const useBooks = (): UseBooksResult => {
  const { books } = useSelector(booksSelector);
  const dispatch = useDispatch();

  const reload = useCallback(async () => {
    const response = await fetch('http://localhost:4730/books');
    const _books = await response.json();
    dispatch(addBooks(_books));
  }, []);

  return {
    books,
    reload,
  };
};
