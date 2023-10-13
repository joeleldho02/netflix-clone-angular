import { TestBed } from '@angular/core/testing';

import { TheMovieApiService } from './the-movie-api.service';

describe('TheMovieApiService', () => {
  let service: TheMovieApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheMovieApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
