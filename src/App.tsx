import { Link, Redirect, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import { Book } from './domain/books';
import { BookDetailsScreen } from './screens/BookDetailsScreen';
import { BookScreen, OnBookSelected } from './screens/BooksScreen';
import { PlaygroundScreen } from './screens/PlaygroundScreen';

function App() {
  const history = useHistory();

  const onBookSelected: OnBookSelected = (book: Book) => {
    history.push(`/books/${book.isbn}`);
  };

  return (
    <div>
      <ul>
        <li>
          <Link to="/books">Books</Link>
        </li>
        <li>
          <Link to="/playground">Playground</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/books/:isbn" component={BookDetailsScreen} />
        <Route path="/books" render={() => <BookScreen onBookSelected={onBookSelected} />} />
        <Route path="/playground" component={PlaygroundScreen} />
        <Redirect to="/books" />
      </Switch>
    </div>
  );
}

export default App;
