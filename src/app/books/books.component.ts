import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BooksRetrievalService } from '../services/books-retrieval.service';
import { book } from '../interfaces/book';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss'
})
export class BooksComponent {
  @Input() searched!: string;
  @Output() add_to_wishlist: EventEmitter<book> = new EventEmitter<book>();
  allbooks: book[] = [];

  constructor(private booksService: BooksRetrievalService, private wishlistService: WishlistService) { }

  getBooks() {
    if(this.searched){
      this.booksService.getBooks(this.searched).subscribe((books: book[]) => {
        this.allbooks = books;
    });
    }
  }

  onSearchChange(searched: string) {
    this.searched = searched;
    this.getBooks();
  }

  addToWishlist(book: book) {
    this.wishlistService.addToWishlist(book);
  }
}
