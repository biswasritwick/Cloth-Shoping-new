import { TestBed } from '@angular/core/testing';

import { CoustomerService } from './coustomer.service';

describe('CoustomerService', () => {
  let service: CoustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
