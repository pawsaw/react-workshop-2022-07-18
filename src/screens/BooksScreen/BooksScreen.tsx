import { useHistory } from 'react-router-dom';
import { Book, useBooks } from '../../domain/books';
import { BookList } from './BookList';
import { OnBookSelected } from './OnBookSelected';

export interface BookScreenProps {
  onBookSelected: OnBookSelected;
}

export const BookScreen: React.FC<BookScreenProps> = ({ onBookSelected }) => {
  const { books } = useBooks();

  return (
    <div>
      {books ? <BookList books={books} onBookSelected={onBookSelected} /> : <span>Loading...</span>}
    </div>
  );
};
