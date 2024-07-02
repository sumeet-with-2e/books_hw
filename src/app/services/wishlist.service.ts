import { Injectable } from '@angular/core';
import { book } from '../interfaces/book';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlist: book[] = [];
  private wishlistSubject: BehaviorSubject<book[]> = new BehaviorSubject<book[]>(this.wishlist);

  getWishlist() {
    return this.wishlistSubject.asObservable();
  }

  addToWishlist(book: book) {
    this.wishlist.push(book);
    this.wishlistSubject.next(this.wishlist);
  }

  removeFromWishlist(index: number) {
    this.wishlist.splice(index, 1);
    this.wishlistSubject.next(this.wishlist);
  }
}
