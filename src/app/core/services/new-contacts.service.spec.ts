import { TestBed } from '@angular/core/testing';

import { NewContactsService } from './new-contacts.service';

describe('NewContactsService', () => {
  let service: NewContactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewContactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
