import { Book } from '../../domain/books';
import { noop } from '../../util/noop';
import { BookListItem } from './BookListItem/BookListItem';
import { OnBookSelected } from './OnBookSelected';

export interface BookListProps {
  books: Book[];
  onBookSelected?: OnBookSelected;
}

export const BookList: React.FC<BookListProps> = ({ books, onBookSelected = noop }) => {
  return (
    <div>
      {books.map((book) => (
        <BookListItem key={book.id} book={book} onBookSelected={onBookSelected} />
      ))}
    </div>
  );
};
