import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

function Books() {
  const { books } = useSelector((store) => store.books);
  const dispatch = useDispatch();

  return (
    <div>
      {books.map((book) => (
        <div key={book.item_id}>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <button type="submit" onClick={() => { dispatch(removeBook(book.item_id)); }}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Books;
