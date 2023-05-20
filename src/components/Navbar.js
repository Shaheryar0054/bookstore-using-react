/* eslint-disable */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Books from './Books';
import Categories from './Categories';
import Form from './Form';
import '../styles/book.css';

export default function Navbar() {
  return (
    <Router>
      <nav id="nav-container">
        <h1>Bookstore CMS</h1>
        <ul id="pages-container">
          <li>
            <Link className="Books" style={{ textDecoration: 'none' }} to="/">BOOKS</Link>
          </li>
          <li>
            <Link className="Categories" style={{ textDecoration: 'none' }} to="/Categories">CATEGORIES</Link>
          </li>
          <FontAwesomeIcon icon={faUser} className="user-icon" />
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
