import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/UHXf29hQzudmQrt1PhXv/books';

const initialState = {
  books: [],
  isLoading: false,
  error: null,
};

export const postBooks = createAsyncThunk('books/postBooks', async (book, thunkAPI) => {
  try {
    await axios.post(url, book);
    return book;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const getBooks = createAsyncThunk('books/getBooks', async () => {
  try {
    const response = await axios.get(url);
    const booksArr = Object.keys(response.data).map((key) => ({
      item_id: key,
      ...response.data[key][0],
    }));
    return booksArr;
  } catch (error) {
    return isRejectedWithValue(error.message);
  }
});

export const deleteBook = createAsyncThunk('books/removeBook', async (bookId) => {
  await axios.delete(`${url}/${bookId}`);
  return bookId;
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((item) => item.item_id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
        state.error = null;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(postBooks.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.books = state.books.filter((book) => book.item_id !== action.payload);
      });
  },
});

export const { addBook, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
