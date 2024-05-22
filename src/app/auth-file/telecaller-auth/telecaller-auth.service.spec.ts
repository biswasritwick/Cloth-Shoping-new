import { TestBed } from '@angular/core/testing';

import { TelecallerAuthService } from './telecaller-auth.service';

describe('TelecallerAuthService', () => {
  let service: TelecallerAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelecallerAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
