import { TestBed } from '@angular/core/testing';

import { NewCategoriesService } from './new-categories.service';

describe('NewCategoriesService', () => {
  let service: NewCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
