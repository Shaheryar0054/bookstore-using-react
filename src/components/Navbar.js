import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Books from './Books';
import Categories from './Categories';
import Form from './Form';

export default function Navbar() {
  return (
    <Router>
      <h1>Bookstore CMS</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="/Categories">CATEGORIES</Link>
          </li>
        </ul>
      </nav>
      {/* Used switch component to display different content on UI */}
      <Switch>
        <Route exact path="/">
          <Books />
          <Form />
        </Route>
        <Route path="/Categories">
          <Categories />
        </Route>
      </Switch>
    </Router>
  );
}
