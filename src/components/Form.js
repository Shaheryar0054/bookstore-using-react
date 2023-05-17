import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

export default function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '' && author.trim() !== '') {
      dispatch(addBook({ title, author }));
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        Title:
        <input placeholder="Title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>

      <label htmlFor="author">
        Author:
        <input placeholder="authore" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      </label>

      <button type="submit">Add Book</button>
    </form>
  );
}
