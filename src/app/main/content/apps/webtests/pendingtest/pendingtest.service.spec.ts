import { TestBed, inject } from '@angular/core/testing';

import { PendingtestService } from './pendingtest.service';

describe('PendingtestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PendingtestService]
    });
  });

  it('should be created', inject([PendingtestService], (service: PendingtestService) => {
    expect(service).toBeTruthy();
  }));
});
