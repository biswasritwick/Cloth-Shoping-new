import { TestBed } from '@angular/core/testing';

import { SellerAuthServiceService } from './seller-auth-service.service';

describe('SellerAuthServiceService', () => {
  let service: SellerAuthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellerAuthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
