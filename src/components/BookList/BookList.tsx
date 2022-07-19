import { Book } from '../../domain/books';
import { noop } from '../../util/noop';
import { useCounter } from '../Counter/CounterContext';
import { BookListItem } from './BookListItem/BookListItem';
import { OnBookSelected } from './OnBookSelected';

export interface BookListProps {
  books: Book[];
  onBookSelected?: OnBookSelected;
}

export const BookList: React.FC<BookListProps> = ({ books, onBookSelected = noop }) => {
  const { count } = useCounter();
  return (
    <div>
      <p>Counter: {count}</p>
      {books.map((book) => (
        <BookListItem key={book.id} book={book} onBookSelected={onBookSelected} />
      ))}
    </div>
  );
};
