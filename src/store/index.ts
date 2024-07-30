// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import booksSlice from '../features/books/booksSlice';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    books: booksSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
