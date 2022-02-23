/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FinderService } from './finder.service';

describe('Service: Finder', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinderService]
    });
  });

  it('should ...', inject([FinderService], (service: FinderService) => {
    expect(service).toBeTruthy();
  }));
});
