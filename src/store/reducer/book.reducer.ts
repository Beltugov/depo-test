import {createReducer, on} from '@ngrx/store';
import {BooksActions} from '../action/book.action';
import {IBook} from '../../types/book.type';

export const initialState: Array<IBook> = [];

export const booksReducer = createReducer(
  initialState,
  on(BooksActions.getBookList, (state, {books}) => books),
  on(BooksActions.changeStatus, (state, {status, bookId}) => state.map((elem) => {
    if (elem.id === bookId) {
      return {
        ...elem,
        status: status,
      }
    }
    return elem;
  })),
);
