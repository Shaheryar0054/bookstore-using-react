import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'List',
  initialState: {
    books: [
      {
        item_id: 'item1',
        title: 'The Great Gatsby',
        author: 'John Smith',
        category: 'Fiction',
      },
      {
        item_id: 'item2',
        title: 'Anna Karenina',
        author: 'Leo Tolstoy',
        category: 'Fiction',
      },
      {
        item_id: 'item3',
        title: 'The Selfish Gene',
        author: 'Richard Dawkins',
        category: 'Nonfiction',
      },
    ],
  },
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },

    removeBook: (state, action) => {
      const newState = { ...state };
      newState.books = state.books.filter((item) => item.item_id !== action.payload);
      return newState;
    },

  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
