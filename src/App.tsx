import { useEffect, useState } from 'react';
import './App.css';
import { BookDetail } from './components/BookDetail';
import { Book } from './domain/books';

function App() {
  const [book, setBook] = useState<Book | null>(null);
  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:4730/books/9781787125421');
      const _book = await response.json();
      setBook(_book);
    })();
  }, []);

  return (
    <div className="App">
      {book ? <BookDetail book={book} /> : <span>Loading book...</span>}
      {/* <BookList books={books} onBookSelected={(book) => alert(book.price)} /> */}
    </div>
  );
}

export default App;
