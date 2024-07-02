import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { book } from '../interfaces/book';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksRetrievalService {

  constructor(private http: HttpClient) { }

  getBooks(searched_item: string): Observable<book[]> {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${searched_item}`;
    return this.http.get(url).pipe(
      map((data: any) => {
        return data.items.map((item: any) => {
          return {
            id: item.id,
            title: item.volumeInfo.title,
            picture: item.volumeInfo.imageLinks.thumbnail,
            publisher: item.volumeInfo.publisher,
            publish_date: item.volumeInfo.publishedDate,
            description: item.volumeInfo.description
          };
        });
      })
    );
  }
}
