import { TestBed } from '@angular/core/testing';

import { SamsungQuotationApiService } from './samsung-quotation-api.service';

describe('SamsungQuotationApiService', () => {
  let service: SamsungQuotationApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SamsungQuotationApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
