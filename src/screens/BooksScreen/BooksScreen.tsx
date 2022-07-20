import { useBooks } from '../../domain/books';
import { BookList } from './BookList';

export const BookScreen: React.FC = () => {
  const { books } = useBooks();
  return <div>{books ? <BookList books={books} /> : <span>Loading...</span>}</div>;
};
