import { TestBed } from '@angular/core/testing';

import { InvestmintService } from './investmint.service';

describe('InvestmintService', () => {
  let service: InvestmintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvestmintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
