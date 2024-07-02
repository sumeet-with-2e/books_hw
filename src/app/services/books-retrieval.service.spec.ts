import { TestBed } from '@angular/core/testing';

import { BooksRetrievalService } from './books-retrieval.service';

describe('BooksRetrievalService', () => {
  let service: BooksRetrievalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksRetrievalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
