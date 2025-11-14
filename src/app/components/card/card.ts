import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BookStatus, IBook} from '../../../types/book.type';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [
    NgIf
  ],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  protected readonly BookStatus = BookStatus;
  @Input() public book: IBook = {} as IBook;
  @Input() public isInCollection: boolean = false;
  @Output() handlerClick = new EventEmitter<{event: PointerEvent, bookId: string}>();
  @Output() changeStatus = new EventEmitter<{status: BookStatus, bookId: string}>();
}
