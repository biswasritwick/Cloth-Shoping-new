import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { telecallerGuard } from './telecaller.guard';

describe('telecallerGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => telecallerGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
