import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksComponent } from './books/books.component'; 
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {path: '', redirectTo: '/show-books', pathMatch: 'full'},
  {path: 'show-books', component: BooksComponent},
  {path: 'show-wishlist', component: WishlistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
