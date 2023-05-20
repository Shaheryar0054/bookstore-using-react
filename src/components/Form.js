import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postBooks } from '../redux/books/booksSlice';

const Form = () => {
  const initial = {
    title: '',
    author: '',
  };

  const [state, setState] = useState(initial);
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      item_id: `item${books.length + 1}`, ...prev, [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default form submission
    if (state.title.trim() !== '' && state.author.trim() !== '') {
      const book = {
        title: state.title,
        author: state.author,
        category: 'Story',
        item_id: `item${books.length + 1}`,
      };

      dispatch(postBooks(book)).then(() => {
        setState(initial);
      });
    }
  };

  return (
    <div id="form-container">
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={handleSubmit}>
        <input className="book-title" type="text" placeholder="Book title" onChange={handleChange} name="title" value={state.title} />
        <input className="input-author" type="text" placeholder="Author" onChange={handleChange} name="author" value={state.author} />
        <button
          className="submit-btn"
          type="submit" // changed from type="button" to type="submit"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default Form;
