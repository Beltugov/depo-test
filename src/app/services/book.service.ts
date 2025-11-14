import {Injectable} from '@angular/core';
import data from "../../utils/data.json"
import {BookStatus, IBook} from '../../types/book.type';

@Injectable({ providedIn: 'root' })
export class BooksService {
  getBooks(): Array<IBook> {
    return data.books.map((book) => {
      return {
        id: book.id || '',
        title: book.title || '',
        description: book.description || '',
        author: book.author || '',
        year: book.year || '',
        pages: book.pages || '',
        status: BookStatus.UNREAD
      }
    });
  }
}
