import { TestBed } from '@angular/core/testing';

import { NewSalesService } from './new-sales.service';

describe('NewSalesService', () => {
  let service: NewSalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewSalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
