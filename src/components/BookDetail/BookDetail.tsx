import { Book } from '../../domain/books';

export interface BookDetailProps {
  book: Book;
}

export const BookDetail: React.FC<BookDetailProps> = ({ book }) => {
  return (
    <div>
      <h3>{book.title}</h3>
      <p>{book.abstract}</p>
    </div>
  );
};
