/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NewsHomeService } from './newsHome.service';

describe('Service: NewsHome', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsHomeService]
    });
  });

  it('should ...', inject([NewsHomeService], (service: NewsHomeService) => {
    expect(service).toBeTruthy();
  }));
});
