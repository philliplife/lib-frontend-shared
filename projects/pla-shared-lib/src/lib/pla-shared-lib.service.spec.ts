import { TestBed } from '@angular/core/testing';

import { PlaSharedLibService } from './pla-shared-lib.service';

describe('PlaSharedLibService', () => {
  let service: PlaSharedLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlaSharedLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
