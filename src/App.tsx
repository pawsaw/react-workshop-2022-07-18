import { CSSProperties, useState } from 'react';
import './App.css';
import { BookDetail } from './components/BookDetail';
import { BookList } from './components/BookList';
import { CounterProvider } from './components/Counter';
import { useBook, useBooks } from './domain/books';

function App() {
  // const [book, setBook] = useState<Book | null>(null);
  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch('http://localhost:4730/books/9781787125421');
  //     const _book = await response.json();
  //     setBook(_book);
  //   })();
  // }, []);

  const [selectedIsbn, setSelectedIsbn] = useState<string | null>(null);
  const { books, reload: reloadBooks } = useBooks();
  const { book, reload: reloadBook } = useBook(selectedIsbn);

  const [count, setCount] = useState(0);

  return (
    <CounterProvider
      counter={{
        count,
        increment: () => setCount(count + 1),
        decrement: () => setCount(count - 1),
      }}
    >
      <div style={style.container}>
        <div style={style.list}>
          <button onClick={reloadBooks}>Reload books</button>
          {/* {book ? <BookDetail book={book} /> : <span>Loading book...</span>} */}
          {books ? (
            <BookList books={books} onBookSelected={(book) => setSelectedIsbn(book.isbn)} />
          ) : (
            <span>Loading...</span>
          )}
        </div>
        {selectedIsbn && (
          <div style={style.detail}>
            <button onClick={() => reloadBook(selectedIsbn)}>Reload book</button>
            {/* {book ? <BookDetail book={book} /> : <span>Loading book...</span>} */}
            {book ? <BookDetail book={book} /> : <span>Loading...</span>}
          </div>
        )}
      </div>
    </CounterProvider>
  );
}

export default App;

const style: Record<string, CSSProperties> = {
  container: {
    width: '100vw',
    display: 'flex',
  },
  list: {
    flex: 1,
  },
  detail: {
    flex: 1,
  },
};
