import { TestBed, inject } from '@angular/core/testing';

import { TechnicalCreateService } from './technical-create.service';

describe('TechnicalCreateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TechnicalCreateService]
    });
  });

  it('should be created', inject([TechnicalCreateService], (service: TechnicalCreateService) => {
    expect(service).toBeTruthy();
  }));
});
