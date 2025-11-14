import { Component } from '@angular/core';
import {List} from '../../components/list/list';
import {selectBooks, selectCollectionState} from '../../../store/selector/book.selector';
import {Store} from '@ngrx/store';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-main-page',
  imports: [
    List,
    AsyncPipe
  ],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {
  books$
  collection$
  constructor( private store: Store) {
    this.books$  = this.store.select(selectBooks);
    this.collection$  = this.store.select(selectCollectionState);
  }

}
