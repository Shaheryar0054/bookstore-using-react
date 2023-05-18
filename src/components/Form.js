import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, postBooks } from '../redux/books/booksSlice';

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

  const handleSubmit = async () => {
    if (state.title.trim() !== '' && state.author.trim() !== '') {
      const book = {
        title: state.title,
        author: state.author,
        category: 'Story',
        item_id: `item${books.length + 1}`,
      };

      try {
        await dispatch(postBooks(book));
        dispatch(addBook(book));
        setState(initial);
      } catch (error) {
        error(error);
      }
    }
  };

  return (
    <>
      <h3>ADD NEW BOOK</h3>
      <form action="submit">
        <input type="text" placeholder="Book title" onChange={handleChange} name="title" value={state.title} />
        <input type="text" placeholder="Author" onChange={handleChange} name="author" value={state.author} />
        <button
          type="button"
          onClick={handleSubmit}
        >
          Add Book
        </button>
      </form>
    </>
  );
};

export default Form;
