/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OrganizationService } from './organization.service';


describe('Service: Organization', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrganizationService]
    });
  });

  it('should ...', inject([OrganizationService], (service: OrganizationService) => {
    expect(service).toBeTruthy();
  }));


  describe('OrganizationService', () => {
    let service: OrganizationService;

    beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(OrganizationService);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });
})
