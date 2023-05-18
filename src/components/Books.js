import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks, deleteBook } from '../redux/books/booksSlice';

const Books = () => {
  const dispatch = useDispatch();
  const { books, isLoading, error } = useSelector((store) => store.books);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        {error.message}
      </div>
    );
  }

  if (books.length === 0) {
    return (
      <div>
        <h1>No books found.</h1>
      </div>
    );
  }

  return (
    <>
      <ul>
        {books.map((book) => (
          <li key={book.item_id}>
            <p>{book.author}</p>
            <p>{book.title}</p>
            <p>{book.category}</p>
            <button
              type="button"
              onClick={() => {
                dispatch(deleteBook(book.item_id));
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Books;
