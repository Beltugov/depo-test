import {Component, OnInit, signal} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {Store} from '@ngrx/store';
import {BooksService} from './services/book.service';
import {BooksActions} from '../store/action/book.action';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('depo-test');

  constructor(private booksService: BooksService, private store: Store) {}

  ngOnInit() {
    const books = this.booksService.getBooks()
    this.store.dispatch(BooksActions.getBookList({ books }))
  }
}
