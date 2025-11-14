import {Component} from '@angular/core';
import {AsyncPipe} from '@angular/common';
import {List} from '../../components/list/list';
import {Store} from '@ngrx/store';
import {selectBookCollection, selectCollectionState} from '../../../store/selector/book.selector';
import {BookStatus} from '../../../types/book.type';
import {map} from 'rxjs';

@Component({
  selector: 'app-user-page',
  imports: [
    AsyncPipe,
    List
  ],
  templateUrl: './user-page.html',
  styleUrl: './user-page.css',
})
export class UserPage {
  books$
  collection$

  constructor(private store: Store) {
    this.books$ = this.store.select(selectBookCollection);
    this.collection$ = this.store.select(selectCollectionState);
  }

  protected readonly BookStatus = BookStatus;

  filter(status?: BookStatus) {
    this.books$ = this.store.select(selectBookCollection);
    if (!status) return

    this.books$ = this.books$.pipe(
      map(books => books.filter(book => book.status === status)
      ))
  }
}
