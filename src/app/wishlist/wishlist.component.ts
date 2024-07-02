import { Component, OnInit } from '@angular/core';
import { book } from '../interfaces/book';
import { WishlistService } from '../services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})

export class WishlistComponent {
  wishlist: book[] = [];

  constructor(private wishlistService: WishlistService) {}

  ngOnInit() {
    this.wishlistService.getWishlist().subscribe((wishlist: book[]) => {
      this.wishlist = wishlist;
    });
  }

  removeFromWishlist(index: number) {
    this.wishlistService.removeFromWishlist(index);
  }
}
