import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks, deleteBook } from '../redux/books/booksSlice';
import '../styles/book.css';

const Books = () => {
  const dispatch = useDispatch();
  const { books, isLoading, error } = useSelector((store) => store.books);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div>
        <h1 className="loading">Loading...</h1>
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
        <h1 className="no-book">No books found.</h1>
      </div>
    );
  }

  return (
    <>
      <ul id="main-container">
        {books.map((book) => (
          <li key={book.item_id} className="display-books">
            <div className="book-data">
              <p className="category">{book.category}</p>
              <h2 className="title">{book.title}</h2>
              <p className="author">{book.author}</p>
              <div id="all-btn">
                <button type="button" className="comments">Comments</button>
                <button
                  className="remove"
                  type="button"
                  onClick={() => {
                    dispatch(deleteBook(book.item_id));
                  }}
                >
                  Remove
                </button>
                <button type="button" className="Edit">Edit</button>
              </div>
            </div>
            <div className="percentage-circle">
              <div className="rotation">
                <span className="blue-circle" />
              </div>
              <div className="percentage-sign">
                <h3>69%</h3>
                <p>Completed</p>
              </div>
            </div>
            <div className="line">
              <hr />
            </div>
            <div className="upgrade">
              <p className="current-chapter">CURRENT CHAPTER</p>
              <p className="chapter-17">CURRENT 17</p>
              <button className="update-progress" type="button">Update Progress</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Books;
