import {createActionGroup, props} from '@ngrx/store';

export const CollectionActions = createActionGroup({
  source: 'Collection',
  events: {
    'Add Book': props<{ bookId: string }>(),
    'Remove Book': props<{ bookId: string }>(),
  },
});
