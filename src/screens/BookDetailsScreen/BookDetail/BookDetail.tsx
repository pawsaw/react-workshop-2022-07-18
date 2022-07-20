import { Book } from '../../../domain/books';
import { Counter } from '../../../components/Counter';

export interface BookDetailProps {
  book: Book;
}

export const BookDetail: React.FC<BookDetailProps> = ({ book }) => {
  return (
    <div>
      <Counter />
      <h3>{book.title}</h3>
      <p>{book.abstract}</p>
    </div>
  );
};
