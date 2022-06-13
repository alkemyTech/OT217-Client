/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OrganizationListService } from './organization-list.service';

describe('Service: OrganizationList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrganizationListService]
    });
  });

  it('should ...', inject([OrganizationListService], (service: OrganizationListService) => {
    expect(service).toBeTruthy();
  }));
});
