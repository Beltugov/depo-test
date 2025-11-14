import {Component, Input} from '@angular/core';
import {BookStatus, IBook} from '../../../types/book.type';
import {NgForOf, NgIf} from '@angular/common';
import {Card} from '../card/card';
import {Store} from '@ngrx/store';
import {CollectionActions} from '../../../store/action/collection.action';
import {BooksActions} from '../../../store/action/book.action';


@Component({
  selector: 'app-list',
  imports: [
    NgForOf,
    NgIf,
    Card
  ],
  templateUrl: './list.html',
  styleUrl: './list.css',

})
export class List {
  @Input() public books: readonly IBook[] = []
  @Input() public collectionsId: readonly string[] = []

  constructor( private store: Store) {}

  onAdd({event, bookId}: {event: PointerEvent, bookId: string}) {
    event.preventDefault();
    this.store.dispatch(CollectionActions.addBook({ bookId }));
  }

  onRemove({event, bookId}: {event: PointerEvent, bookId: string}) {
    event.preventDefault();
    this.store.dispatch(CollectionActions.removeBook({ bookId }));
  }

  isInCollection(bookId: string): boolean {
    return this.collectionsId.includes(bookId);
  }

  changeStatus({status, bookId}: {status: BookStatus, bookId: string}) {
    this.store.dispatch(BooksActions.changeStatus({status, bookId}))
  }
}
