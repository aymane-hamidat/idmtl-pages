import { TestBed } from '@angular/core/testing';

import { IdmtlService } from './idmtl.service';

describe('IdmtlService', () => {
  let service: IdmtlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdmtlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
