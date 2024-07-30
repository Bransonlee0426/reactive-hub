import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, useAppDispatch } from '../store/index';
import { fetchBooks } from '../features/books/booksSlice';
import styled from 'styled-components';

type ButtonProps = {
  $primary?: boolean;
};

function Books() {
  const books = useSelector((state: RootState) => state.books.books);
  const status = useSelector((state: RootState) => state.books.status);
  const error = useSelector((state: RootState) => state.books.error);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Count: {books}</h1>
      <h1>Status: {status}</h1>
      <h1>Error: {error}</h1>
      <button className="rounded-box" onClick={() => dispatch(fetchBooks())}>
        Fetch Books
      </button>
    </div>
  );
}

export default Books;
