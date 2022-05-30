import { TestBed } from '@angular/core/testing';

import { PublicapiServiceService } from './publicapi-service.service';

describe('PublicapiServiceService', () => {
  let service: PublicapiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicapiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
