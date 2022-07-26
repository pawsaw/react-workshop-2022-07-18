import { Book } from '../../../../domain/books';
import { useTheme } from '../../../../util/theme/ThemeContext';
import { OnBookSelected } from '../../OnBookSelected';

export interface BookListItemProps {
  book: Book;
  onBookSelected: OnBookSelected;
}

export const BookListItem: React.FC<BookListItemProps> = ({ book, onBookSelected }) => {
  const { primaryColor } = useTheme();

  return (
    <div style={{ color: primaryColor }}>
      {book.title} - <span onClick={() => onBookSelected(book)}>Details</span>
    </div>
  );
};
