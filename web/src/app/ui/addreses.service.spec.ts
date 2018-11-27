import { TestBed, inject } from '@angular/core/testing';

import { AddresesService } from './addreses.service';

describe('AddresesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddresesService]
    });
  });

  it('should be created', inject([AddresesService], (service: AddresesService) => {
    expect(service).toBeTruthy();
  }));
});
