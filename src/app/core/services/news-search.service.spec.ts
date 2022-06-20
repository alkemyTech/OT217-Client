/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NewsSearchService } from './news-search.service';

describe('Service: NewsSearch', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsSearchService]
    });
  });

  it('should ...', inject([NewsSearchService], (service: NewsSearchService) => {
    expect(service).toBeTruthy();
  }));
});
