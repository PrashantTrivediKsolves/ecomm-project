import { TestBed } from '@angular/core/testing';

import { SesellerService } from './seseller.service';

describe('SesellerService', () => {
  let service: SesellerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SesellerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
