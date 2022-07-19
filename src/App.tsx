import './App.css';
import { BookList } from './components/BookList';
import { useBooks } from './domain/books';

function App() {
  // const [book, setBook] = useState<Book | null>(null);
  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch('http://localhost:4730/books/9781787125421');
  //     const _book = await response.json();
  //     setBook(_book);
  //   })();
  // }, []);

  const { books, reload } = useBooks();

  return (
    <div className="App">
      <button onClick={reload}>Reload books</button>
      {/* {book ? <BookDetail book={book} /> : <span>Loading book...</span>} */}
      {books ? (
        <BookList books={books} onBookSelected={(book) => alert(book.price)} />
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
}

export default App;
