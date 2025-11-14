
import {createReducer, on} from '@ngrx/store';
import {CollectionActions} from '../action/collection.action';


export const initialState: string[] = [];

export const collectionReducer = createReducer(
  initialState,
  on(CollectionActions.removeBook, (state, { bookId }) =>
    state.filter((id) => id !== bookId)
  ),
  on(CollectionActions.addBook, (state, { bookId }) => {
    if (state.indexOf(bookId) > -1) return state;

    return [...state, bookId];
  })
);
