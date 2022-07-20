import { Link, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { BookScreen } from './screens/BooksScreen';
import { PlaygroundScreen } from './screens/PlaygroundScreen';

function App() {
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
        <Route path="/books" component={BookScreen} />
        <Route path="/playground" component={PlaygroundScreen} />
        <Redirect to="/books" />
      </Switch>
    </div>
  );
}

export default App;
