import { useParams } from 'react-router-dom';
import { BookDetail } from './BookDetail';
import { useBook } from '../../domain/books';

export interface BookDetailsScreenParams {
  isbn: string;
}

export const BookDetailsScreen: React.FC = () => {
  const { isbn } = useParams<BookDetailsScreenParams>();
  const { book } = useBook(isbn);

  return (
    <div>
      <h2>Book {isbn}</h2>
      {book ? <BookDetail book={book} /> : <span>Loading book...</span>}
    </div>
  );
};
