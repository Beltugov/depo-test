import {createActionGroup, props} from '@ngrx/store';
import {BookStatus, IBook} from '../../types/book.type';

export const BooksActions = createActionGroup({
  source: 'Books',
  events: {
    'Get Book List': props<{ books: Array<IBook> }>(),
    'Change Status': props<{ status: BookStatus, bookId: string }>()
  },
});


