import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { useBooksApi } from '../../api/books/index';

interface BooksState {
  books: number | string | null;
  status: string;
  error: string | null;
}

// 創建一個新的 thunk
export const fetchBooks = createAsyncThunk('counter/fetchBooks', async () => {
  const booksApi = useBooksApi();
  const { data } = await booksApi.getBooks();
  return data;
});

const initialState: BooksState = {
  books: null,
  status: '',
  error: null,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    // decrement: (state) => {
    //   (state.count as number) -= 1;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   (state.count as number) += action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = 'error';
      });
  },
});

// export const { decrement, incrementByAmount } = booksSlice.actions;

export default booksSlice.reducer;
